import './img_gallery.scss'

import Taro, { Component } from '@tarojs/taro'
import { Text, View, Image, Swiper, SwiperItem } from '@tarojs/components'

import { parseUrlParams } from '@/utils/navigation'

import { device } from '@/utils/device'

interface ImgGalleryInterface {
}

interface ImgGalleryStateInterface {
  current: number;
  imgList: any;
}

export default class ImgGallery extends Component<ImgGalleryInterface, ImgGalleryStateInterface> {
  config = {
    navigationBarTitleText: 'img_gallery',
    disableScroll: true,
  }

  constructor(props) {
    super(props)
    const data = parseUrlParams(this.$router.params)
    let { current = 0, imgList: imgListStr = '' } = data
    this.state = {
      current,
      imgList: imgListStr.split(',')
    }
  }

  componentDidMount = () => {
    // const data = parseUrlParams(this.$router.params)
    // console.log('FIN data', data)
  }

  handleOnChange = event => {
    const { detail } = event
    console.log('FIN img on change', detail)
  }

  handleOnImgLoad = event => {
    // const { detail } = event
    // console.log('FIN img on change', detail)
  }

  render() {
    // console.log('FIN imgGallery ', this.state)

    let swiperStyle: any = {
      height: device.windowHeight,
      // overflow: 'visible',
    }
    if(device.isWeChat()) {
      swiperStyle.height += 'px'
    }


    let pageStyle: any = {
      height: device.windowHeight,
      width: device.windowWidth,
      backgroundColor: '#000',
    }
    if(device.isWeChat()) {
      pageStyle.height = '100%'
      pageStyle.width += 'px'
    }


    let imgStyle: any = {
      width: device.windowWidth,
    }
    if(device.isRN()) {
      imgStyle.height = 500  // RN 直接给定固定的高度就 OK 了
    }
    if(device.isWeChat()) {
      imgStyle.width += 'px'
      imgStyle.height = '300px'    // 针对小程序，必须给定固定高度
    }


    let swiperItemStyle: any = {
      // 保证 h5 端居中对齐
      width: device.windowWidth,
      height: device.windowHeight,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }
    if(device.isWeChat()) {
      swiperItemStyle.width = device.windowWidth + 'px'
      swiperItemStyle.height = device.windowHeight + 'px'
    }


    return (
      <View className="img_gallery-page" style={pageStyle}>
        <Swiper
          current={this.state.current}
          onChange={this.handleOnChange.bind(this)}
          style={swiperStyle}
        >
          {
            this.state.imgList && this.state.imgList.map((item, i) => {
              return (
                <SwiperItem
                  key={i}
                  style={swiperItemStyle}
                >
                  <Image className='img-gallery-item-img' src={item} style={imgStyle} mode={'aspectFit'} onLoad={this.handleOnImgLoad.bind(this)} />
                </SwiperItem>
              )
            })
          }
        </Swiper>
      </View>
    )
  }
}
