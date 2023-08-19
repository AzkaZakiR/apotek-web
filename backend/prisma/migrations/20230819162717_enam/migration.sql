/*
  Warnings:

  - The primary key for the `det_pembelian` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `det_pembelian` table. All the data in the column will be lost.
  - You are about to alter the column `jumlah_beli` on the `pembelian` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - A unique constraint covering the columns `[username]` on the table `Apoteker` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `Pelanggan` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `Staff_gudang` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `Apoteker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Apoteker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_detpembelian` to the `Det_pembelian` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Pelanggan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Pelanggan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Staff_gudang` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Staff_gudang` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `apoteker` ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `det_pembelian` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `harga_obat` INTEGER NULL,
    ADD COLUMN `id_detpembelian` VARCHAR(191) NOT NULL,
    ADD COLUMN `jumlah_beli` INTEGER NULL,
    ADD PRIMARY KEY (`id_detpembelian`);

-- AlterTable
ALTER TABLE `pelanggan` ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `pembelian` MODIFY `jumlah_beli` INTEGER NULL;

-- AlterTable
ALTER TABLE `staff_gudang` ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Apoteker_username_key` ON `Apoteker`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `Pelanggan_username_key` ON `Pelanggan`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `Staff_gudang_username_key` ON `Staff_gudang`(`username`);
