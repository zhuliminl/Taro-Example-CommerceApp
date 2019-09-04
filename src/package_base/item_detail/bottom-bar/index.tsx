import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import icon_copy from '@/assets/icon/copy.png'
import { device } from '@/utils/device';

let RN = {
  Linking: {
    canOpenURL: (url) => Promise,
    openURL: (url) => { }
  }
}

if (process.env.TARO_ENV === 'rn') {
  RN = require('react-native')
}

interface BottomBarInterface {
  item: any;
}

export default class BottomBar extends Component<BottomBarInterface, {}> {

  componentDidMount = () => {
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

  handleOnTokenClick = () => {
    const token = '打开"手机tao包“即可打开下单，付款后就能获得返利￥K6noYlUjx1O￥'  // 会过期
    Taro.setClipboardData({
      data: token,
    }).then(data => {
      Taro.showToast({
        title: '复制成功'
      })

      // ============================================ 为 RN 打开 淘宝 ========================
      this.openTaobaoForRN()

    }).catch(err => {
      console.log('FIN 设置系统剪切板失败', err)
      Taro.showToast({
        title: '复制失败'
      })
    })
  }

  render() {
    const { item } = this.props
    return (
      <View className="bottom-bar-comp">
        <View className='bottom-bar-left-wrap' onClick={this.handleOnTokenClick.bind(this)}>
          <Image className='bottom-bar-left-img' src={icon_copy} />
          <Text className='bottom-bar-left-txt'>复制口令</Text>
        </View>
        <View className='bottom-bar-right-wrap'>
          <View className='bottom-bar-right-red-wrap'>
            <Text className='bottom-bar-right-txt'>分享赚</Text>
            <Text className='bottom-bar-right-txt'>￥{item.tkmoney}</Text>
          </View>
          <View className='bottom-bar-right-black-wrap'>
            <Text className='bottom-bar-right-txt'>下单返</Text>
            <Text className='bottom-bar-right-txt'>￥{item.tkmoney}</Text>
          </View>
        </View>
      </View>
    )
  }
}
