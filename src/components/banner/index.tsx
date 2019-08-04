import Taro, { Component, pxTransform } from '@tarojs/taro';
import { View, Image, Swiper, SwiperItem } from '@tarojs/components';
import './index.scss'
import {device} from '@/utils/device'


interface BannerInterface {
  imgList: Array<any>;
  bannerHeight: any;
  bannerWidth: any;
}


class Banner extends Component <BannerInterface, {}> {
  static defaultProps = {
    imgList: [],
    bannerHeight: 135,
  }

  render () {
    const h = this.props.bannerHeight
    const w = this.props.bannerWidth
    return (
      <View className='banner-wrap'>
        <Swiper
          style={{
            height: pxTransform(h),
            width: pxTransform(w),
          }}
          duration={1000}
          interval={3000}
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical={false}
          skipHiddenItemLayout
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
                        width: pxTransform(w),
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