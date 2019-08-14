
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

interface WebpagePolyInterface {
}

export default class WebpagePoly extends Component<WebpagePolyInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="webpage-poly-comp">
        <Text>
        weapp webpage-poly
        </Text>
      </View>
    )
  }
}
