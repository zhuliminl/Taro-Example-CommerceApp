import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

class User extends Component {
  config = {
    navigationBarTitleText: '合伙人特权',
  }

  state = {
    loading: false,
  }

render () {
  return (
      <View>
        <Text>合伙人特权</Text>
      </View>
    )
  }
}

export default User