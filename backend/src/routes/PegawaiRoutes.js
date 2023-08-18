import express from "express";
import { getAllPegawai, getPegawai } from "../controller/PegawaiController.js";

const router = express.Router();

router.get("/pegawai", getAllPegawai);
router.get("/pegawai/:id", getPegawai);

export default router;
