import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './home.scss'
import Banner from '@/components/banner'

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
        <Banner />
      </View>
    )
  }
}

export default Home