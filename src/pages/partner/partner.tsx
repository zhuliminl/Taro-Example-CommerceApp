import Taro, { Component } from '@tarojs/taro';
import { View, WebView } from '@tarojs/components';
import Header from '@/components/header'
import console = require('console');
import { device } from '@/utils/device';

class User extends Component {
  config = {
    navigationBarTitleText: '合伙人特权',
  }

  state = {
    loading: false,
  }

  componentDidMount = () => {
    console.log('FIN xxxxx')
    // 打开 h5

  }

  render() {
    return (
      <View
        style={{
          height: device.windowHeight,
          width: device.windowWidth
        }}
      >
        <Header
          title='合伙人特权'
        />
        <WebView src='https://www.baidu.com/' />
      </View>
    )
  }
}

export default User