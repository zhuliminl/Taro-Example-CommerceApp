import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import Tab from '@/components/tab';
import ItemListA from '@/components/item-list-a';
import Header from '@/components/header'
import './nine_goods.scss'
import { device } from '@/utils/device'

import { signed, dtkAppData } from '@/utils/signed'

const TAB_LIST = [
  // {
  //   key: 0,
  //   title: '精选',
  // },
  {
    key: 0,
    title: '居家',
  },
  {
    key: 1,
    title: '美食',
  },
  {
    key: 2,
    title: '服饰',
  },
  {
    key: 3,
    title: '配饰',
  },
  {
    key: 4,
    title: '美妆',
  },
  {
    key: 5,
    title: '内衣',
  },
  {
    key: 6,
    title: '母婴',
  },
  {
    key: 7,
    title: '箱包',
  },
  {
    key: 8,
    title: '数码',
  },
  {
    key: 9,
    title: '文娱',
  },
]


export default class NineGoods extends Component {
  state = {
    current: 0,
    pageId: '',
    nineCid: 1,

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
      pageSize: 50,
      // pageId: '718a6aee2246e13e',
      pageId: this.state.pageId,
      nineCid: this.state.nineCid,
    }

    const url = 'https://openapi.dataoke.com/api/goods/nine/op-goods-list'
    try {
      const resp = await Taro.request({
        url,
        data: {
          ...dtkAppData,
          ...query,
          sign: signed(query),
        }
      })
      // console.log('FIN 9.9 resp', resp)

      if (resp && resp['statusCode'] === 200 && resp['data']) {
        const data = resp['data'] || {}
        const itemData = data['data'] || {}
        const items = itemData['list'] || []
        const preState = this.state
        const nextItems = preState.items.concat(items)
        this.setState({
          items: nextItems,
          pageId: itemData['pageId'],
        })
      }

    } catch (err) {
      console.log('FIN get 9.9 error', err)
      Taro.showToast({
        title: '获取商品失败'
      })
    }
  }

  handleOnScroll = () => {

  }

  handleOnScrollToLower = () => {
    this.getItem()

  }

  handleOnTabChange = (item) => {
    const key = item.key
    this.setState({
      current: key,
      nineCid: key + 1,
      items: [],
      pageId: '',
    }, this.getItem)

  }

  render() {

    let scrollHeight = 65 + 30
    if (device.isAndroid()) {
      // 安卓特殊处理，否则无法滑动
      scrollHeight = 98 + 30
    }
    return (
      <View className="nine_goods-page">
        <Header title='9.9包邮' />
        <View style={{ height: Taro.pxTransform(130), backgroundColor: '#FFF' }} ></View>
        <Tab
          itemWidth={60}
          current={this.state.current}
          list={TAB_LIST}
          onChange={(item) => { this.handleOnTabChange(item) }}
        />
        <ScrollView
          onScroll={this.handleOnScroll.bind(this)}
          onScrollToLower={this.handleOnScrollToLower.bind(this)}
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
