/*
  Warnings:

  - Added the required column `id_apoteker` to the `Pembelian` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pembelian` ADD COLUMN `id_apoteker` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Pembelian` ADD CONSTRAINT `Pembelian_id_apoteker_fkey` FOREIGN KEY (`id_apoteker`) REFERENCES `Apoteker`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
