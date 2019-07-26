import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './index.scss'

interface HeaderInterface {
  title: string,
}


class Header extends Component <HeaderInterface, {}> {
render () {
  return (
      <View className='header-wrapper'>
        <Image 
          onClick={() => {
            console.log('FIN 返回',)
            Taro.navigateBack()
            // 返回
          }}
          className='header__back-img'
          src={require('./assets/back.png')}
        />
        <Text className='header__title-txt'>{this.props.title}</Text>
      </View>
    )
  }
}

export default Header