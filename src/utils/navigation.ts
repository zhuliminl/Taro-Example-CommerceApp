import Taro from "@tarojs/taro";

export const navigateTo = (pathName, params = {}) => {
  let baseRoute = '/pages'
  const paramsStr = Object.keys(params).map(function (k) {
    return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]);
  }).join('&')

  console.log('FIN pathName', pathName)

  if (pathName === 'setting') {
    baseRoute = '/package_user'
  }

  if (pathName === 'img_gallery') {
    baseRoute = '/package_base'
  }

  Taro.navigateTo({
    url: `${baseRoute}/${pathName}/${pathName}?${paramsStr}`
  })
}

export const parseUrlParams = data => {
  let paramsObj: any = {}
  Object.keys(data).forEach(key => {
    paramsObj[key] = decodeURIComponent(data[key])
  })
  return paramsObj
}