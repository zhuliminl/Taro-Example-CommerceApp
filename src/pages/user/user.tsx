import Taro, { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux'
import * as actions from '../../actions/user'
import { View, Text, Image } from '@tarojs/components';
import './user.scss'
import bg_user from './assets/bg_user.png'
import arrow from './assets/arrow.png'
import arrow_grey from './assets/arrow_grey.png'
import banner_partner from './assets/banner_partner.png'

import { device } from '@/utils/device'

const defaultAvatar = 'https://upload-images.jianshu.io/upload_images/1911665-4c2545e999616a1f.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/300/format/webp'

const DETAIL_LIST = [
  {
    key: 'withdraw',
    text: '提现',
    img: require('./assets/withdraw.png')
  },
  {
    key: 'team',
    text: '团队',
    img: require('./assets/team.png')
  },
  {
    key: 'order',
    text: '淘宝订单',
    img: require('./assets/order.png')
  },
  {
    key: 'seckill_order',
    text: '秒杀订单',
    img: require('./assets/seckill_order.png')
  },
]

interface UserInterface {
  getUser: (token) => {},
  userInfo: any,
}

@connect(state => state.user, { ...actions })
class User extends Component<UserInterface, {}> {
  config = {
    navigationBarTitleText: '个人中心',
    navigationBarBackgroundColor: 'red',
  }

  state = {
    loading: false,
  }

  componentDidShow = () => {
    this.props.getUser('saul')
    console.log('FIN', device)
  }

  render () {
    return (
        <View className='user'>
          <Image className='user_bg' src={bg_user} />

          <View className='user__profile'>
            <View className='profile__top-bar' 
              style={{
                ...(device.isRN() && {marginTop: 30} ),
              }}
            >
              <View className='profile__top-bar_item'>
                <Text className='profile__top-bar_txt'>消息</Text>
              </View>
              <View className='profile__top-bar_item'>
                <Text className='profile__top-bar_txt'>设置</Text>
              </View>
            </View>

            <View className='profile__avatar'>
              <Image className='profile__avatar_img' src={defaultAvatar}/>
              <View className='profile__right'>
                <View className='profile__right-item'>
                  <Text className='profile__name-txt'>小石头</Text>
                  <Text className='profile__partner-txt'>合伙人</Text>
                </View>
                <View className='profile__right-item'>
                  <Text className='profile__token-txt'>邀请口令:820CD406</Text>
                  <Text className='profile__copy-txt'>复制</Text>
                </View>
              </View>
            </View>

            <View className='profile__estimate'>
              <View className='profile__estimate-item'>
                <Text className='profile__estimate_money-txt'>￥0.00</Text>
                <View className='profile__estimate_title-item'>
                  <Text className='profile__estimate_title-txt'>今日预估</Text>
                  <Image className='profile__arrow'  src={arrow}/>
                </View>
              </View>
              <View className='profile__border'></View>
              <View className='profile__estimate-item'>
                <Text className='profile__estimate_money-txt'>￥8.00</Text>
                <View className='profile__estimate_title-item'>
                  <Text className='profile__estimate_title-txt'>今日预估</Text>
                  <Image className='profile__arrow'  src={arrow}/>
                </View>
              </View>
              <View className='profile__border'></View>
              <View className='profile__estimate-item'>
                <Text className='profile__estimate_money-txt'>￥100.00</Text>
                <View className='profile__estimate_title-item'>
                  <Text className='profile__estimate_title-txt'>今日预估</Text>
                  <Image className='profile__arrow'  src={arrow}/>
                </View>
              </View>
            </View>

            <View className='profile__partner_banner'>
              <Image
                src={banner_partner}
                className='profile__partner_banner-img'
                />
            </View>
          </View>
          <View className='user_blank'></View>

          <View className='user__title'>
            <Text className='user__title-txt'>会员详情</Text>
            <Text className='user__title-aside-txt'>查看概况</Text>
            <Image className='arrow_grey-img' src={arrow_grey} />
          </View>

          <View className='user__items-wrapper'>
          {
            DETAIL_LIST.map((item, i) => {
              return (
                <View className='user-item-wrapper' key={item.key}>
                  <Image className='icon-img' src={item.img}/>
                  <Text className='item-txt'>{item.text}</Text>
                </View>
              )
            })
          }
          </View>

        </View>
      )
  }
}

export default User