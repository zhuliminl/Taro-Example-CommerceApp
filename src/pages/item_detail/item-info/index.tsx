import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import TextMoney from '@/components/text-money'
import './index.scss'
import bg_coupon from '@/assets/image/bg_coupon.png'

interface ItemInfoInterface {
  item: any;
}

export default class ItemInfo extends Component<ItemInfoInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="item-info-comp">
        <View className='item-info-price-wrap'>
          <View className='item-info-price-tag-wrap'>
            <Text className='item-info-price-tag-txt'>券后</Text>
          </View>
          <TextMoney money={26.90} fontSize={32}/>
          <View className='item-info-price-right-wrap'>
            <Text className='item-info-price-original-txt'>原价￥32.42</Text>
            <Text className='item-info-price-sold-txt'>1.3万人已购</Text>
          </View>
        </View>

        <View className='item-info-return-wrap'>
          <View className='item-info-return-order-wrap'>
            <Text className='item-info-return-order-txt'>下单返￥7.31</Text>
          </View>
          <Text className='item-info-return-leader'>成为团长可返回</Text>
          <Text className='item-info-return-money'>￥9.55</Text>
          <Text className='item-info-return-upgrade'>立即升级 ></Text>
        </View>

        <View className='item-info-item-title-wrap'>
          <Text className='item-info-item-title-txt'>网红小黑裤显瘦打底裤</Text>
        </View>

        <View className='item-info-coupon-wrap'>
          <Text className='item-info-coupon-money-txt'>￥10</Text>
          <View className='item-info-coupon-desc-wrap'>
            <Text className='item-info-coupon-desc-txt'>优惠券使用期限</Text>
            <Text className='item-info-coupon-date-txt'>2019.08.06-2019.08.12</Text>
          </View>
          <Image className='item-info-coupon-bg' src={bg_coupon} />
          <Text className='item-info-coupon-take-txt'>立即领取</Text>
        </View>
      </View>
    )
  }
}
