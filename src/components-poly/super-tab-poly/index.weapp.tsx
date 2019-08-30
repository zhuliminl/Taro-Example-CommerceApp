
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

interface SuperTabPolyInterface {
}

export default class SuperTabPoly extends Component<SuperTabPolyInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="super-tab-poly-comp">
        <Text>
        weapp super-tab-poly
        </Text>
      </View>
    )
  }
}
