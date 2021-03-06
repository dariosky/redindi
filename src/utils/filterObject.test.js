import {filterObject} from './filterObject'
import isEqual from 'lodash/isEqual';

it('filters an object', () => {
  const res = filterObject({1: 2, 3: 4, 5: 6, a: 2},
    (k, v) => v < 5,
  )
  expect(isEqual(res, {1: 2, 3: 4, a: 2})).toBe(true);
})
