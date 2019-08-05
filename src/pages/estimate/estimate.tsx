import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView, Swiper, SwiperItem } from '@tarojs/components'
import './estimate.scss'
import Header from '@/components/header'
import Tab from '@/components/tab'
import {device} from '@/utils/device'
import Achievement from './achievement'
import TextMoney from '@/components/text-money'

const TAB_LIST = [
  {
    key: 0,
    title: '今日预估',
    title_desc: '今日评估效果0',
    money: 0.00,
  },
  {
    key: 1,
    title: '本月预估',
    title_desc: '本月评估效果1',
    money: 1.00,
  },
  {
    key: 2,
    title: '上月预估',
    title_desc: '上月评估效果2',
    money: 2.00,
  },
  {
    key: 3,
    title: '上月收货',
    title_desc: '上月总确认收货3',
    money: 3.00,
  },
]



export default class Estimate extends Component {
  config = {
    navigationBarTitleText: 'estimate',
    disableScroll: true,
  }

  state = {
    title: '',
    current: 0,
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


  handleChange = (event) => {
    // console.log('FIN 触发 onChange 事件')
    const {detail} = event
    const {current} = detail
    this.setState({
      current
    })
    // console.log('FIN Swipper onchange 事件触发', current)
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

    console.log('FIN current state 上级', this.state.current)

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
            <TextMoney money={12.00} fontSize={32}/>
            {/* tab */}
            <Tab 
              noScroll
              marginLeft={40}
              itemWidth={80}
              current={this.state.current}
              list={TAB_LIST}
              onChange={(item) => {
                // console.log('FIN onChange', item)
                this.setState({
                  current: item.key
                })
              }}
            />
          </View>
          {/* tab 内容页 */}

          <Swiper
            autoplay={false}
            current={this.state.current}
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
                // console.log('FIN render item', item.key)
                // 目前发现部分 item 不同步的问题和 key 有关系。数据其实更新了，但是不滚动
                return (
                  <SwiperItem key={item.key}>
                    <Achievement title={item.title_desc} money={item.money} />
                    {/* <Text>{this.state.current}</Text> */}
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
