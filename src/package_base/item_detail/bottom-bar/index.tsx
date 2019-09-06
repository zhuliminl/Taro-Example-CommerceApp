import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import icon_copy from '@/assets/icon/copy.png'
import { device } from '@/utils/device';

// import { LaunchApp, detector, copy, ua, isAndroid, isIos, inWeixin, inWeibo, supportLink } from 'web-launch-app';
// import { LaunchApp } from 'web-launch-app';

let RN = {
  Linking: {
    canOpenURL: (url) => Promise,
    openURL: (url) => { }
  }
}

if (process.env.TARO_ENV === 'rn') {
  RN = require('react-native')
}

let LaunchApp = (config: any) => { }
if (process.env.TARO_ENV === 'h5') {
  const webLaunchApp = require('web-launch-app')
  LaunchApp = webLaunchApp['LaunchApp']
}



interface BottomBarInterface {
  item: any;
  isHdk?: boolean;
  channel: number;
  proUrl: string;
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

  openTaobaoForH5 = () => {
    if (device.isH5()) {
      try {
        const launchApp = new LaunchApp({})
        console.log('FIN launchApp', launchApp)
        const config = {
          scheme: 'taobao://',
          url: 'https://m.taobao.com/#index',
          param: {
            // 这里打开指定商品
            // k2: 'v2'
          }
        }

        launchApp.open(config, (s, d, url) => {
          console.log('callbackout', s, d, url);
          return 2
        })
      } catch (err) {
        Taro.showToast({ title: '打开淘宝失败' })
        console.log('FIN 尝试打开 淘宝失败', err)
      }
    }
  }

  handleOnTokenClick = () => {
    const { channel = 1 } = this.props
    console.log('FIN chanel', channel)
    if (channel === 1) {
      this.openTaoBao()
    }

    if (channel === 2) {
      this.openPindudduo()
    }

  }

  // 这地方需要小小修改下，到时候看情况
  openTaoBao = () => {
    // ====================== h5 端打开 app =====================
    this.openTaobaoForH5()

    const token = '打开利￥K6noYlUjx1O￥'  // 会过期
    Taro.setClipboardData({
      data: token,
    }).then(data => {
      Taro.showToast({
        title: '复制成功'
      })

      // =================== 为 RN 打开 淘宝 ===================
      this.openTaobaoForRN()

    }).catch(err => {
      console.log('FIN 设置系统剪切板失败', err)
      Taro.showToast({
        title: '复制失败'
      })
    })

  }

  openPindudduo = () => {
    this.openPinduoduoForH5()
    this.openPinduoduoForRN()
  }

  openPinduoduoForH5 = () => {
    const { proUrl = '' } = this.props
    if (device.isH5()) {
      try {
        const launchApp = new LaunchApp({})
        // console.log('FIN launchApp', launchApp)
        const config = {
          scheme: 'pinduoduo://',
          url: proUrl,
          param: {
            // 这里打开指定商品
            // k2: 'v2'
          }
        }

        launchApp.open(config, (s, d, url) => {
          console.log('callbackout', s, d, url);
          return 2
        })
      } catch (err) {
        Taro.showToast({ title: '打开拼多多失败' })
        console.log('FIN 尝试打开拼多多失败', err)
      }
    }
  }

  openPinduoduoForRN = () => {
    // const { proUrl = '' } = this.props
    const { item = {} } = this.props
    if (device.isRN()) {
      RN.Linking.canOpenURL('pinduoduo://').then(supported => {
        if (supported) {
          Taro.showToast({
            title: '正在打开拼多多'
          })
          // let url = "pinduoduo://com.xunmeng.pinduoduo/duo_coupon_landing.html?goods_id=" + goodId + "&pid=" + pid;
          // const goodsId = '23000840254'
          const goodsId = item['goodsId'] || ''
          const url = "pinduoduo://com.xunmeng.pinduoduo/duo_coupon_landing.html?goods_id=" + goodsId
          RN.Linking.openURL(url)
        } else {
          Taro.showToast({
            title: '无法打开拼多多'
          })
        }

      }).catch(err => {
        console.log('FIN 打开拼多多错误', err)
        Taro.showToast({
          title: '无法打开拼多多'
        })
      })
    }
  }


  render() {
    const { item } = this.props

    let btn_label = '复制口令'
    if (this.props.channel === 2) {
      btn_label = '打开宝贝'
    }

    return (
      <View className="bottom-bar-comp">
        <View
          className='bottom-bar-left-wrap'
          style={{
            ...(!this.props.isHdk && {
              flex: 1,
            })
          }}
          onClick={this.handleOnTokenClick.bind(this)}
        >
          <Image className='bottom-bar-left-img' src={icon_copy} />
          <Text className='bottom-bar-left-txt'>{btn_label}</Text>
        </View>
        {
          this.props.isHdk &&
          <View className='bottom-bar-right-wrap'>
            <View className='bottom-bar-right-red-wrap'>
              <Text className='bottom-bar-right-txt'>分享赚</Text>
              <Text className='bottom-bar-right-txt'>￥{item.tkmoney}</Text>
            </View>
            <View className='bottom-bar-right-black-wrap'>
              <Text className='bottom-bar-right-txt'>下单返</Text>
              <Text className='bottom-bar-right-txt'>￥{item.tkmoney || item['rebate']}</Text>
            </View>
          </View>
        }
      </View>
    )
  }
}

