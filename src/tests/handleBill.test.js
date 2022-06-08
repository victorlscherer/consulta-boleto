import { handleBill } from '../services/index';
import { expect, it } from '@jest/globals';

it('should return {"barCode": 21299758700000020000001121100012100447561740, "amount": 20.00, "expirationDate": 2018-07-16}', () => {
    const result = handleBill("21290001192110001210904475617405975870000002000");
    expect(result).toEqual({ "barCode": "21299758700000020000001121100012100447561740", "amount": "20.00", "expirationDate": "2018-07-16" });
})