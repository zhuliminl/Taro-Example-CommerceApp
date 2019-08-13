
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

interface BannerPolyInterface {
}

export default class BannerPoly extends Component<BannerPolyInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="banner-poly-comp">
        <Text>
        weapp banner-poly
        </Text>
      </View>
    )
  }
}
