import express from "express";
import { getAllObat, getObat, createObat, updateObat, deleteObat } from "../controller/ObatController.js";

const router = express.Router();

router.get("/obat", getAllObat);
router.get("/obat/:id", getObat);
router.post("/obat", createObat);
router.patch("/obat/:id", updateObat);
router.delete("/obat/:id", deleteObat);

export default router;
