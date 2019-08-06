import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import TextMoney from '@/components/text-money'
import './index.scss'

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

        <View className='item-info-coupon-wrap'></View>
      </View>
    )
  }
}
