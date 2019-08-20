import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './input_mobile.scss'
import Header from '@/components/header'
import { device } from '@/utils/device'
import { navigateTo } from '@/utils/navigation'
import RedBtn from '@/components/red-btn'
import H1 from '@/components/h1'
import IconClose from '@/components/icon-close'


export default class InputMobile extends Component {
  config = {
    navigationBarTitleText: 'input_mobile',
    disableScroll: true,
  }

  state = {
    isIconCloseShow: false,
    mobile: '',
    active: false,
  }

  componentDidMount = () => {
  }

  handleOnChange = event => {
    const { detail = {} } = event
    const { value = '' } = detail
    if (value && value.length > 0) {
      this.setState({
        isIconCloseShow: true,
      })
    }

    // 简单验证是手机
    if (value.length >= 11) {
      this.setState({
        active: true,
      })
    }

    if (value.length < 11) {
      this.setState({
        active: false,
      })
    }

    this.setState({
      mobile: value,
    })
  }

  fetchAuthCode = mobile => {
    // 获取验证码
    Taro.showToast({
      title: mobile,
    })

    navigateTo('input_authcode', { mobile, })
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
    return (
      <View
        className="input_mobile-page"
        style={{
          height: pageHeight,
        }}
      >
        <Header title={''} />
        <View className='input-mobile-content-wrap'>
          <H1
            title='输入手机号'
            desc='未注册手机验证后将自动登录'
            style={{ ...h1Style, }}
          />

          <View className='input-mobile-wrap'>
            <Text className='input-mobile-prefix-txt'>+86</Text>
            <Input
              value={this.state.mobile}
              type={'number'}
              placeholder={'请输入手机号'}
              className='mobile-input'
              focus
              onInput={this.handleOnChange.bind(this)}
            // onConfirm={this.handleOnSearch.bind(this)}
            // style={inputStyle}
            />
            <IconClose
              isShow={this.state.isIconCloseShow}
              onClick={() => {
                this.setState({
                  mobile: '',
                  isIconCloseShow: false,
                  active: false,
                })
                Taro.showToast({
                  title: '已清除'
                })
              }}
            />

          </View>

          <RedBtn
            active={this.state.active}
            style={{
              // 在小程序中，传递样式的应用层级和其他平台不一致。以下样式应用对小程序无效!
              alignSelf: 'center',
            }}
            title={'获取验证码'}
            onClick={() => {
              const { active, mobile } = this.state
              // if (!active) return    // 开发阶段注释掉
              this.fetchAuthCode(mobile)
            }}
          />

        </View>
      </View>
    )
  }
}
