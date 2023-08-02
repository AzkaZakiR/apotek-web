import express from "express";
import { getAllSupplier, getSupplier } from "../controller/SupplierController.js";

const router = express.Router();

router.get("/supplier", getAllSupplier);
router.post("/supplier/:id", getSupplier);

export default router;
