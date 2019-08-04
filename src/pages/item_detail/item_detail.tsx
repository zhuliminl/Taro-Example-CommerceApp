import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './item_detail.scss'
import {parseUrlParams} from '@/utils/navigation'

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
    return (
      <View className="item_detail-page">
        <Text>
          item_detail
        </Text>
      </View>
    )
  }
}
