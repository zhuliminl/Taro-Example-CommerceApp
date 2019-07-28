import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './home.scss'

class Home extends Component {
  config = {
    navigationBarTitleText: '真的首页',
  }

  state = {
    loading: false,
  }

render () {
  return (
      <View className='home'>
        <Text>真的首页</Text>
      </View>
    )
  }
}

export default Home