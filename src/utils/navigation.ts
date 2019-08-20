import Taro from "@tarojs/taro";

export const navigateTo = (pathName, params = {}) => {
    const paramsStr = Object.keys(params).map(function(k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]);
    }).join('&')

    console.log('FIN paramsStr ===>',paramsStr)

    Taro.navigateTo({
      url: `/pages/${pathName}/${pathName}?${paramsStr}`
    })
  }

export const parseUrlParams = data => {
    let paramsObj : any = {}
    Object.keys(data).forEach(key => {
      paramsObj[key] = decodeURIComponent(data[key])
    })
    return paramsObj
  }