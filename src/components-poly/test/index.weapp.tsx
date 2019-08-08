
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

interface TestInterface {
}

export default class Test extends Component<TestInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="test-comp">
        <Text>
        weapp test
        </Text>
      </View>
    )
  }
}
