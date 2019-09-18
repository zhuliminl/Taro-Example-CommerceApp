import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import TextMoney from '@/components/text-money'
import './index.scss'
import bg_coupon from '@/assets/image/bg_coupon.png'
import { parseDate } from '@/utils/date'


interface ItemInfoInterface {
  item: any;
}

export default class ItemInfo extends Component<ItemInfoInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    const { item = {} } = this.props
    console.log('FIN couponurl', item.couponurl)
    return (
      <View className="item-info-comp">
        <View className='item-info-price-wrap'>
          <View className='item-info-price-tag-wrap'>
            <Text className='item-info-price-tag-txt'>券后</Text>
          </View>
          <TextMoney money={item.itemendprice} fontSize={32} />
          <View className='item-info-price-right-wrap'>
            <Text className='item-info-price-original-txt'>原价￥{item.itemprice}</Text>
            <Text className='item-info-price-sold-txt'>{item.itemsale}人已购</Text>
          </View>
        </View>

        {/* <View className='item-info-return-wrap'>
          <View className='item-info-return-order-wrap'>
            <Text className='item-info-return-order-txt'>下单返￥{item.tkmoney}</Text>
          </View>
          <Text className='item-info-return-leader'>成为团长可返</Text>
          <Text className='item-info-return-money'>￥9.x5</Text>
          <Text className='item-info-return-upgrade'>立即升级 ></Text>
        </View> */}

        <View className='item-info-item-title-wrap'>
          <Text className='item-info-item-title-txt'>{item.itemshorttitle}</Text>
        </View>

        <View className='item-info-coupon-wrap'>
          <Text className='item-info-coupon-money-txt'>￥{item.couponmoney}</Text>
          <View className='item-info-coupon-desc-wrap'>
            <Text className='item-info-coupon-desc-txt'>优惠券使用期限</Text>
            <Text className='item-info-coupon-date-txt'>{parseDate(item.couponstarttime)}-{parseDate(item.couponendtime)}</Text>
          </View>
          <Image className='item-info-coupon-bg' src={bg_coupon} />
          <Text className='item-info-coupon-take-txt'>立即领取</Text>
        </View>
      </View>
    )
  }
}
