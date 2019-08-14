
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { ClSwiper } from 'mp-colorui'
// import ClSwiper from './ClSwiper'

interface SwiperPolyInterface {
  imgList: any[];
}

export default class SwiperPoly extends Component<SwiperPolyInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    const { imgList = [] } = this.props
    console.log('FIN imgList', imgList)
    return (
      <View className="swiper-poly-comp">
        <ClSwiper
          // type='screen'
          type='card'
          list={imgList}
          circular
        // dot='round'
        // indicatorDots
        // indicatorColor='#8799a3'
        // indicatorActiveColor='#0081ff'
        />
      </View>
    )
  }
}
