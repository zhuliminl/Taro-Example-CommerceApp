import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import './item_detail.scss'
import {parseUrlParams} from '@/utils/navigation'
import TabBar from './tab-bar'
import BottomBar from './bottom-bar'
import SimilarItemList from '@/components/item-list-b'
import PageLoading from '@/components/page-loading'
import {device} from '@/utils/device'
import { Decipher } from 'crypto';
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

export default class Item_detail extends Component {
  config = {
    navigationBarTitleText: 'item_detail',
    disableScroll: true,
    
  }

  state = {
    isLoading: true,
    similarCoupon: [],
  }

  componentDidMount = async () => {
    const params = parseUrlParams(this.$router.params)
    const itemid = params.itemid
    const url = `https://v2.api.haodanku.com/item_detail/apikey/saul/itemid/${itemid}`
    try {
      const resp = await Taro.request({url})
      const coupon = resp && resp.data && resp.data.data
      console.log('FIN coupons', coupon)
    } catch(err) {
      console.log('FIN get coupon err', err)
    }

    this.getSimilar()

  }

  getSimilar = async () => {
    const params = parseUrlParams(this.$router.params)
    const itemid = params.itemid
    const url = `https://v2.api.haodanku.com/get_similar_info/apikey/saul/back/50/itemid/${itemid}`
    try {
      const resp = await Taro.request({url})
      const coupon = resp && resp.data && resp.data.data
      console.log('FIN xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
      this.setState({
        similarCoupon: coupon,
        isLoading: false,
      })
    } catch(err) {
      console.log('FIN get coupon err', err)
    }
  }

  render() {
    if(this.state.isLoading) {
      return <PageLoading />
    }
    

    let pageStyle : any = {
      height: device.windowHeight
    }

    if(device.isAndroid()) {
      pageStyle.height = device.windowHeight - device.info.statusBarHeight
    }


    let scrollStyle : any = {
      backgroundColor: 'red',
    }

    if(device.isH5()) {
      scrollStyle.height = device.windowHeight - 55   // 必须大于底部栏目固定高度，才不会导致滑动障碍
    }

    if(device.isRN()) {
      scrollStyle.height = device.windowHeight - 49.5   // 同上，需要根据底部栏目的实际高度来设置滚动高度
      // scrollStyle.height = 617.5
    }

    return (
      <View className="item_detail-page" 
        style={pageStyle} 
        >
        <TabBar list={TAB_LIST} />

        <View style={scrollStyle}>
          <ScrollView
            className='item_detail-scroll-wrap'
            scrollY
            scrollWithAnimation
            style={scrollStyle}
          >
            <Text>{pageStyle.height}</Text>
            <SimilarItemList
              list={this.state.similarCoupon || []}
            >
              <View>
                <Text>标题头</Text>
              </View>
            </SimilarItemList>
          </ScrollView>
        </View>

        <BottomBar />
      </View>
    )
  }
}
