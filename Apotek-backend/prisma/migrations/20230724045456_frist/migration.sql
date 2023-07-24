-- CreateTable
CREATE TABLE `Obat` (
    `id` VARCHAR(191) NOT NULL,
    `nama_obat` VARCHAR(191) NOT NULL,
    `jenis_obat` VARCHAR(191) NOT NULL,
    `tanggal_expired` VARCHAR(191) NOT NULL,
    `jumlah` INTEGER NOT NULL,
    `harga_beli` VARCHAR(191) NOT NULL,
    `harga_jual` VARCHAR(191) NOT NULL,
    `stok_obat` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pelanggan` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `no_telp` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
