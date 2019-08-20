import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import './terms.scss'
import HeaderWebpage from '@/components/header-webpage'
import { device } from '@/utils/device'
import RichTextPoly from '@/components-poly/rich-text-poly/index'
import { escape2Html } from '@/utils/stringhelper'
import terms_data from '@/constants/terms'



export default class Terms extends Component {
  config = {
    navigationBarTitleText: 'terms',
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

    const terms = terms_data['html'] || ''
    console.log('FIN xxxxxxx', terms)

    return (
      <View className="terms-page">
        <HeaderWebpage 
          backgroundColor={'#FFF'} 
          titleColor={'#333'} 
          title={'隐私政策'} 
          // hasReload
          />
        {device.isH5() && (<View style={{ height: 50 }}></View>)}
        {device.isIOS() && (<View style={{ height: 70 }}></View>)}
        {device.isAndroid() && (<View style={{ height: 48 }}></View>)}
        {device.isWeChat() && (<View style={{ height: '70px' }}></View>)}

        <ScrollView
          scrollY
          style={{
            height: scrollHeight,
          }}
        >
          <View className='terms-content-wrap'>
            <RichTextPoly nodes={escape2Html(terms)} />
          </View>
        </ScrollView>
      </View>
    )
  }
}
