import './FAQ.scss'

import Taro, { Component } from '@tarojs/taro'
import { Text, View } from '@tarojs/components'

import HeaderWebpage from '@/components/header-webpage'
import WebPagePoly from '@/components-poly/webpage-poly/index'
import { device } from '@/utils/device'

export default class FAQ extends Component {
  config = {
    navigationBarTitleText: 'FAQ',
    disableScroll: true,
  }

  componentDidMount = () => {
  }

  render() {
    let scrollHeight: any = device.windowHeight
    let marginTop: any = 0

    if (device.isIOS()) {
      scrollHeight = device.windowHeight - 70
      marginTop = 70
    }

    if (device.isH5()) {
      scrollHeight = device.windowHeight - 50
    }

    if (device.isWeChat()) {
      scrollHeight = (device.windowHeight - 10) + 'px' // 微信很奇怪，
    }

    if (device.isAndroid()) {
      scrollHeight = device.windowHeight - 48 - 24
      marginTop = 48
    }

    let frameStyle: any = {
      height: scrollHeight,
      width: device.windowWidth,
      marginTop
    }

    return (
      <View className="FAQ-page">
        <HeaderWebpage
          backgroundColor={'#FFF'}
          titleColor={'#333'}
          title={'常见问题'}
        />
        <WebPagePoly
          frameStyle={frameStyle}
          url={'https://www.baidu.com'}
        />
      </View>
    )
  }
}
