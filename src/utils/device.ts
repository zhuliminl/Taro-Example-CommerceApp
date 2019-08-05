import { Platform } from "react-native";
import Taro from "@tarojs/taro";

const isRN =  process.env.TARO_ENV === 'rn'

let scrollHeight : number = Taro.getSystemInfoSync().windowHeight
if(isRN && Platform.OS === 'ios') {
  scrollHeight = 667
}
if(isRN && Platform.OS === 'android') {
  scrollHeight = 567
}


let windowHeight : any = Taro.getSystemInfoSync().windowHeight
// if(process.env.TARO_ENV === 'weapp') {
//   windowHeight = windowHeight + 'px'
// }

let windowWidth : any = Taro.getSystemInfoSync().windowWidth
// if(process.env.TARO_ENV === 'weapp') {
//   windowWidth = windowWidth + 'px'
// }

export const device = {
  // 设备平台判断
  isRN: () => isRN,
  isWeChat: () => process.env.TARO_ENV === 'weapp',
  isAliPay: () => process.env.TARO_ENV === 'alipay',
  isH5: () => process.env.TARO_ENV === 'h5',
  isAndroid: () => {
    if(isRN) {
      return Platform.OS === 'android'
    }
  },
  isIOS: () => {
    if(isRN) {
      return Platform.OS === 'ios'
    }
  },

  // 
  windowHeight,
  windowWidth,
  // 对微信端特定的兼容，RN 的样式写法，不能兼容小程序
  pxCompatibleToWechat: (n: any) => {
    if(process.env.TARO_ENV === 'weapp') {
      return  n*2 + 'px'
    }
    return n
  },
  scrollHeight,  // 后期根据测试返回再完善
  info: Taro.getSystemInfoSync(),
}