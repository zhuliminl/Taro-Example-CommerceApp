import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

class Foo extends Component {
  config = {
    navigationBarTitleText: 'Foo',
  }

  state = {
    loading: false,
  }

render () {
  return (
      <View>
        <Text>当前组件并没有作用</Text>
      </View>
    )
  }
}

export default Foo