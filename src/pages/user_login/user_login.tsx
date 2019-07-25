import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

class UserLogin extends Component {
  config = {
    navigationBarTitleText: '登录',
  }

  state = {
    loading: false,
  }

  componentDidMount = () => {
    console.log('FIN Taro', Taro)
  }

render () {
  return (
      <View>
        <Text>登录页面</Text>
        <View
          onClick = {() => {
            Taro.navigateBack()
          }}
        >返回</View>
        
      </View>
    )
  }
}

export default UserLogin