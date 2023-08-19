import express from "express";
import { verifyToken } from "../Middleware/authJwt.js";
import { getAllObat, getObat, createObat, updateObat, deleteObat } from "../controller/ObatController.js";
import { createPembelian } from "../controller/PegawaiController.js";

const router = express.Router();

router.get("/obat", getAllObat);
router.get("/obat/:id", getObat);
router.post("/obat", [verifyToken], createObat);
router.patch("/obat/:id", updateObat);
router.delete("/obat/:id", deleteObat);

router.post("/pembelian", [verifyToken], createPembelian);

export default router;
