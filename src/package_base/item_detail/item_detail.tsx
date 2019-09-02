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
}

export default class Item_detail extends Component<{}, stateInterface> {
  config = {
    navigationBarTitleText: 'item_detail',
    disableScroll: true,

  }

  state = {
    isLoading: true,
    similarCoupon: [],
    item: {},
  }

  componentDidMount = async () => {
    const params = parseUrlParams(this.$router.params)
    const itemid = params.itemid
    console.log('FIN item detail itemid', itemid)
    const url = `https://v2.api.haodanku.com/item_detail/apikey/saul/itemid/${itemid}`
    try {
      const resp = await Taro.request({ url })
      const item = resp && resp.data && resp.data.data
      this.setState({
        item,
        isLoading: false,
      })
    } catch (err) {
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
            <ItemCarousel itemSrcList={itemSrcList} />
            <ItemInfo item={this.state.item} />
            <ShopInfo item={this.state.item} />
            <CenterTitle title={'商品详情'} />
            <CenterTitle title={'商品推荐'} />
            <SimilarItemList list={this.state.similarCoupon || []} />
          </ScrollView>
        </View>

        <BottomBar item={this.state.item} />
      </View>
    )
  }
}
