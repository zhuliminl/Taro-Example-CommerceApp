import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './index.scss'

interface ListInterface {
  title: string,
}


class List extends Component <ListInterface, {}> {
render () {
  return (
      <View className='header-wrapper'>
      </View>
    )
  }
}

export default List