import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllSupplier = async (req, res) => {
  try {
    const supplier = await prisma.supplier.findMany();
    res.status(200).json(supplier);
  } catch (error) {
    res.status(500).json({ msg: error.message });
    console.log(error);
  }
};

export const getAllPelanggan = async (req, res) => {
  try {
    const supplier = await prisma.pelanggan.findMany();
    res.status(200).json(supplier);
  } catch (error) {
    res.status(500).json({ msg: error.message });
    console.log(error);
  }
};
export const getSupplier = async (req, res) => {
  try {
    const idSupplier = req.params.id;

    const supplier = await prisma.supplier.findUnique({
      where: {
        id: idSupplier,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error });
    console.log(error);
  }
};
