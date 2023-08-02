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
    const status = req.body.status;

    if (status === "apoteker") {
      const apoteker = await prisma.apoteker.findUnique({
        where: {
          id: idPegawai,
        },
      });

      res.status(200).json(apoteker);
    } else if (status === "staff gudang") {
      const staffGudang = await prisma.staff_gudang.findUnique({
        where: {
          id: idPegawai,
        },
      });

      console.log(staffGudang);
      res.status(200).json(staffGudang);
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(400).json({ message: error });
    console.log(error);
  }
};
