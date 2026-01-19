import express from "express";
import { searchDoctorsByCity , addDoctor} from "../controllers/doctorController.js";

const router = express.Router();

router.get("/search/city", searchDoctorsByCity);

router.post("/add", addDoctor); 

export default router;
