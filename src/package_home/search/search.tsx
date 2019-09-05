import './search.scss';

import { ScrollView, View } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';

import ItemListA from '@/components/item-list-a';
import Market from '@/constants/market';
import SearchBar from '@/components/search-bar';
import Spin from '@/components/spin';
import Tab from '@/components/tab';
import { device } from '@/utils/device';
import { parseUrlParams } from '@/utils/navigation';
import { appService } from '@/_state/app.service';
import { baseUrl } from '@/constants/baseUrl'

export default class Search extends Component {
  config = {
    navigationBarTitleText: 'search',
    disableScroll: true,
  }

  state = {
    current: 0,

    coupons: [],

    keyword: '',
    tbkUserId: '',
    channel: '',
    pageIndex: 1,

    // 没有更多和空数据暂时懒得做
  }

  componentDidMount = () => {
    const params = parseUrlParams(this.$router.params)
    const keyword = params && params['keyword'] || '皮裤'
    const tbkUserId = params && params['tbkUserId'] || '6'
    const channel = params && params['channel'] || '2'

    let current = 1
    if (channel === '2') { // 拼多多平台
      current = 1
    }

    this.setState({
      keyword,
      tbkUserId,
      channel,
      current,
    }, this.fetchCoupon)

  }

  fetchCoupon = async () => {
    // const coupon_url = `http://${baseUrl}/goods/search_goods_by_keyword/3/3?sort=total_sales_des&keyWord=拖鞋男&tbkUserId=6&channel=2`
    const coupon_url = `http://${baseUrl}/goods/search_goods_by_keyword/20/${this.state.pageIndex}`
    try {
      const resp = await Taro.request({
        url: coupon_url,
        data: {
          sort: 'total_sales_des',
          keyWord: this.state.keyword,
          tbkUserId: this.state.tbkUserId,
          channel: this.state.channel,
        }
      })
      if (resp && resp['statusCode'] === 200 && resp['data'] && resp['data']['success'] && resp['data']['data']) {
        const data = resp['data']['data'] || {}
        console.log('FIN data', data)
        const { list = [] } = data
        const { total = 0 } = data
        this.setState({
          coupons: this.state.coupons.concat(list),
          pageIndex: this.state.pageIndex + 1,
        })
      }

      if (resp && resp['data'] && resp['data']['success'] === false) {
        const { msg = '' } = resp['data']
        Taro.showToast({ title: msg })
      }

    } catch (err) {
      Taro.showToast({ title: '获取搜索列表错误' })
      console.log('FIN get coupon err', err)
    }
  }




  handleOnScroll = () => {

  }

  handleOnScrollToLower = () => {
    this.fetchCoupon()
  }

  handleOnSearch = keyword => {
    if (keyword) {
      appService.pushHistory(keyword)
    }

    this.setState({
      keyword,
      pageIndex: 1,
      coupons: [],
    }, this.fetchCoupon)
  }

  render() {
    let scrollStyle: any = {
      height: device.windowHeight,
    }

    if (device.isAndroid()) {
      scrollStyle.height = device.windowHeight - device.info.statusBarHeight
    }

    if (device.isWeChat()) {
      scrollStyle.height = device.windowHeight + 'px'
    }

    return (
      <View className="search-page">
        <ScrollView
          onScroll={this.handleOnScroll.bind(this)}
          onScrollToLower={this.handleOnScrollToLower.bind(this)}
          scrollY
          style={scrollStyle}
        >
          <SearchBar
            $router={this.$router}
            placeholder={this.state.keyword}
            focus={false}
            onSearch={(keyword) => {
              this.handleOnSearch(keyword)
            }}
          />
          <Tab
            noScroll
            marginLeft={65}
            itemWidth={80}
            current={this.state.current}
            list={Market}
            onChange={(item) => {
              console.log('FIN tab item', item)
              this.setState({
                current: item.key
              })
            }}
          />

          <ItemListA
            tbkUserId={this.state.tbkUserId}
            list={this.state.coupons || []}
          />
          <Spin isShow />
        </ScrollView>
      </View>
    )
  }
}
