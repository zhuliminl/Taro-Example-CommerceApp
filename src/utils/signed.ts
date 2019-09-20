import md5 from 'md5';

// ========================================
// const appKey = '5d8207aaa51d3'
// const appSecret = '8da8e8abb33117e68c8b03b16810b554'
// const version = 'v1.1.0'
// ========================================


// ========================================
const appKey = '5d8456434a2ef'
const appSecret = '84d437d01d0c23c37a9faef2f1a4427e'
const version = 'v1.1.0'
// ========================================



export const dtkAppData = {
  appKey,
  version,
}

export const signed = (params: any) => {
  let data = {
    appKey,
    version,
    ...params,
  } as any

  let str = ''
  let index = 0
  let sortPor = []

  for (let key in data) {
    sortPor.push(`${key}=${data[key]}`);
  }

  // 排序
  sortPor.sort();

  // 转url
  for (let key in sortPor) {
    str = `${str}${index === 0 ? '' : '&'}${sortPor[key]}`;
    index++;
  }

  const dataStr = `${str}&key=${appSecret}`
  // console.log('FIN dataStr', dataStr)
  // md5加密
  const ret = md5(dataStr)

  return ret
}