import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import TextMoney from '@/components/text-money'
import './index.scss'
import bg_coupon from '@/assets/image/bg_coupon.png'
import { parseDate } from '@/utils/date'
import { device } from '@/utils/device';
import { signed, dtkAppData } from '@/utils/signed'

let RN = {
  Linking: {
    canOpenURL: (url) => Promise,
    openURL: (url) => { }
  }
}

if (process.env.TARO_ENV === 'rn') {
  RN = require('react-native')
}


interface ItemInfoInterface {
  item: any;
}

export default class ItemInfo extends Component<ItemInfoInterface, {}> {

  componentDidMount = () => {
  }

  handleOnCouponClick = async () => {
    // this.openTaobaoForRN()
    await this.getToken()

  }

  // 生成淘口令
  getToken = async () => {
    const { item = {} } = this.props
    const { goodsId = '0' } = item
    const query = {
      // goodsId: 572079415867,
      goodsId,
      // pid: 'mm_25980018_161500381_52500400059',
      pid: 'mm_25980018_42802227_261638775',
    }

    const url = 'https://openapi.dataoke.com/api/tb-service/get-privilege-link'
    try {
      const resp = await Taro.request({
        url,
        data: {
          ...dtkAppData,
          ...query,
          sign: signed(query),
        }
      })
      console.log('FIN item resp', resp)

      if (resp && resp['statusCode'] === 200 && resp['data']) {
      }

    } catch (err) {
      console.log('FIN get DTKToken error', err)
      Taro.showToast({
        title: '获取淘宝口令失败'
      })
    }

  }

  openTaobaoForRN = () => {
    if (device.isRN()) {
      RN.Linking.canOpenURL('taobao://').then(supported => {
        if (supported) {
          // Taro.showToast({
          //   title: '正在打开淘宝'
          // })
          RN.Linking.openURL('taobao://')
        } else {
          Taro.showToast({
            title: '无法打开淘宝'
          })
        }

      }).catch(err => {
        console.log('FIN 打开淘宝错误', err)
        Taro.showToast({
          title: '无法打开淘宝'
        })
      })
    }
  }

  render() {
    const { item = {} } = this.props
    let start_date = item['couponStartTime'] || '' as string
    let end_date = item['couponEndTime'] || '' as string
    start_date = start_date.substr(0, 10)
    end_date = end_date.substr(0, 10)

    return (
      <View className="item-info-comp">
        <View className='item-info-price-wrap'>
          <View className='item-info-price-tag-wrap'>
            <Text className='item-info-price-tag-txt'>券后</Text>
          </View>
          <TextMoney money={item['actualPrice']} fontSize={32} />
          <View className='item-info-price-right-wrap'>
            <Text className='item-info-price-original-txt'>原价￥{item['originalPrice']}</Text>
            <Text className='item-info-price-sold-txt'>{item['monthSales']}人已购</Text>
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
          <Text className='item-info-item-title-txt'>{item['dtitle'] || item['title']}</Text>
        </View>

        <View
          className='item-info-coupon-wrap'
          onClick={this.handleOnCouponClick}
        >
          <Text className='item-info-coupon-money-txt'>￥{item['couponPrice']}</Text>
          <View className='item-info-coupon-desc-wrap'>
            <Text className='item-info-coupon-desc-txt'>优惠券使用期限</Text>
            {/* <Text className='item-info-coupon-date-txt'>{parseDate(item.couponstarttime)}-{parseDate(item.couponendtime)}</Text> */}
            <Text className='item-info-coupon-date-txt'>{start_date}-{end_date}</Text>
          </View>
          <Image className='item-info-coupon-bg' src={bg_coupon} />
          <Text className='item-info-coupon-take-txt'>立即领取</Text>
        </View>
      </View>
    )
  }
}
