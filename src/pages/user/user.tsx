import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

class User extends Component {
  config = {
    navigationBarTitleText: '个人中心',
  }

  state = {
    loading: false,
  }

render () {
  return (
      <View>
        <Text>个人中心</Text>
      </View>
    )
  }
}

export default User