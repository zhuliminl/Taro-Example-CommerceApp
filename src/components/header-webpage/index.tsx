import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import { device } from '@/utils/device'

import back_img from '@/assets/icon/back_white.png'
import close_img from '@/assets/icon/close_white.png'
import reload_img from '@/assets/icon/reload_white.png'

interface HeaderWebpageInterface {
  title: string;
  backgroundColor: string;
}

export default class HeaderWebpage extends Component<HeaderWebpageInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    let wrapStyle: any = {}
    if (device.isIOS()) {
      wrapStyle.paddingTop = 20
      wrapStyle.height = 70
    }

    if (device.isWeChat()) {
      wrapStyle.paddingTop = 20 + 'px'
    }

    const { backgroundColor = 'red' } = this.props

    return (
      <View className="header-webpage-comp" style={{ backgroundColor, ...wrapStyle }}>
        <View className='header-webpage-back-wrap' onClick={() => {
          Taro.navigateBack()
        }}>
          <Image className='header-webpage-icon-img' src={back_img} />
          <Image className='header-webpage-icon-img' src={close_img} />
        </View>
        <Text className='header-webpage-title-txt'>{this.props.title}</Text>
        <View className='header-webpage-reload-wrap' onClick={() => {
          Taro.showToast({
            title: '正在重新加载',
          })
        }}>
          <Image className='header-webpage-icon-img' src={reload_img} />
        </View>
      </View>
    )
  }
}
