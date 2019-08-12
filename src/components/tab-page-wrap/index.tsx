import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, ScrollView } from '@tarojs/components'
import './index.scss'
import {device} from '@/utils/device'

interface TabPageWrapInterface {
  height: any;
  current: number;
  onChange: () => void;
  pages: any[];
  scrollable: boolean;
}


export default class TabPageWrap extends Component<TabPageWrapInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    const { height, pages } = this.props
    // console.log('FIN tabpageWrap props', this.props)
    let swiperStyle: any = {
      height,
      width: device.windowWidth,
      backgroundColor: '#F5F6F7',
    }

    // 暂不支持微信端
    if(device.isWeChat()) {
      swiperStyle.height += 'px'
      swiperStyle.width += 'px'
    }

  //   return (
  //     <View className="tab-page-wrap-comp" style={swiperStyle}>
  //       <ScrollView 
  //         scrollY
  //         style={{
  //           height: 300,
  //         }}
  //       >
  //         <Swiper
  //           current={this.props.current}
  //           onChange={this.props.onChange}
  //           style={{
  //             // height: 999999,
  //           }}
  //         >
  //           {
  //             pages && pages.map((page, i) => {
  //               const PageEl = page.el
  //               // console.log('FIN pageEl', PageEl)
  //               return (
  //                 <SwiperItem key={page.key} style={{}}>
  //                     <PageEl />
  //                 </SwiperItem>
  //               )
  //             })
  //           }
  //         </Swiper>
  //       </ScrollView>
  //     </View>
  //   )
  // }
    return (
      <View className="tab-page-wrap-comp" style={swiperStyle}>
        <Swiper
          current={this.props.current}
          onChange={this.props.onChange}
          style={swiperStyle}
        >
          {
            pages && pages.map((page, i) => {
              const PageEl = page.el
              // console.log('FIN pageEl', PageEl)
              return (
                <SwiperItem key={page.key} style={{}}>
                  <View><Text>xxxxxxxxxxxxx</Text></View>
                  <View>
                    <ScrollView 
                      scrollY
                      style={{
                        height: 300,
                      }}
                    >
                      <PageEl />
                    </ScrollView>
                  </View>
                </SwiperItem>
              )
            })
          }
        </Swiper>
      </View>
    )
  }
}
