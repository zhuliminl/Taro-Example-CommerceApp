import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './index.scss'

import bg_coupon from '@/assets/icon/bg_coupon.png'
import { device } from '@/utils/device';
import {navigateTo} from '@/utils/navigation'



interface ItemCouponTxtStyleInterface {
  top?: number
}

interface ItemListInterface {
  list: any[],
}

class ItemList extends Component <ItemListInterface, {}> {
  static defaultProps = {
  }

  handleItemClick = (item) => {
    // console.log('FIN 去商品详情页', item)
    navigateTo('item_detail', {itemid:item.itemid})

  }

  render () {
    const {list} = this.props
    let itemCouponTxtStyle : ItemCouponTxtStyleInterface =  {}
    if(device.isIOS()) {
      itemCouponTxtStyle.top = 3
    }

    return (
      <View className='item-list'>
        <View className='item-list__title'>
          {this.props.children}
        </View>
        <View className='item-list__wrap'>
          {list.map(item => (
            <View
              key={item.itemid}
              className='item-list__item'
              onClick={this.handleItemClick.bind(this, item)}
            >
              <Image className='item-list__item-img' src={item.itempic} />

              <View className='item-content-wrap'>
                <View className='item__price-wrap'>
                  <Text className='item__symbol-txt'>￥</Text>
                  <Text className='item__price-txt'>{item.itemendprice}</Text>
                </View>
                <Text 
                  className='item__title-txt'
                  numberOfLines={2}
                  ellipsizeMode={'tail'}
                >{item.itemshorttitle}</Text>

                <View className='item-bottom-wrap'>
                  <Text className='item__original-price-txt'>原价￥{item.itemprice}</Text>
                  <Text className='item__sold-txt'>{item.itemsale}人已购</Text>
                </View>

                <View className='item-bottom-wrap'>
                  <View className='item-bottom-coupon-wrap'>
                    <Image className='item-bottom__bg-coupon' src={bg_coupon}/>
                  </View>
                  <Text className='item__coupon-txt'
                    style={itemCouponTxtStyle}
                  >{item.tkmoney}元券</Text>
                  <Text className='item__return-txt'>返现￥{item.tkmoney}</Text>
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