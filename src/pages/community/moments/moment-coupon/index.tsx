import Taro, { FunctionComponent } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import React from 'react'
import './index.scss'
import RedTag from '@/components/red-tag'

interface MomentCouponInterface {
  item: any;
}

const MomentCoupon: FunctionComponent<MomentCouponInterface> = (props) => {
  const { item = {} } = props
  let itemtitle = item['itemtitle'] || ''
  if (itemtitle.length >= 6) {
    itemtitle = itemtitle.substr(0, 12) + '...'
  }

  return (
    <View className="moment-coupon-comp">
      <View className='moment-coupon-left-wrap'>
        <Image className='moment-coupon-img' src={item['sola_image']} />
      </View>
      <View className='moment-coupon-right-wrap'>
        <Text className='moment-coupon-title-txt'>{itemtitle}</Text>
        <View className='moment-copon-price-wrap'>
          <Text className='moment-coupon-after-txt'>券后￥</Text>
          <Text className='moment-coupon-after-price-txt'>{item['itemendprice']}</Text>
        </View>
        <View className='moment-coupon-tags-wrap'>
          {/* 以下数据暂时 API 并未提供 */}
          <RedTag title={'5.9元起'} />
          <RedTag title={'4折起'} />
          <RedTag title={'最高佣金￥13.9'} />
        </View>


      </View>
    </View>
  )
}

export default MomentCoupon
