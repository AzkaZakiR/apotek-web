import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

export const getAllObat = async (req, res) => {
  try {
    const obat = await prisma.obat.findMany();
    res.status(200).json(obat);
  } catch (err) {
    res.status(500).json({ msg: err.message });
    console.log(err);
  }
  // res.status(200).send("ALlobat is working");
};

export const getObat = async (req, res) => {
  // res.status(200).send("get one obat is working");
  try {
    const obatId = req.params.id;
    const obat = await prisma.obat.findUnique({
      where: {
        id: obatId,
      },
    });
    res.status(200).json({ response: obat });
  } catch (error) {
    res.status(500).json({ message: error });
    console.log(error);
  }
};
export const createObat = async (req, res) => {
  const { medicines, id_pelanggan } = req.body;
  //const id_staff = req.id_staff;
  const checkObat = await prisma.obat.findFirst({
    where: { nama_obat: nama_obat },
  });
  if (checkObat) {
    return res.status(400).json({ msg: "Obat sudah ada" });
  }
  const obatId = `obat-${uuidv4()}`;
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

  // res.status(200).send("create obat is working");
};

export const updateObat = async (req, res) => {
  const obatId = req.params.id;
  const newData = req.body;

  try {
    const obat = await prisma.obat.update({
      where: {
        id: obatId,
      },
      data: {
        ...newData,
      },
    });
    res.status(201).json(obat);
  } catch (error) {
    res.status(400).json({ message: error });
    console.log(error);
  }
};

export const deleteObat = async (req, res) => {
  const obatId = req.params.id;

  try {
    const obat = await prisma.obat.delete({
      where: {
        id: obatId,
      },
    });

    res.status(201).send("Obat berhasil dihapus!");
  } catch (error) {
    res.status(400).json({ message: error });
    console.log(error);
  }
};
