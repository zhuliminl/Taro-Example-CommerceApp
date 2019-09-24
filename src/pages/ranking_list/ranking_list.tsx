import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import Tab from '@/components/tab';
import ItemListA from '@/components/item-list-a';
import Header from '@/components/header'
import './ranking_list.scss'
import { device } from '@/utils/device'
import Spin from '@/components/spin'

import { signed, dtkAppData } from '@/utils/signed'

const TAB_LIST = [
  {
    key: 0,
    title: '实时榜',
  },
  {
    key: 1,
    title: '全天榜',
  },
  {
    key: 2,
    title: '热推榜',
  },
  {
    key: 3,
    title: '复购榜',
  },
]


export default class NineGoods extends Component {
  state = {
    current: 0,
    rankType: 1,

    items: [],
  }

  config = {
    navigationBarTitleText: 'nine_goods',
    disableScroll: true,
  }

  componentDidMount = async () => {
    await this.getItem()
  }

  getItem = async () => {

    const query = {
      rankType: this.state.rankType,
    }

    const url = 'https://openapi.dataoke.com/api/goods/get-ranking-list'
    try {
      const resp = await Taro.request({
        url,
        data: {
          ...dtkAppData,
          ...query,
          sign: signed(query),
        }
      })
      // console.log('FIN ranking-list resp', resp)

      if (resp && resp['statusCode'] === 200 && resp['data']) {
        const data = resp['data'] || {}
        const items = data['data'] || []

        this.setState({
          items,
        })
      }

    } catch (err) {
      console.log('FIN get 各大榜单 error', err)
      Taro.showToast({
        title: '获取商品失败'
      })
    }
  }

  handleOnTabChange = (item) => {
    const key = item.key
    this.setState({
      current: key,
      rankType: key + 1,
      items: [],
    }, this.getItem)

  }

  render() {

    let scrollHeight = 65 + 30
    if (device.isAndroid()) {
      // 安卓特殊处理，否则无法滑动
      scrollHeight = 98 + 30
    }

    return (
      <View className="ranking_list-page">
        <Header title='各大榜单' />
        <View style={{ height: Taro.pxTransform(130), backgroundColor: '#FFF' }} ></View>
        <Tab
          itemWidth={60}
          current={this.state.current}
          list={TAB_LIST}
          onChange={(item) => { this.handleOnTabChange(item) }}
        />
        <ScrollView
          scrollY
          style={{
            height: device.windowHeight - scrollHeight
          }}
        >
          <ItemListA list={this.state.items || []} isDTK={true} />
        </ScrollView>
      </View>
    )
  }
}
