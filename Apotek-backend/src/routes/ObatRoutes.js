import express from "express";
import { getAllObat, getObat, createObat, updateObat, deleteObat } from "../controller/ObatController.js";

const router = express.Router();

router.get("/obat", getAllObat);
router.get("/obat/single", getObat);
router.post("/obat", createObat);
router.patch("/obat", updateObat);
router.delete("/obat", deleteObat);

export default router;
