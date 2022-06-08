import { getBarCode } from '../utils/index';

import { expect, it } from '@jest/globals';

it('should return 21299758700000020000001121100012100447561740', () => {
    const result = getBarCode("21290001192110001210904475617405975870000002000");
    expect(result).toBe('21299758700000020000001121100012100447561740');
})