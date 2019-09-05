import './item_detail.scss';

import { ScrollView, View } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';

import BottomBar from './bottom-bar';
import CenterTitle from './center-title';
import ItemCarousel from './item-carousel';
import ItemInfo from './item-info';
import PageLoading from '@/components/page-loading';
import RoundBack from '@/components/round-back';
import ShopInfo from './shop-info';
import SimilarItemList from '@/components/item-list-b';
import { device } from '@/utils/device';
import { parseUrlParams } from '@/utils/navigation';
import { baseUrl } from '@/constants/baseUrl'

const isIOS = device.isIOS()



const TAB_LIST = [
  {
    key: 0,
    title: '宝贝',
  },
  {
    key: 1,
    title: '详情',
  },
  {
    key: 2,
    title: '推荐',
  },
]

interface itemInterface {
  [key: string]: any;
}

interface stateInterface {
  item: itemInterface;
  isLoading: boolean;
  similarCoupon: any[];
  itemid: string | number;
  tbkUserId: string | number;
  isHdk: boolean;
}

export default class Item_detail extends Component<{}, stateInterface> {
  config = {
    navigationBarTitleText: 'item_detail',
    disableScroll: true,
  }

  state = {
    isLoading: true,
    similarCoupon: [],

    itemid: '',
    item: {},
    tbkUserId: '',
    isHdk: false,
  }

  componentDidMount = async () => {
    const params = parseUrlParams(this.$router.params) || {}
    const itemid = params['itemid'] || ''
    const tbkUserId = params['tbkUserId'] || ''
    console.log('FIN淘宝客 id', tbkUserId)

    // 非机器人链接而来的订单详情，走好单库 api
    const isFromHaoDanku = tbkUserId === ''
    if (isFromHaoDanku) {
      this.setState({
        isHdk: true,
      })
      return this.getItemFromHaoDanKu()
    }

    this.setState({
      itemid,
      tbkUserId,
    }, this.getItem)

  }

  getItem = async () => {
    const url = `http://${baseUrl}/goods/goods_detail`
    try {
      const resp = await Taro.request({
        url,
        data: {
          tbkUserId: this.state.tbkUserId,
          goodsId: this.state.itemid,
        }
      })
      if (resp && resp['statusCode'] === 200 && resp['data'] && resp['data']['success'] && resp['data']['goodsDetail']) {
        const item = resp['data']['goodsDetail'] || {}
        this.setState({
          item,
          isLoading: false,
        })
      }
    } catch (err) {
      Taro.showToast({ title: '获取商品详情错误' })
      console.log('FIN get coupon err', err)
    }


  }

  getItemFromHaoDanKu = async () => {
    const params = parseUrlParams(this.$router.params) || {}
    const itemid = params['itemid'] || ''
    try {
      const url = `https://v2.api.haodanku.com/item_detail/apikey/saul/itemid/${itemid}`
      const resp = await Taro.request({ url })
      const item = resp && resp.data && resp.data.data
      this.setState({
        item,
        isLoading: false
      })
    } catch (err) {
      Taro.showToast({ title: '获取好单库商品详情错误' })
      console.log('FIN get coupon err', err)
    }
    this.getSimilar()
  }

  getSimilar = async () => {
    const params = parseUrlParams(this.$router.params)
    const itemid = params.itemid
    const url = `https://v2.api.haodanku.com/get_similar_info/apikey/saul/back/50/itemid/${itemid}`
    try {
      const resp = await Taro.request({ url })
      const coupon = resp && resp.data && resp.data.data
      this.setState({
        similarCoupon: coupon,
      })
    } catch (err) {
      console.log('FIN get coupon err', err)
    }
  }

  render() {
    if (this.state.isLoading) {
      return <PageLoading />
    }


    let pageStyle: any = {
      height: device.windowHeight
    }

    if (device.isAndroid()) {
      pageStyle.height = device.windowHeight - device.info.statusBarHeight
    }

    if (device.isWeChat()) {
      pageStyle.height = device.windowHeight + 'px'
    }


    let scrollStyle: any = {
      // backgroundColor: 'red',
    }

    if (device.isH5()) {
      scrollStyle.height = device.windowHeight - 55   // 必须大于底部栏目固定高度，才不会导致滑动障碍
    }

    if (device.isIOS()) {
      scrollStyle.height = device.windowHeight - 49.5   // 同上，需要根据底部栏目的实际高度来设置滚动高度
      // scrollStyle.height = 617.5
    }

    if (device.isAndroid()) {
      scrollStyle.height = device.windowHeight - device.info.statusBarHeight - 50.5   // 同上，需要根据底部栏目的实际高度来设置滚动高度
    }

    if (device.isWeChat()) {
      scrollStyle.height = device.windowHeight + 'px'   // wechat ide 中没问题
      scrollStyle.height = Taro.getSystemInfoSync().screenHeight + 'px'   // 手机上还是超出，需要集中处理这个问题 
      console.log('FIN item scroll style for wechat', scrollStyle)
    }

    const { item } = this.state
    console.log('FIN item', item)
    const taobao_image = item && item['taobao_image'] || ''
    const itemSrcList = taobao_image.split(',')

    return (
      <View className="item_detail-page" style={pageStyle} >
        {/* <TabBar list={TAB_LIST} /> */}
        <RoundBack />

        <View style={scrollStyle}>
          <ScrollView
            className='item_detail-scroll-wrap'
            scrollY
            scrollWithAnimation
            style={scrollStyle}
          >
            {/* <Text>{pageStyle.height}</Text> */}
            <ItemCarousel itemSrcList={itemSrcList[0] === '' ? (item['goodsImages'] || []) : itemSrcList} />
            <ItemInfo item={this.state.item} isHdk={this.state.isHdk} />
            <ShopInfo item={this.state.item} />
            <CenterTitle title={'商品详情'} />
            <CenterTitle title={'商品推荐'} />
            <SimilarItemList list={this.state.similarCoupon || []} />
          </ScrollView>
        </View>

        <BottomBar
          item={this.state.item}
          isHdk={this.state.isHdk}
        />
      </View>
    )
  }
}
