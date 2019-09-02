import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'
import { device } from '@/utils/device';

interface ItemCarouselInterface {
  itemSrcList: any[];
}

export default class ItemCarousel extends Component<ItemCarouselInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    let width = device.windowWidth
    let height = device.windowWidth
    if(device.isWeChat()) {
      width += 'px'
      height += 'px'
    }

    return (
      <View className="item-carousel-comp">
        <Swiper
          style={{
            width,
            height,
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
                      width,
                      height,
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
