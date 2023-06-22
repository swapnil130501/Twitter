import * as dummyfunctions from '../../tests/services/dummmy-service.js';
import { execute } from '../../tests/services/dummmy-service.js';

test('result is true and returns Learning JS', () => {
    // IMPL of test

    const spy = jest.spyOn(dummyfunctions, 'helper').mockImplementation(() => {
        return false;
    });
    const result = execute();
    expect(result).toBe('Learning JS');
});