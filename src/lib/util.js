const objectDeepMerge = (target, source) => {
  for (let key in source) {
    // 如果target(也就是obj1[key])存在，且是对象的话再去调用deepMerge，否则就是obj1[key]里面没这个对象，需要与obj2[key]合并
    target[key] = target[key] && target[key].toString() === '[object Object]'
      ? objectDeepMerge(target[key], source[key]) : target[key] = source[key]
  }
  return target
}

const objectStyleToStringStyle = obj => {
  let styleNames = Object.keys(obj)
  let stringStyle = ``
  styleNames.forEach(item => {
    stringStyle += `${item} : ${obj[item]};`
  })
  return stringStyle
}

export {
  objectDeepMerge,
  objectStyleToStringStyle
}
