import express from "express";
import { get, post } from "../controllers/postName.controller";

const router = express.Router();

router.get("/post", get);
router.post("/post", post);

export default router;
