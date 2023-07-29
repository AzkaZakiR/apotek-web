/*
  Warnings:

  - Made the column `harga_beli` on table `obat` required. This step will fail if there are existing NULL values in that column.
  - Made the column `harga_jual` on table `obat` required. This step will fail if there are existing NULL values in that column.
  - Made the column `total_harga` on table `pembelian` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `obat` MODIFY `harga_beli` INTEGER NOT NULL,
    MODIFY `harga_jual` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `pembelian` MODIFY `total_harga` INTEGER NOT NULL;
