import { PrismaClient } from "@prisma/client";
import { staffG } from "./staff_gudang.js";
import { supplier } from "./supplier.js";
import { apoteker } from "./apoteker.js";
import { obat } from "./obat.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // const hashPass = await bcrypt.hash('qwerty123', 10)
  // for (let staff of staffG) {
  //   await prisma.staff_gudang.create({
  //     data: staff,
  //   });
  // }
  // for (let suppli of supplier) {
  //   await prisma.supplier.create({
  //     data: suppli,
  //   });
  // }
  // for (let apotek of apoteker) {
  //   await prisma.apoteker.create({
  //     data: apotek,
  //   });
  // }
  for (let medicine of obat)
    [
      await prisma.obat.create({
        data: medicine,
      }),
    ];
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect;
  });
