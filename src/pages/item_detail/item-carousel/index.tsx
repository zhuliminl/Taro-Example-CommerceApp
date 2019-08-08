import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'
import { device } from '@/utils/device';

interface ItemCarouselInterface {
  itemSrcList: any[];
}

export default class ItemCarousel extends Component<ItemCarouselInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="item-carousel-comp">
        <Swiper
          style={{
            width: device.windowWidth,
            height: device.windowWidth,
          }}
          duration={300}
          interval={3000}
          indicatorColor='#999'
          indicatorActiveColor='#FFF'
          vertical={false}
          skipHiddenItemLayout
          circular
          indicatorDots={true}
          autoplay>
            {
              this.props.itemSrcList &&
              this.props.itemSrcList.map((item) => {
                return (
                  <SwiperItem key={item}>
                    <Image 
                      style={{
                        width: device.windowWidth,
                        height: device.windowWidth,
                      }}
                      src={item}
                    />
                  </SwiperItem>
                )
              })
            }
        </Swiper>
      </View>
    )
  }
}
