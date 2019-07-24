import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

class User extends Component {
  config = {
    navigationBarTitleText: '大牌秒杀',
  }

  state = {
    loading: false,
  }

render () {
  return (
      <View>
        <Text>大牌秒杀</Text>
      </View>
    )
  }
}

export default User