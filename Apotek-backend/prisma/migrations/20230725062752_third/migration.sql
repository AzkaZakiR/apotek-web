-- AlterTable
ALTER TABLE `apoteker` MODIFY `no_telp` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `pegawai` MODIFY `no_telp` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `pemilik` MODIFY `Nama` VARCHAR(191) NULL,
    MODIFY `Alamat` VARCHAR(191) NULL,
    MODIFY `no_telp` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `staff_gudang` MODIFY `no_telp` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `supplier` MODIFY `no_telp` VARCHAR(191) NULL;
