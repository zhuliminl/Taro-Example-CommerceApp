import {Platform} from '@tarojs/components-rn'


export const device = {
  isRN: () => process.env.TARO_ENV === 'rn',
  isWeChat: () => process.env.TARO_ENV === 'weapp',
  isAliPay: () => process.env.TARO_ENV === 'alipay',
  isH5: () => process.env.TARO_ENV === 'h5',
  isAndroid: () => Platform.OS === 'android',
  isIOS: () => Platform.OS === 'ios',
}