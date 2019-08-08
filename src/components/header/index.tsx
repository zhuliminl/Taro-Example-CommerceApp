import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './index.scss'
import { device } from '@/utils/device'

interface HeaderInterface {
  title: string,
}


class Header extends Component<HeaderInterface, {}> {
  render() {
    let wrapStyle: any = {}
    if (device.isIOS()) {
      wrapStyle.marginTop = 20
    }

    if (device.isWeChat()) {
      wrapStyle.marginTop = 20 + 'px'
    }

    return (
      <View className='header-wrapper'
        style={wrapStyle}
      >
        <View
          onClick={() => {
            Taro.navigateBack()
          }}
        >
          <Image className='header__back-img'
            src={require('./assets/back.png')}
          />
        </View>
        <Text className='header__title-txt'>{this.props.title}</Text>
        {this.props.children}
      </View>
    )
  }
}

export default Header