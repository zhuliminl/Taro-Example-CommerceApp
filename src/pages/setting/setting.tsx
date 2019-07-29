import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import Header from '@/components/header'
import List from '@/components/list'
import Btn from '@/components/btn'
import './setting.scss'
import {device} from '@/utils/device'
import {phone} from '@/utils/phone'
import console = require('console');

const defaultAvatar = 'https://s.gravatar.com/avatar/3b1d61ea5012bf77e59a91af3234b298?s=80'

class Setting extends Component {
  config = {
    navigationBarTitleText: '设置',
  }

  state = {
    loading: false,
  }

render () {
  return (
      <View 
        className='page-wrapper'
        style={device.isRN() ? {height: device.windowHeight}: {}}
      >
        <Header title='设置' />
        <List 
          title='头像'
          callback={() => {
            console.log('FIN 进入其他页面')
          }}
          renderAsideEl={
             <Image 
              className='setting-avatar'
              src={defaultAvatar} /> 
            }
          />
        <List 
          title='昵称'
          desc='小石头'
          callback={() => {
            console.log('FIN 进入其他页面')
          }}
          />
        <List 
          title='手机号'
          desc={phone.hideFormat('13735881684')}
          callback={() => {
            console.log('FIN 进入其他页面')
          }}
          />
        <List 
          title='收货地址'
          callback={() => {
            console.log('FIN 进入其他页面')
          }}
          hasMarginBottom
          />
          
        <List 
          title='微信授权'
          callback={() => {
            console.log('FIN 进入其他页面')
          }}
          hasMarginBottom
          />

        <List 
          title='推送设置'
          callback={() => {
            console.log('FIN 进入其他页面')
          }}
          />
        <List 
          title='浏览记录'
          callback={() => {
            console.log('FIN 进入其他页面')
          }}
          />
        <List 
          title='多语言'
          callback={() => {
            console.log('FIN 进入其他页面')
          }}
          hasMarginBottom
          />

        <Btn 
          title='退出当前账户'

          callback={() => {
            console.log('FIN 注销')
          }}
        />
      </View>
    )
  }
}

export default Setting