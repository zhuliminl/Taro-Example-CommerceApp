import Taro, { Component } from '@tarojs/taro'
import Carousel from 'nuka-carousel';
import {device} from '@/utils/device'

interface SwiperPolyInterface {
  imgList: any[];
}

export default class SwiperPoly extends Component<SwiperPolyInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    const {imgList = []} = this.props
    console.log('FIN imglist', imgList)
    const bannerWidth = 300
    const bannerHeight = 300
    return (
      <Carousel
        // autoplay
        // autoplayInterval={1000}
        // transitionMode={'fade'}

        transitionMode={'scroll3d'}
        easing={'easeLinear'}
        cellAlign={'center'}
        slideWidth={0.8}
        withoutControls
        cellSpacing={10}
        style={{
          width: device.windowWidth,
          height: bannerHeight,
        }}
      >
        {
          imgList.map((item, i) => {
            return (
              <div
                style={{
                  width: bannerWidth,
                  backgroundColor: '#F5F6F7',
                  borderRadius: 6,
                  overflow: 'hidden',
                  boxShadow: 'rgba(23, 23, 23, 0.11) 0px 7px 12px 1px',
                }}
              >
                <img key={i} src={item['url']} style={{width: bannerWidth, }}/>
                <div style={{
                  color: '#333',
                  fontSize: 18,
                  paddingLeft: 10,
                  paddingBottom: 10,
                }}>{item['title']}</div>
              </div>
            )
          })
        }
      </Carousel>
    )
  }
}
