import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import { device } from '@/utils/device'

import back_img from '@/assets/icon/back_white.png'
import close_img from '@/assets/icon/close_white.png'
import reload_img from '@/assets/icon/reload_white.png'

import back_img_grey from '@/assets/icon/back_grey.png'
import close_img_grey from '@/assets/icon/close_grey.png'
import reload_img_grey from '@/assets/icon/reload_grey.png'

interface HeaderWebpageInterface {
  title: string;
  backgroundColor: string;
  isBlackIcon?: boolean;
  titleColor?: string;
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
      wrapStyle.height = 70 + 'px'   // 小程序需要格外注意
    }

    const { backgroundColor = 'red', isBlackIcon = true, titleColor = '#FFF' } = this.props

    let titlePaddingRight: any = 30
    if (device.isWeChat()) {
      titlePaddingRight = 73 + 'px'
    }

    return (
      <View className="header-webpage-comp" style={{ backgroundColor, ...wrapStyle }}>
        <View className='header-webpage-back-wrap' onClick={() => {
          Taro.navigateBack()
        }}>
          <Image className='header-webpage-icon-img' src={isBlackIcon ? back_img_grey : back_img} />
          <Image className='header-webpage-icon-img header-webpage-icon-close-img' src={isBlackIcon ? close_img_grey : close_img} />
        </View>
        <Text className='header-webpage-title-txt' style={{ color: titleColor, paddingRight: titlePaddingRight }}>{this.props.title}</Text>
        {!device.isWeChat() &&
          <View className='header-webpage-reload-wrap' onClick={() => {
            Taro.showToast({
              title: '正在重新加载',
            })
          }}>
            <Image className='header-webpage-icon-img' src={isBlackIcon ? reload_img_grey : reload_img} />
          </View>
        }
      </View>
    )
  }
}
