
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
// import {ClSwiper} from 'mp-colorui'
// import ClSwiper from './ClSwiper'

interface SwiperPolyInterface {
  imgList: any[];
}

export default class SwiperPoly extends Component<SwiperPolyInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    const {imgList = []} = this.props
    return (
      <View className="swiper-poly-comp">
      </View>
    )
  }
}
