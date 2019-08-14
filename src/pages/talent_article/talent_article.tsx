import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './talent_article.scss'
import HeaderWebpage from '@/components/header-webpage'
import WebPage from '@/components-poly/webpage-poly/index'
import {device} from '@/utils/device'


export default class TalentArticle extends Component {
  config = {
    navigationBarTitleText: 'talent_article',
    disableScroll: true,
  }

  componentDidMount = () => {
  }

  render() {

    let scrollHeight: any = device.windowHeight
    let blankHeight: any = 50
    if (device.isIOS()) {
      blankHeight = 50 + 20
      scrollHeight = device.windowHeight - 70
    }

    if (device.isH5()) {
      scrollHeight = device.windowHeight - 50
    }

    if (device.isWeChat()) {
      blankHeight = (50 + 20) + 'px'
      scrollHeight = (device.windowHeight - 10) + 'px'   // 微信很奇怪，
    }

    if (device.isAndroid()) {
      blankHeight = 48
      scrollHeight = device.windowHeight - 48 - 24   
    }

    let frameStyle: any = {
      height: scrollHeight,
      width: device.windowWidth,
      marginTop: 70,  // 直接查看 ios 实际高度
    }

    return (
      <View className="talent_article-page">
        <HeaderWebpage backgroundColor={'#FE1123'} title={'达人文章'}/>
        <WebPage frameStyle={frameStyle} />
      </View>
    )
  }
}
