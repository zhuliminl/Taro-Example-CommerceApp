import Taro from "@tarojs/taro";

export const navigateTo = (pathName, params = {}) => {
  let baseRoute = '/pages'
  const paramsStr = Object.keys(params).map(function (k) {
    return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]);
  }).join('&')

  console.log('FIN pathName', pathName)

  // ================ 基础模块路由 =================
  const package_base_routes = [
    'img_gallery',
    'item_detail'
  ]
  if (package_base_routes.includes(pathName)) {
    baseRoute = '/package_base'
  }


  // ================ 用户模块路由 =================
  const package_user_routes = [
    'setting',
    'user_login',
  ]
  if (package_user_routes.includes(pathName)) {
    baseRoute = '/package_user'
  }

  // ================ Home 模块路由 =================
  const package_home_routes = [
    'search_transition',
    'search'
  ]
  if (package_home_routes.includes(pathName)) {
    baseRoute = '/package_home'
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