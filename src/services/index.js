import { getBarCode, getBillValue, getDate } from "../utils/index";

export const handleBill = (bill) => {
    let dueDate = getDate(bill);
    let billValue = getBillValue(bill);
    let barCode = getBarCode(bill);

    return { "barCode": barCode, "amount": billValue, "expirationDate": dueDate };
}