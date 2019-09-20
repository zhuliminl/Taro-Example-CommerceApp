import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import SplashScreen from 'react-native-splash-screen'


class Foo extends Component {
  config = {
    navigationBarTitleText: 'Foo',
  }

  state = {
    loading: false,
  }

  componentDidMount = () => {
    console.log('FIN splash', SplashScreen)
    // SplashScreen.hide();
  }

  render() {
    return (
      <View>
        <Text>当前组件并没有作用</Text>
      </View>
    )
  }
}

export default Foo