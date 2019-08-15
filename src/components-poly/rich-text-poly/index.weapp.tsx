
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

interface RichTextPolyInterface {
}

export default class RichTextPoly extends Component<RichTextPolyInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="rich-text-poly-comp">
        <Text>
        weapp rich-text-poly
        </Text>
      </View>
    )
  }
}
