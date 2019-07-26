import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Header from '@/components/header'

class Setting extends Component {
  config = {
    navigationBarTitleText: '设置',
  }

  state = {
    loading: false,
  }

render () {
  return (
      <View className='page-wrapper'>
        <Header title='设置' />
        <Text>设置</Text>
      </View>
    )
  }
}

export default Setting