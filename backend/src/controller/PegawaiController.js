import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

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
const generateIdWithDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  const idPembelian = `pbln-${formattedDate}-${uuidv4()}`;
  return idPembelian;
};
export const createPembelian = async (req, res) => {
  const { nama_obat, jenis_obat, tanggal_exp, jumlah, harga_beli, harga_jual, stok_obat, id_supplier, gambar, kategori_obat, sub_kategori, tipe_obat } = req.body;
  //const id_staff = req.id_staff;
  // const checkObat = await prisma.obat.findFirst({
  //   where: { nama_obat: nama_obat },
  // });
  // if (checkObat) { return res.status(400).json({ msg: "Obat sudah ada" }); }
  const idPembelian = generateIdWithDate();

  const staff_id = req.userId;
  console.log("Id staff: " + staff_id);

  try {
    const obat = await prisma.obat.create({
      data: {
        id: obatId,
        nama_obat: nama_obat,
        jenis_obat: jenis_obat,
        tanggal_expired: tanggal_exp,
        jumlah: jumlah,
        harga_beli: harga_beli,
        harga_jual: harga_jual,
        stok_obat: stok_obat,
        staff: {
          connect: { id: staff_id },
        },
        supplier: {
          connect: { id: id_supplier },
        },
        gambar: gambar,
        kategori_obat: kategori_obat,
        sub_kategori: sub_kategori,
        tipe_obat: tipe_obat,
      },
    });
    res.status(201).json(obat);
  } catch (error) {
    res.status(400).json({ message: error });
    console.log(error);
  }
};
