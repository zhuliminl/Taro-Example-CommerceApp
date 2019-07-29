import { Platform } from "react-native";
import Taro from "@tarojs/taro";

const isRN =  process.env.TARO_ENV === 'rn'

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
  windowHeight: Taro.getSystemInfoSync().windowHeight,
  windowWidth: Taro.getSystemInfoSync().windowWidth,
}