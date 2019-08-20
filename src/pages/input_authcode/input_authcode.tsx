import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './input_authcode.scss'
import Header from '@/components/header'
import { device } from '@/utils/device'
import { navigateTo } from '@/utils/navigation'
import H1 from '@/components/h1'
import { parseUrlParams } from '@/utils/navigation'
import { phone } from '@/utils/phone'
import CodeInput from '@/components/code-input'


export default class InputAuthcode extends Component {
  config = {
    navigationBarTitleText: 'input_authcode',
    disableScroll: true,
  }

  state = {
    mobile: '13735881684',
  }

  componentDidMount = () => {
    const params = parseUrlParams(this.$router.params)
    const { mobile = '' } = params
    this.setState({
      // 开发阶段先注释
      // mobile
    })
  }

  render() {
    let pageHeight = device.windowHeight
    if (device.isWeChat()) {
      pageHeight = device.info.screenHeight + 'px'
    }

    let h1Style: any = {
      // backgroundColor: '#F5F6F7',
      marginBottom: 30,
    }

    if (device.isWeChat()) {
      h1Style.marginBottom += 'px'
    }

    const { mobile = '' } = this.state

    return (
      <View className="input_authcode-page"
        style={{
          height: pageHeight,
        }}
      >
        <Header title={''} />
        <View className='input-authcode-content-wrap'>
          <H1
            title='输入短信验证码'
            desc={`短信已发送至 +86 ${phone.divideFormat(mobile)}`}
            style={{ ...h1Style, }}
          />
          <CodeInput
            codeLength={4}
            handleOnSubmit={({ code }) => {
              Taro.showToast({
                title: code
              })
            }}
          />
        </View>
      </View>
    )
  }
}
