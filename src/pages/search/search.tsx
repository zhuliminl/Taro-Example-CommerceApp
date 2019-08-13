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

export default class Search extends Component {
  config = {
    navigationBarTitleText: 'search',
    disableScroll: true,
  }

  state = {
    current: 0,
    coupons: [],
    cid: 0,
    min_id: 1,
    keyword: '',
  }

  componentDidMount = () => {
    const params = parseUrlParams(this.$router.params)
    const keyword = params && params['keyword'] || ''
    this.setState({
      keyword,
    }, this.fetchCoupon)

  }

  fetchCoupon = async () => {
    const { cid, min_id, keyword } = this.state
    console.log('FIN home state', this.state)
    const coupon_url = `https://v2.api.haodanku.com/get_keyword_items/apikey/saul/keyword/${keyword}/back/20/min_id/${min_id}/sort/0/cid/0`
    // console.log('FIN coupon list url', coupon_url)
    try {
      const resp = await Taro.request({ url: coupon_url })
      const couponsData = resp && resp.data && resp.data.data
      const min_id = resp && resp.data && resp.data.min_id
      const preState = this.state
      const coupons = preState.coupons.concat(couponsData)
      this.setState({
        coupons,
        min_id,
      })
    } catch (err) {
      console.log('FIN get coupon err', err)
    }
  }

  handleOnScroll = () => {

  }

  handleOnScrollToLower = () => {
    this.fetchCoupon()
  }

  handleOnSearch = keyword => {
    this.setState({
      keyword,
      min_id: 1,
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

          <ItemListA list={this.state.coupons || []} />
          <Spin isShow />
        </ScrollView>
      </View>
    )
  }
}
