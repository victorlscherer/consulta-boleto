import { getDate } from '../utils/index';
import { expect, it } from '@jest/globals';

it('should return 2018-07-16', () => {
    const result = getDate("21290001192110001210904475617405975870000002000");
    expect(result).toBe('2018-07-16');
})