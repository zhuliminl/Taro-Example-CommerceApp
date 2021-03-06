import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './index.scss'

import bg_coupon from '@/assets/icon/bg_coupon.png'
import { device } from '@/utils/device';
import { navigateTo } from '@/utils/navigation'



interface ItemCouponTxtStyleInterface {
  top?: number
}

interface ItemListInterface {
  list: any[],
}

class ItemList extends Component<ItemListInterface, {}> {
  static defaultProps = {
  }

  handleItemClick = (item) => {
    // console.log('FIN 去商品详情页', item)
    navigateTo('item_detail', { itemid: item.itemid })

  }

  render() {
    const { list = [] } = this.props
    let itemCouponTxtStyle: ItemCouponTxtStyleInterface = {}
    if (device.isIOS()) {
      itemCouponTxtStyle.top = 3
    }

    return (
      <View className='item-list-b'>
        <View className='item-list-b__title'>
          {this.props.children}
        </View>
        <View className='item-list-b__wrap'>
          {list.map((item, i) => (
            <View
              key={i}
              className='item-list-b__item'
              onClick={this.handleItemClick.bind(this, item)}
            >
              <Image className='item-list-b__item-img' src={item.itempic} />

              <View className='item-b-content-wrap'>
                <View className='item-b__price-wrap'>
                  <Text className='item-b__symbol-txt'>￥</Text>
                  <Text className='item-b__price-txt'>{item.itemendprice}</Text>
                </View>
                <Text
                  className='item-b__title-txt'
                  numberOfLines={2}
                  ellipsizeMode={'tail'}
                >{item.itemshorttitle}</Text>

                <View className='item-b-bottom-wrap'>
                  <Text className='item-b__original-price-txt'>原价￥{item.itemprice}</Text>
                  <Text className='item-b__sold-txt'>{item.itemsale}人已购</Text>
                </View>

                <View className='item-b-bottom-wrap'>
                  <View className='item-b-bottom-coupon-wrap'>
                    <Image className='item-b-bottom__bg-coupon' src={bg_coupon} />
                  </View>
                  <Text className='item-b__coupon-txt'
                    style={itemCouponTxtStyle}
                  >{item.couponmoney}元券</Text>
                  <Text className='item-b__return-txt'>返现￥{item.tkmoney}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    )
  }
}

export default ItemList