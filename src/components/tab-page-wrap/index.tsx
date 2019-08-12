import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, ScrollView } from '@tarojs/components'
import './index.scss'
import { device } from '@/utils/device'

interface TabPageWrapInterface {
  height: any;
  current: number;
  onChange: (any) => void;
  pages: any[];
  scrollable?: boolean;  // 默认支持
}


export default class TabPageWrap extends Component<TabPageWrapInterface, {}> {

  componentDidMount = () => {
  }

  handleOnChange = e => {
    const { detail } = e
    this.props.onChange && this.props.onChange(detail)
  }


  render() {
    const { height, pages } = this.props
    // console.log('FIN tabpageWrap props', this.props)

    let wrapStyle: any = {
      height,
      width: device.windowWidth,
      backgroundColor: '#F5F6F7',
    }

    // 暂不支持微信端
    if (device.isWeChat()) {
      wrapStyle.height += 'px'
      wrapStyle.width += 'px'
    }

    let swiperStyle: any = {
      width: device.windowWidth,
      // RN 会自动给一定的高度，不能主动赋值
    }

    // h5 必须修改滚动内容的高度为视口高度才能左右滑动
    if (device.isH5()) {
      swiperStyle.height = '100vh'
      // swiperStyle.height = height
    }

    return (
      <View className="tab-page-wrap-comp" style={wrapStyle}>
        <ScrollView
          scrollY
          style={{
            height,
            width: device.windowWidth,
          }}
        >
          <Swiper
            current={this.props.current}
            onChange={this.handleOnChange.bind(this)}
            style={swiperStyle}
          >
            {
              pages && pages.map((page, i) => {
                const PageEl = page.el
                // 暂不支持微信端
                // console.log('FIN pageEl', PageEl)
                return (
                  <SwiperItem key={page.key} style={{
                    width: device.windowWidth,
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                  }}>
                    <PageEl />
                  </SwiperItem>
                )
              })
            }
          </Swiper>
        </ScrollView>
      </View>
    )
  }
}
