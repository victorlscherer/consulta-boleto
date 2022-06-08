import { getBillValue } from '../utils/index';
import { expect, it } from '@jest/globals';

it('should return 20.00', () => {
    const result = getBillValue("21290001192110001210904475617405975870000002000");
    expect(result).toBe('20.00');
})