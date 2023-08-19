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
  const currentDate = new Date();
  const { medicines, id_pelanggan } = req.body;
  const idPembelian = generateIdWithDate();
  console.log("OBat: ");
  console.log(medicines);
  //const idDetailPembelian = `detpem-${uuidv4()}`;
  let nomor_tambah = 1;
  const staff_id = req.userId;
  console.log("Id staff: " + staff_id);
  const total_amount = medicines.reduce((total, product) => total + product.jumlah_beli, 0);
  console.log("Total amount: " + total_amount);
  const total_harga = medicines.reduce((total, product) => total + product.harga_obat, 0);
  console.log("Total harga: " + total_harga);
  //const id = medicines.nama_obat
  try {
    const pembelian_obat = await prisma.pembelian.create({
      data: {
        id: idPembelian,
        jumlah_beli: total_amount,
        total_harga: total_harga,
        tanggal_beli: currentDate,
        id_pelanggan: "pelanggan-01",
        id_apoteker: staff_id,
      },
    });
    const id_pembelian = pembelian_obat.id;
    medicines.forEach((detail) => {
      detail.id_faktur = id_pembelian;
      detail.id_detpembelian = `detpem-${uuidv4()}-${nomor_tambah}`;
      nomor_tambah++;
    });
    console.log("Id pembelian medicinesL");
    console.log(medicines);
    const det_obat = await prisma.det_pembelian.createMany({
      data: medicines,
      //     nama_obat: id,
      //     harga_obat: harga_obat,
      //     jumlah_beli: jumlah_beli,
    });
    res.status(201).json({
      "Pembelian Obat: ": pembelian_obat,
      "Detail pembelian": det_obat.data,
    });
  } catch (error) {
    res.status(400).json({ message: error });
    console.log(error);
  }
};
