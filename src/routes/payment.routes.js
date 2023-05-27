import { Router } from "express";
import { createOrder, successOrder, webhookOrder, failureOrder, pendingOrder } from "../controllers/payment.controller.js";

const router = Router();

router.post('/create-order', createOrder);

router.get('/success-order', successOrder);
router.get('/failure-order', failureOrder);
router.get('/pending-order', pendingOrder);

router.post('/webhook-order', webhookOrder);

export default router;