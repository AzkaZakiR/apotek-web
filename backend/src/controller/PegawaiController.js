import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllPegawai = async (req, res) => {
  try {
    const apoteker = await prisma.apoteker.findMany();
    const staffGudang = await prisma.staff_gudang.findMany();

    apoteker.map((e) => {
      e.status = "apoteker";
    });

    staffGudang.map((e) => {
      e.status = "staff gudang";
    });

    const pegawai = [...apoteker, ...staffGudang];
    res.status(200).json(pegawai);
  } catch (error) {
    res.status(500).json({ msg: error.message });
    console.log(error);
  }
};

export const getPegawai = async (req, res) => {
  try {
    const idPegawai = req.params.id;

    const existingUserApoteker = await prisma.apoteker.findFirst({
      where: {
        id: idPegawai,
      },
    });

    const existingUserStaff = await prisma.staff_gudang.findUnique({
      where: {
        id: idPegawai,
      },
    });

    if (!existingUserApoteker && !existingUserStaff) {
      return res.status(400).json({ msg: "User not found" });
    }
    let existingUser;
    if (existingUserApoteker) {
      existingUser = existingUserApoteker;
    } else {
      existingUser = existingUserStaff;
    }

    res.status(200).send(existingUser);
  } catch (error) {
    res.status(400).json({ message: error });
    console.log(error);
  }
};
