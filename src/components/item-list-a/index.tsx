import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './index.scss'

import bg_coupon from '@/assets/icon/bg_coupon.png'
import { navigateTo } from '@/utils/navigation'

/* import {device} from '@/utils/device'


interface WrapperStyleInterface {
  marginBottom?: any;
  paddingTop?: number;
  paddingBottom?: number;
} */

interface ItemListInterface {
  list: any[],
  isDTK?: boolean;
}

class ItemList extends Component<ItemListInterface, {}> {
  static defaultProps = {
    isDTK: false,
  }

  handleItemClick = (item) => {
    // console.log('FIN 去商品详情页', item)
    const { isDTK } = this.props
    if (isDTK) {
      return navigateTo('item_detail', { itemid: item['goodsId'] })
    }
    navigateTo('item_detail', { itemid: item.itemid })

  }

  render() {
    const { list = [], isDTK } = this.props
    return (
      <View className='item-list'>
        <View className='item-list__title'>{this.props.children}</View>
        <View className='item-list__wrap'>
          {list.map((item, i) => {

            if (isDTK) {
              // console.log('FIN item ', item)
            }

            let title = item['itemshorttitle'] || ''
            let maxChar = 23
            if (title.length > maxChar) {
              title = title.substr(0, maxChar) + '...'
            }

            let tkmoney = item['tkmoney']
            if (isDTK) {
              const commissionRate = item['commissionRate']
              // console.log('FIN commissionRate', commissionRate)
              tkmoney = item['actualPrice'] * commissionRate / 100
              tkmoney = tkmoney.toFixed(2)
            }

            return (
              <View
                key={i}
                className='item-list__item'
                onClick={this.handleItemClick.bind(this, item)}
              >
                <Image className='item-list__item-img' src={item.itempic || item['mainPic']} />
                <View className='item-list__item-right'>
                  <View className='item-right-top'>
                    <Text className='item__title-txt'>{title || item['dtitle']}</Text>
                    <View className='item__price-wrap'>
                      <Text className='item__symbol-txt'>￥</Text>
                      <Text className='item__price-txt'>{item.itemendprice || item['actualPrice']}</Text>
                    </View>
                  </View>

                  <View className='item-right-bottom'>
                    <View className='item-right-bottom-wrap'>
                      <Text className='item__original-price-txt'>原价￥{item.itemprice || item['originalPrice']}</Text>
                      <Text className='item__sold-txt'>{item.itemsale || item['monthSales']}人已购</Text>
                    </View>
                    <View className='item-right-bottom-wrap'>
                      <View className='item-right-bottom-coupon-wrap'>
                        <Image className='item-right-bottom__bg-coupon' src={bg_coupon} />
                      </View>
                      <Text className='item__coupon-txt'>{item.couponmoney || item['couponPrice']}元券</Text>
                      <Text className='item__return-txt'>返现￥{tkmoney}</Text>
                    </View>
                  </View>
                </View>

              </View>
            )
          })}
        </View>
      </View>
    )
  }
}

export default ItemList