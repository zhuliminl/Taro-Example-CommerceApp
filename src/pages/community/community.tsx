import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

class Community extends Component {
  config = {
    navigationBarTitleText: '好省圈',
  }

  state = {
    loading: false,
  }

render () {
  return (
      <View>
        <Text>好省圈</Text>
      </View>
    )
  }
}

export default Community