import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './item_detail.scss'
import {parseUrlParams} from '@/utils/navigation'
import TabBar from './tab-bar'
import BottomBar from './bottom-bar'
import {device} from '@/utils/device'
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
  }

  componentDidMount = async () => {
    const params = parseUrlParams(this.$router.params)
    const itemid = params.itemid
    const url = `http://v2.api.haodanku.com/item_detail/apikey/saul/itemid/${itemid}`
    try {
      const resp = await Taro.request({url})
      const coupon = resp && resp.data && resp.data.data
      console.log('FIN coupons', coupon)
    } catch(err) {
      console.log('FIN get coupon err', err)
    }

  }

  render() {
    let pageStyle : any = {
      height: device.windowHeight,
    }
    if(isIOS) {
      marginTop: 20
    }

    return (
      <View className="item_detail-page" 
        style={pageStyle} >
        <TabBar 
          list={TAB_LIST}
        />
        <BottomBar />
      </View>
    )
  }
}
