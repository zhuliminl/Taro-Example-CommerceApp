import Taro, { Component } from '@tarojs/taro'
import { View, Text, WebView, RichText } from '@tarojs/components'
import './talent_article.scss'
import HeaderWebpage from '@/components/header-webpage'
import WebPage from '@/components-poly/webpage-poly/index'
import { device } from '@/utils/device'
import { parseUrlParams } from '@/utils/navigation'
import {escape2Html} from '@/utils/stringhelper'


const host = HOST

export default class TalentArticle extends Component {
  config = {
    navigationBarTitleText: 'talent_article',
    // disableScroll: true,
  }

  state = {
    loading: true,
    data: {},
  }

  componentDidMount = async () => {
    const params = parseUrlParams(this.$router.params)
    const id = params['id'] || ''
    // const url = `https://v2.api.haodanku.com/talent_article/apikey/saul/id/${id}`
    const url = `${host}/talent_article/apikey/saul/id/${id}`
    try {
      const resp = await Taro.request({ url })
      const data = resp && resp.data && resp.data.data
      console.log('FIN 文章详情', data)
      this.setState({
        data,
        loading: false,
      })
    } catch (err) {
      console.log('FIN get coupon err', err)
    }
  }

  render() {
    const {data = {}} = this.state

    let scrollHeight: any = device.windowHeight
    let marginTop: any = 0

    if (device.isIOS()) {
      scrollHeight = device.windowHeight - 70
      marginTop = 70
    }

    if (device.isH5()) {
      scrollHeight = device.windowHeight - 50
    }

    if (device.isWeChat()) {
      scrollHeight = (device.windowHeight - 10) + 'px'   // 微信很奇怪，
    }

    if (device.isAndroid()) {
      scrollHeight = device.windowHeight - 48 - 24
      marginTop = 48
    }

    let frameStyle: any = {
      height: scrollHeight,
      width: device.windowWidth,
      marginTop,
    }

    const nodes = data['article'] || ''

    return (
      <View className="talent_article-page">
        <HeaderWebpage
          backgroundColor={'#FFF'}
          titleColor={'#333'}
          title={'达人文章'}
        />
        <RichText 
          style={{
            // position: 'fixed',
            height: 300,
            width: 300,
            backgroundColor: '#999',
            marginTop: 100,
          }}
          nodes={escape2Html(nodes)}
        />
      </View>
    )

    /* 以下示例是用来写 webview 的，以后可以作为范例拷贝
    return (
      <View className="talent_article-page">
        <HeaderWebpage
          backgroundColor={'#FFF'}
          titleColor={'#333'}
          title={'达人文章'}
        />
        <WebPage
          frameStyle={frameStyle}
          url={'https://www.baidu.com'}
        />
      </View>
    )
    */
  }
}
