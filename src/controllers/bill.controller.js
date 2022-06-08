import { handleBill } from '../services/index';

const processBill = (req, res) => {
    let { bill } = req.params;

    const billReturn = handleBill(bill)
    return res.status(200).json(billReturn);


}

export default processBill;
