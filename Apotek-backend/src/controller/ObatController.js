import { PrismaClient } from "@prisma/client";
// import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

export const getAllObat = async (req, res) => {
  // try {
  //   const obat = await prisma.obat.findMany();
  //   res.status(200).json({ response: obat });
  // } catch (err) {
  //   res.status(500).json({ msg: err.message });
  //   console.log(err);
  // }
  res.status(200).send("get All obat is wgtwaggwa working");
  //res.status(200).send("get All obat is working");
};

export const getObat = async (req, res) => {
  // res.status(200).send("get one obat is working");
  res.status(200).send("get one ");
};
export const createObat = async (req, res) => {
  res.status(200).send("create obat is working");
};

export const updateObat = async (req, res) => {
  res.status(200).send("update obat is working");
};

export const deleteObat = async (req, res) => {
  res.status(200).send("delete obat is working");
};
