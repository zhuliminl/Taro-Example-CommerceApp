
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

interface SwiperPolyInterface {
}

export default class SwiperPoly extends Component<SwiperPolyInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="swiper-poly-comp">
        <Text>
        weapp swiper-poly
        </Text>
      </View>
    )
  }
}
