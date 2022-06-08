import express from 'express';
import validateBill from '../middlewares/validateBill.middleware';
import processBill from '../controllers/bill.controller';

const router = express.Router();

router.get('/boleto/:bill', validateBill, processBill)

export default router;