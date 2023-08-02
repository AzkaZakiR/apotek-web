/*
  Warnings:

  - You are about to drop the column `id_pegawai` on the `laporan` table. All the data in the column will be lost.
  - You are about to drop the column `id_apoteker` on the `obat` table. All the data in the column will be lost.
  - You are about to drop the column `id_kasir` on the `obat` table. All the data in the column will be lost.
  - You are about to alter the column `stok_obat` on the `obat` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to drop the column `id_pembelian` on the `pelanggan` table. All the data in the column will be lost.
  - You are about to drop the column `id_obat` on the `pembelian` table. All the data in the column will be lost.
  - You are about to drop the column `id_staff` on the `supplier` table. All the data in the column will be lost.
  - You are about to drop the `pegawai` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_apoteker` to the `Laporan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_pelanggan` to the `Pembelian` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `laporan` DROP FOREIGN KEY `Laporan_id_pegawai_fkey`;

-- DropForeignKey
ALTER TABLE `obat` DROP FOREIGN KEY `Obat_id_apoteker_fkey`;

-- DropForeignKey
ALTER TABLE `obat` DROP FOREIGN KEY `Obat_id_kasir_fkey`;

-- DropForeignKey
ALTER TABLE `pelanggan` DROP FOREIGN KEY `Pelanggan_id_pembelian_fkey`;

-- DropForeignKey
ALTER TABLE `pembelian` DROP FOREIGN KEY `Pembelian_id_obat_fkey`;

-- DropForeignKey
ALTER TABLE `supplier` DROP FOREIGN KEY `Supplier_id_staff_fkey`;

-- AlterTable
ALTER TABLE `laporan` DROP COLUMN `id_pegawai`,
    ADD COLUMN `id_apoteker` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `obat` DROP COLUMN `id_apoteker`,
    DROP COLUMN `id_kasir`,
    ADD COLUMN `gambar` VARCHAR(191) NULL,
    ADD COLUMN `kategori_obat` VARCHAR(191) NULL,
    ADD COLUMN `sub_kategori` VARCHAR(191) NULL,
    ADD COLUMN `tipe_obat` VARCHAR(191) NULL,
    MODIFY `jumlah` INTEGER NULL,
    MODIFY `stok_obat` INTEGER NULL;

-- AlterTable
ALTER TABLE `pelanggan` DROP COLUMN `id_pembelian`;

-- AlterTable
ALTER TABLE `pembelian` DROP COLUMN `id_obat`,
    ADD COLUMN `id_pelanggan` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `supplier` DROP COLUMN `id_staff`;

-- DropTable
DROP TABLE `pegawai`;

-- CreateTable
CREATE TABLE `Det_pembelian` (
    `id` VARCHAR(191) NOT NULL,
    `id_faktur` VARCHAR(191) NOT NULL,
    `id_obat` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pembelian` ADD CONSTRAINT `Pembelian_id_pelanggan_fkey` FOREIGN KEY (`id_pelanggan`) REFERENCES `Pelanggan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Det_pembelian` ADD CONSTRAINT `Det_pembelian_id_faktur_fkey` FOREIGN KEY (`id_faktur`) REFERENCES `Pembelian`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Det_pembelian` ADD CONSTRAINT `Det_pembelian_id_obat_fkey` FOREIGN KEY (`id_obat`) REFERENCES `Obat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Laporan` ADD CONSTRAINT `Laporan_id_apoteker_fkey` FOREIGN KEY (`id_apoteker`) REFERENCES `Apoteker`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
