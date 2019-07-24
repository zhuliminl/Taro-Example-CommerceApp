import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

class Home extends Component {
  config = {
    navigationBarTitleText: '真的首页',
  }

  state = {
    loading: false,
  }

render () {
  return (
      <View>
        <Text>真的首页</Text>
      </View>
    )
  }
}

export default Home