import { Router } from "express";
import authenticate from "../middleware/auth.middleware.js";
import { getResume, uploadResume } from "../controllers/resume.controller.js";
import { uploadResume as multerUpload } from "../middleware/upload.middleware.js";

const router = Router();

router.use(authenticate);

router.post('/upload',multerUpload,uploadResume);
router.get('/',getResume);

export default router;