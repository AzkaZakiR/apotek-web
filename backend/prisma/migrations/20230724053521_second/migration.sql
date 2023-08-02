/*
  Warnings:

  - Added the required column `id_apoteker` to the `Obat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_kasir` to the `Obat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_staff` to the `Obat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_supplier` to the `Obat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_pembelian` to the `Pelanggan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `obat` ADD COLUMN `id_apoteker` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_kasir` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_staff` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_supplier` VARCHAR(191) NOT NULL,
    MODIFY `nama_obat` VARCHAR(191) NULL,
    MODIFY `jenis_obat` VARCHAR(191) NULL,
    MODIFY `tanggal_expired` VARCHAR(191) NULL,
    MODIFY `harga_beli` VARCHAR(191) NULL,
    MODIFY `harga_jual` VARCHAR(191) NULL,
    MODIFY `stok_obat` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `pelanggan` ADD COLUMN `id_pembelian` VARCHAR(191) NOT NULL,
    MODIFY `nama` VARCHAR(191) NULL,
    MODIFY `alamat` VARCHAR(191) NULL,
    MODIFY `no_telp` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Apoteker` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NULL,
    `alamat` VARCHAR(191) NULL,
    `no_telp` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Staff_gudang` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NULL,
    `alamat` VARCHAR(191) NULL,
    `no_telp` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Supplier` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NULL,
    `alamat` VARCHAR(191) NULL,
    `no_telp` INTEGER NULL,
    `id_staff` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pegawai` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NULL,
    `alamat` VARCHAR(191) NULL,
    `no_telp` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pembelian` (
    `id` VARCHAR(191) NOT NULL,
    `jumlah_jual` INTEGER NULL,
    `total_harga` VARCHAR(191) NULL,
    `tanggal_beli` DATETIME(3) NULL,
    `jumlah_beli` VARCHAR(191) NULL,
    `id_obat` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Laporan` (
    `id` VARCHAR(191) NOT NULL,
    `isi_laporan` LONGTEXT NOT NULL,
    `tanggal_laporan` VARCHAR(191) NOT NULL,
    `id_pegawai` VARCHAR(191) NOT NULL,
    `id_pemilik` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pemilik` (
    `id` INTEGER NOT NULL,
    `Nama` VARCHAR(191) NOT NULL,
    `Alamat` VARCHAR(191) NOT NULL,
    `no_telp` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Obat` ADD CONSTRAINT `Obat_id_apoteker_fkey` FOREIGN KEY (`id_apoteker`) REFERENCES `Apoteker`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Obat` ADD CONSTRAINT `Obat_id_staff_fkey` FOREIGN KEY (`id_staff`) REFERENCES `Staff_gudang`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Obat` ADD CONSTRAINT `Obat_id_supplier_fkey` FOREIGN KEY (`id_supplier`) REFERENCES `Supplier`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Obat` ADD CONSTRAINT `Obat_id_kasir_fkey` FOREIGN KEY (`id_kasir`) REFERENCES `Pegawai`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Supplier` ADD CONSTRAINT `Supplier_id_staff_fkey` FOREIGN KEY (`id_staff`) REFERENCES `Staff_gudang`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pelanggan` ADD CONSTRAINT `Pelanggan_id_pembelian_fkey` FOREIGN KEY (`id_pembelian`) REFERENCES `Pembelian`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pembelian` ADD CONSTRAINT `Pembelian_id_obat_fkey` FOREIGN KEY (`id_obat`) REFERENCES `Obat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Laporan` ADD CONSTRAINT `Laporan_id_pegawai_fkey` FOREIGN KEY (`id_pegawai`) REFERENCES `Pegawai`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Laporan` ADD CONSTRAINT `Laporan_id_pemilik_fkey` FOREIGN KEY (`id_pemilik`) REFERENCES `Pemilik`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
