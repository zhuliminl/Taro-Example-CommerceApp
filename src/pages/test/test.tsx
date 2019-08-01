import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './test.scss'


export default class Test extends Component {
  config = {
    navigationBarTitleText: 'test',
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="test-page">
        <Text>
          test
        </Text>
      </View>
    )
  }
}
