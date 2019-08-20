import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface H1Interface {
}

export default class H1 extends Component<H1Interface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="h1-comp">
        <Text>
          h1
        </Text>
      </View>
    )
  }
}
