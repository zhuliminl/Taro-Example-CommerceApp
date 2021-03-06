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
  tbkUserId?: string | number;
  channel: number;
}

class ItemList extends Component<ItemListInterface, {}> {
  static defaultProps = {
  }

  handleItemClick = (item) => {
    // console.log('FIN 去商品详情页', item)
    const itemid = item['itemid'] || item['goodsId'] || ''
    const tbkUserId = this.props['tbkUserId'] || ''
    const channel = this.props['channel'] || 1
    navigateTo('item_detail', { itemid, tbkUserId, channel })

  }

  render() {
    const { list = [] } = this.props
    return (
      <View className='item-list'>
        <View className='item-list__title'>{this.props.children}</View>
        <View className='item-list__wrap'>
          {list.map((item, i) => {
            return (
              <View
                key={i}
                className='item-list__item'
                onClick={this.handleItemClick.bind(this, item)}
              >
                <Image className='item-list__item-img' src={item.itempic || item['mainUrl']} />
                <View className='item-list__item-right'>
                  <View className='item-right-top'>
                    <Text className='item__title-txt'>{item.itemshorttitle || item['title']}</Text>
                    <View className='item__price-wrap'>
                      <Text className='item__symbol-txt'>￥</Text>
                      <Text className='item__price-txt'>{item.itemendprice || item['discountPrice']}</Text>
                    </View>
                  </View>

                  <View className='item-right-bottom'>
                    <View className='item-right-bottom-wrap'>
                      <Text className='item__original-price-txt'>原价￥{item.itemprice || item['price']}</Text>
                      <Text className='item__sold-txt'>{item.itemsale || item['salesCount']}人已购</Text>
                    </View>
                    <View className='item-right-bottom-wrap'>
                      <View className='item-right-bottom-coupon-wrap'>
                        <Image className='item-right-bottom__bg-coupon' src={bg_coupon} />
                      </View>
                      <Text className='item__coupon-txt'>{item.couponmoney || item['couponDiscount']}元券</Text>
                      <Text className='item__return-txt'>返现￥{item.tkmoney || item['rebate']}</Text>
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