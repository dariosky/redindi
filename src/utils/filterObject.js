export function filterObject(obj, func) {
  let result = {}
  for (let key of Object.keys(obj)) {
    let val = obj[key]
    if (func(key, val)) {
      result[key] = val
    }
  }
  return result
}
