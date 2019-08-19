import './user_login.scss'

import Taro, { Component } from '@tarojs/taro';
import { Text, View, Image } from '@tarojs/components';
import RedBtn from '@/components/red-btn'

import Header from '@/components/header'
import { device } from '@/utils/device'
import icon_wechat_green from '@/assets/icon/wechat_green.png'

class UserLogin extends Component {
  config = {
    navigationBarTitleText: '登录',
    disableScroll: true,
  }

  state = {
    loading: false,
  }

  componentDidMount = () => {
  }

  render() {
    let pageHeight = device.windowHeight
    if(device.isWeChat()) {
      pageHeight = device.info.screenHeight + 'px'
    }
    return (
      <View
        className='user_login_page'
        style={{
          height: pageHeight,
        }}
      >
        <Header
          title={'登录'}
        />
        <View className='user-login-page-wrap'>
          <Text className='user-login-title-txt'>登录大淘客</Text>
          <RedBtn
            title={'立即登录'}
            onClick={() => {
              console.log('FIN 登录')
            }}
          />
          <View className='user-login-desc-wrap' onClick={() => {
            console.log('FIN 查看条款')
          }}>
            <Text className='user-login-desc-grey-txt'>登录即代表你已同意</Text>
            <Text className='user-login-desc-red-txt'>《大淘客隐私条款》</Text>
          </View>
          <Image className='user-login-wechat-icon-img' src={icon_wechat_green} />
          <Text className='user-login-wechat-txt'>微信快捷登录</Text>
        </View>
      </View>
    )
  }
}

export default UserLogin