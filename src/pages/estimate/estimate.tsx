import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView, Swiper, SwiperItem } from '@tarojs/components'
import './estimate.scss'
import Header from '@/components/header'
import Tab from '@/components/tab'
import {device} from '@/utils/device'
import Achievement from './achievement'
import TextMoney from '@/components/text-money'
import console = require('console');

const TAB_LIST = [
  {
    key: 0,
    title: '今日预估',
    title_desc: '今日评估效果',
  },
  {
    key: 1,
    title: '本月预估',
    title_desc: '本月评估效果',
  },
  {
    key: 2,
    title: '上月预估',
    title_desc: '上月评估效果',
  },
  {
    key: 3,
    title: '上月收货',
    title_desc: '上月总确认收货',
  },
]



export default class Estimate extends Component {
  config = {
    navigationBarTitleText: 'estimate',
  }

  state = {
    title: ''
  }

  componentDidMount = () => {
    const params = this.parseParams(this.$router.params)
    this.setState({title: params.title})
  }

  parseParams = data => {
    let paramsObj : any = {}
    Object.keys(data).forEach(key => {
      paramsObj[key] = decodeURIComponent(data[key])
    })
    return paramsObj
  }


  handleChange = () => {
    console.log('FIN onchange')
  }

  render() {
    let scrollHeight = 65
    let topBarHeight = 130
    if(device.isIOS()) {
      topBarHeight = 150
    }
    if(device.isAndroid()) {
      // 安卓特殊处理，否则无法滑动
      scrollHeight = 98
    }

    return (
      <View className="estimate-page">
        <Header title='整体概况'>
          <View 
            onClick={() => {
              console.log('FIN 去帮助页面')
              Taro.showToast({title: 'ssss'})
            }}
          >
            <Text className='estimate-header-right-txt'>？</Text>
          </View>
        </Header>
        <View style={{ height: Taro.pxTransform(topBarHeight), backgroundColor: '#FFF'}} ></View>

        <ScrollView 
          scrollY
          style={{
            height: device.windowHeight - scrollHeight,
            flexDirection: 'column',
            // backgroundColor: '#999'
          }}
        >
          {/* 累计佣金 */}
          <View className='estimate-commission-wrap'>
            <Text className='comission-title-txt'>累计佣金</Text>
            <TextMoney money={12.00} fontSize={32}
            />
            {/* <Text className='comission-money-txt'>￥0.00</Text> */}
            {/* tab */}
            <Tab 
              noScroll
              marginLeft={40}
              itemWidth={80}
              current={0}
              list={TAB_LIST}
              handleItemClick={(item) => {
                console.log('FIN', item)
              }}
            />
          </View>
          {/* tab 内容页 */}

          <Swiper
            current={1}
            onChange={this.handleChange.bind(this)}
            style={{
              // height: 220,            // 给定高度能兼容 RN 但是无法兼容 h5
              height: device.pxCompatibleToWechat(220),
              // backgroundColor: '#999',
              overflow: 'visible'   // 设置成 visible 可以兼容 h5

            }}
          >
            {
              TAB_LIST.map(item => {
                return (
                  <SwiperItem key={item.key}>
                    <Achievement title={item.title_desc} money={22.33} />
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
