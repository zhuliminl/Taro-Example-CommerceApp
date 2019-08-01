import Taro, { Component, pxTransform } from '@tarojs/taro';
import { View, Image, Swiper, SwiperItem } from '@tarojs/components';
import './index.scss'
import {device} from '@/utils/device'


interface BannerInterface {
  imgList: Array<any>;
  bannerHeight: any
}


class Banner extends Component <BannerInterface, {}> {
  static defaultProps = {
    imgList: [],
    bannerHeight: 135,
  }

  render () {
    const h = this.props.bannerHeight
    if(true) return null
    return (
      <View>
        <Swiper
          style={{
            height: pxTransform(h),
          }}
          duration={1000}
          interval={1000}
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical={false}
          circular
          indicatorDots={false}
          autoplay>
            {
              this.props.imgList.map((item) => {
                return (
                  <SwiperItem key={item.src}>
                    <Image 
                      style={{
                        height: pxTransform(h),
                        width: device.windowWidth,
                      }}
                      src={item.src}
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

export default Banner