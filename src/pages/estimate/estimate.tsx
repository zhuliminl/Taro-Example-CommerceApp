import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import './estimate.scss'
import Header from '@/components/header'
import Tab from '@/components/tab'
import {device} from '@/utils/device'

const TAB_LIST = [
  {
    key: 0,
    title: '今日预估',
  },
  {
    key: 1,
    title: '本月预估',
  },
  {
    key: 2,
    title: '上月预估',
  },
  {
    key: 3,
    title: '上月收货',
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
            // backgroundColor: '#999'
          }}
        >
          {/* 累计佣金 */}
          <View className='estimate-commission-wrap'>
            <Text className='comission-title-txt'>累计佣金</Text>
            <Text className='comission-money-txt'>￥0.00</Text>
            {/* tab */}
            <Tab 
              noScroll
              marginLeft={40}
              itemWidth={80}
              current={3}
              list={TAB_LIST}
              handleItemClick={(item) => {
                console.log('FIN', item)
              }}
            />
          </View>
          {/* tab 内容页 */}
        </ScrollView>
      </View>
    )
  }
}
