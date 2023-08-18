import { PrismaClient } from "@prisma/client";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import secretKey from "../Middleware/config.js";

const prisma = new PrismaClient();
const saltRound = 5;

async function createUser(uid, name, username, hashPass, alamat, no_telp, role) {
  try {
    let user;

    if (role === 1) {
      user = await prisma.apoteker.create({
        data: {
          id: uid,
          nama: name,
          username: username,
          password: hashPass,
          alamat: alamat,
          no_telp: no_telp,
        },
      });
    } else if (role === 2) {
      user = await prisma.staff_gudang.create({
        data: {
          id: uid,
          nama: name,
          username: username,
          password: hashPass,
          alamat: alamat,
          no_telp: no_telp,
        },
      });
    } else if (role === 3) {
      user = await prisma.pelanggan.create({
        data: {
          id: uid,
          nama: name,
          username: username,
          password: hashPass,
          alamat: alamat,
          no_telp: no_telp,
        },
      });
    } else {
      throw new Error("Role tidak valid");
    }

    return user;
  } catch (error) {
    throw error;
  }
}

export const registerUser = async (req, res) => {
  const { nama, username, password, confPassword, alamat, no_telp, role } = req.body;
  const checkUsername = await prisma.apoteker.findUnique({
    where: { username: username },
  });
  if (checkUsername) {
    return res.status(400).json({ msg: "username sudah ada" });
  }
  if (password.length < 8) return res.status(400).json({ msg: "Password can't be less than 8 characters!" });

  if (password !== confPassword) return res.status(400).json({ msg: "Password and Confirmation password do not match!!" });
  const hashPass = bcrypt.hashSync(password, saltRound);
  try {
    let uid, roles;
    if (role == 1) {
      uid = `aptkr-${uuid().split("-")[0]}`;
    } else if (role == 2) {
      uid = `usr-${uuid().split("-")[0]}`;
    } else if (role == 3) {
      uid = `cstm-${uuid().split("-")[0]}`;
    } else {
      return res.status(400).json({ msg: "Role tidak ada" });
    }
    let user = await createUser(uid, nama, username, hashPass, alamat, no_telp, role);
    res.status(201).json({ message: "User registered succesfully", user });
  } catch (error) {
    res.status(400).json({ msg: error.message });
    console.log(error);
  }
};

export const loginUser = async (req, res) => {
  let { username, password } = req.body;
  let existingUser, existingUserApoteker, existingUserStaff;
  try {
    existingUserApoteker = await prisma.apoteker.findFirst({
      where: {
        username: username,
      },
    });

    existingUserStaff = await prisma.staff_gudang.findUnique({
      where: {
        username: username,
      },
    });

    if (!existingUserApoteker && !existingUserStaff) {
      return res.status(400).json({ msg: "User not found" });
    }

    if (existingUserApoteker) {
      existingUser = existingUserApoteker;
    } else {
      existingUser = existingUserStaff;
    }

    let checkPas = await bcrypt.compare(password, existingUser.password);
    if (!checkPas) {
      return res.status(400).json({
        accessToken: null,
        msg: "Wrong Password",
      });
    }

    //generate JWT token
    const token = jwt.sign(
      {
        id: existingUser.id,
      },
      secretKey,
      {
        algorithm: "HS256",
        expiresIn: "5h",
      }
    );
    res.status(200).json({
      success: true,
      data: {
        userId: existingUser.id,
        username: username,
        accessToken: token,
      },
    });
    console.log("Login successful");
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
};
