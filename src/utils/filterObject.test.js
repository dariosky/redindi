import {filterObject} from './filterObject'
import _ from 'lodash'

it('filters an object', () => {
  const res = filterObject({1: 2, 3: 4, 5: 6, a: 2},
    (k, v) => v < 5,
  )
  expect(_.isEqual(res, {1: 2, 3: 4, a: 2})).toBe(true);
})
