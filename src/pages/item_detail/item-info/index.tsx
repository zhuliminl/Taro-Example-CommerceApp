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

        <View className='item-info-return-wrap'></View>

        <View className='item-info-coupon-wrap'></View>
      </View>
    )
  }
}
