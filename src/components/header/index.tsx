import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './index.scss'
import {device} from '@/utils/device'
import console = require('console');
const isIOS = device.isIOS()

interface HeaderInterface {
  title: string,
}


class Header extends Component <HeaderInterface, {}> {
  render () {
    return (
      <View className='header-wrapper'
        style={isIOS ? {
          marginTop: 20
       } : {}}
      >
        <View
        onClick={() => {
          console.log('FIN 返k')
          Taro.navigateBack()
        }}
        >
          <Image className='header__back-img'
            src={require('./assets/back.png')}
          />
        </View>
        <Text className='header__title-txt'>{this.props.title}</Text>
      </View>
    )
  }
}

export default Header