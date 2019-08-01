import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'


export default class Test extends Component {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="test-comp">
        <Text>
          test
        </Text>
      </View>
    )
  }
}
