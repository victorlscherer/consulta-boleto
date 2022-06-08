const addZero = (num) => {
    return num < 10 ? `0${num}` : num;
}
export const getBarCode = (bill) => {
    if (bill.length === 47) {
        const bankCode = bill.slice(0, 3);
        const coinCode = bill.slice(3, 4);
        const dvCode = bill.slice(bill.length - 15, bill.length - 14);
        const dueDateCode = bill.slice(bill.length - 14, bill.length - 10);
        const valueCoded = bill.slice(bill.length - 10, bill.length);
        const freeFieldCode = bill.slice(4, bill.length - 15);
        const freeField = freeFieldCode.slice(0, 5) + freeFieldCode.slice(6, 16) + freeFieldCode.slice(17, freeFieldCode.length - 1);

        const barCode = `${bankCode}${coinCode}${dvCode}${dueDateCode}${valueCoded}${freeField}`;

        return barCode;
    } else {
        const barCode = bill.slice(0, 11) + bill.slice(12, 23) + bill.slice(24, 35) + bill.slice(36, 47);
        return barCode;
    }
}

export const getDate = (bill) => {
    if (bill.length === 47) {
        const billDueDays = bill.slice(bill.length - 14, bill.length - 10);
        const days = Number(billDueDays)
        const base = new Date("1997-10-07");
        const dueDate = new Date(base.getTime() + ((days + 1) * 24 * 60 * 60 * 1000));

        const formatDate = `${addZero(dueDate.getFullYear())}-${addZero(dueDate.getMonth() + 1)}-${addZero(dueDate.getDate())}`;
        return formatDate;
    } else {
        bill = bill.slice(0, 11) + bill.slice(12, 23) + bill.slice(24, 35) + bill.slice(36, 47);
        const billDueDays = bill.slice(24, 32);
        const year = billDueDays.slice(0, 4);
        const month = billDueDays.slice(4, 6);
        const day = billDueDays.slice(6, 8);

        if (Number(year) >= 2010) {
            const formatDate = `${year}-${month}-${day}`;
            return formatDate;
        } else {
            return "No expiration date";
        }

    }

}

export const getBillValue = (bill) => {
    if (bill.length === 47) {
        const billValueCode = bill.slice(bill.length - 10, bill.length);
        const billValue = Number(billValueCode)
        const billValueCents = billValue.toString().slice(- 2);
        const billValueReal = billValue.toString().slice(0, - 2);
        const billValueFormatted = `${billValueReal}.${billValueCents}`;

        return billValueFormatted;
    } else {
        bill = bill.slice(0, 11) + bill.slice(12, 23) + bill.slice(24, 35) + bill.slice(36, 47);
        const billValueCode = bill.slice(5, 15);
        const billValue = Number(billValueCode)
        const billValueCents = billValue.toString().slice(- 2);
        const billValueReal = billValue.toString().slice(0, - 2);
        const billValueFormatted = `${billValueReal}.${billValueCents}`;

        return billValueFormatted;
    }
}
