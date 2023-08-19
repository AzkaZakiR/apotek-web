import express from "express";
import { getAllSupplier, getSupplier, getAllPelanggan } from "../controller/SupplierController.js";

const router = express.Router();

router.get("/supplier", getAllSupplier);
router.get("/pelanggan", getAllPelanggan);
router.post("/supplier/:id", getSupplier);

export default router;
