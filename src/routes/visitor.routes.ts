import { Router } from "express";
import { getAndIncrementVisitor, getVisitorCount } from "../controllers/visitor.controller";

const router = Router();

// called when site loads
router.get("/", getAndIncrementVisitor);

// optional: just read count
router.get("/count", getVisitorCount);

export default router;
