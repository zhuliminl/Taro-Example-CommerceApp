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


import Banner from '@/components/banner'
import banner1 from '@/assets/banner/banner1.png'
import banner2 from '@/assets/banner/banner2.png'
import banner3 from '@/assets/banner/banner3.png'
import banner4 from '@/assets/banner/banner4.png'
import console = require('console');

const IMG_LIST = [
  {
    key: 1,
    src: banner1,
  },
  {
    key: 2,
    src: banner2,
  },
  {
    key: 3,
    src: banner3,
  },
  {
    key: 4,
    src: banner4,
  },
]


const defaultAvatar = 'https://s.gravatar.com/avatar/3b1d61ea5012bf77e59a91af3234b298?s=80'



const DETAIL_LIST = [
  {
    key: 'withdraw',
    text: '提现',
    description: '',
    img: require('./assets/withdraw.png')
  },
  {
    key: 'team',
    text: '团队',
    description: '',
    img: require('./assets/team.png')
  },
  {
    key: 'order',
    text: '淘宝订单',
    description: '',
    img: require('./assets/order.png')
  },
  {
    key: 'seckill_order',
    text: '秒杀订单',
    description: '',
    img: require('./assets/seckill_order.png')
  },
]

const SECKILL_ORDER_LIST = [
  {
    key: 'wait_pay',
    text: '待付款',
    description: '',
    img: require('./assets/wait_pay.png')
  },
  {
    key: 'wait_send',
    text: '待发货',
    description: '',
    img: require('./assets/wait_send.png')
  },
  {
    key: 'wait_receive',
    text: '待收货',
    description: '',
    img: require('./assets/wait_receive.png')
  },
  {
    key: 'aftersale',
    text: '退款/售后',
    description: '',
    img: require('./assets/aftersale.png')
  },
]

const MEMBER_CENTER_LIST = [
  {
    key: 'invite',
    text: '邀请好友',
    description: '自用省钱分享赚钱',
    img: require('./assets/invite.png')
  },
  {
    key: 'teacher',
    text: '导师微信',
    description: 'xiaoshitou',
    img: require('./assets/teacher.png')
  },
  {
    key: 'mannual',
    text: '新手教程',
    description: '初入好省必读攻略',
    img: require('./assets/manual.png')
  },
]

const SERVICE_LIST = [
  {
    key: 'wechat_broadcast',
    text: '微信群发',
    description: '解放双手轻松赚钱',
    img: require('./assets/wechat_broadcast.png')
  },
  {
    key: 'income_list',
    text: '收入榜单',
    description: '大神收入在此',
    img: require('./assets/income_list.png')
  },
  {
    key: 'pinduoduo',
    text: '拼多多',
    description: '小程序高额返佣',
    img: require('./assets/pinduoduo.png')
  },
  {
    key: 'seckill',
    text: '好省秒杀',
    description: '小程序',
    img: require('./assets/seckill.png')
  },
  {
    key: 'question',
    text: '常见问题',
    description: '有疑点点这里',
    img: require('./assets/question.png')
  },
  {
    key: 'find_order',
    text: '找回订单',
    description: '找回无佣金订单',
    img: require('./assets/find_order.png')
  },
  {
    key: 'sale_reward',
    text: '销售琅琊榜',
    description: '奖励发放中',
    img: require('./assets/sale_reward.png')
  },
  {
    key: 'materiel',
    text: '地推物料',
    description: '地推拉新赚钱',
    img: require('./assets/materiel.png')
  },
  {
    key: 'signup',
    text: '商家报名',
    description: '专业打造爆款',
    img: require('./assets/signup.png')
  },
  {
    key: 'token',
    text: '商城/口令',
    description: '',
    img: require('./assets/token.png')
  },
  {
    key: 'about',
    text: '关于大淘客',
    description: '1.0.0',
    img: require('./assets/about.png')
  },
]


interface UserInterface {
  getUser: (token: string) => {},
  goto: (path: string) => {},
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

  componentDidMount = () => {
    console.log("FIN Did Mount")
  }

  testToast = () => {
    console.log('FIN show toast')

    Taro.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
      .then(res => console.log(res))
  }

  goto = (pathName, params = {}) => {
    const paramsStr = Object.keys(params).map(function(k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]);
    }).join('&')

    console.log(paramsStr)

    Taro.navigateTo({
      url: `/pages/${pathName}/${pathName}?${paramsStr}`
    })
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
              <View className='profile__top-bar_item'
                onClick={() => {
                  this.goto('setting')
                }}
              >
                <Text className='profile__top-bar_txt'>设置</Text>
              </View>
            </View>

            <View className='profile__avatar'>
              <Image className='profile__avatar_img' src={defaultAvatar}/>
              <View className='profile__right'>
                <View className='profile__right-item'
                onClick={this.testToast}
                >
                  <Text className='profile__name-txt'>小石头{device.isAndroid() && 'android'} {device.isIOS() && 'ios'}</Text>
                  <Text className='profile__partner-txt'>合伙人</Text>
                </View>
                <View className='profile__right-item'>
                  <Text className='profile__token-txt'>邀请口令:820CD406</Text>
                  <Text className='profile__copy-txt'>复制</Text>
                </View>
              </View>
            </View>

            <View className='profile__estimate'>
              <View className='profile__estimate-item' onClick={this.goto.bind(this, 'estimate', {title: '今日评估', name: 'saul', age: 45})}>
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
            DETAIL_LIST.map((item) => {
              return (
                <View className='user-item-wrapper' key={item.key}>
                  <Image className='icon-img' src={item.img}/>
                  <Text className='item-txt'>{item.text}</Text>
                </View>
              )
            })
          }
          </View>


          <Banner 
            bannerHeight={135}
            imgList={IMG_LIST}
          />


          <View className='user__title'>
            <Text className='user__title-txt'>我的秒杀订单</Text>
            <Text className='user__title-aside-txt'>查看更多订单</Text>
            <Image className='arrow_grey-img' src={arrow_grey} />
          </View>
          <View className='user__items-wrapper'>
          {
            SECKILL_ORDER_LIST.map((item) => {
              return (
                <View className='user-item-wrapper' key={item.key}>
                  <Image className='icon-img' src={item.img}/>
                  <Text className='item-txt'>{item.text}</Text>
                </View>
              )
            })
          }
          </View>

          <View className='user__title'>
            <Text className='user__title-txt'>会员中心</Text>
          </View>
          <View className='user__items-wrapper'>
          {
            MEMBER_CENTER_LIST.map((item) => {
              const description = item.description
              return (
                <View className='user-item-wrapper' key={item.key}>
                  <Image className='icon-img' src={item.img}/>
                  <Text className='item-txt'>{item.text}</Text>
                  <Text className='item-description-txt'>{description}</Text>
                </View>
              )
            })
          }
          </View>

          <View className='user__title'>
            <Text className='user__title-txt'>我的服务</Text>
          </View>
          <View className='user__items-wrapper'>
          {
            SERVICE_LIST.map((item) => {
              const description = item.description
              return (
                <View className='user-item-wrapper' key={item.key}>
                  <Image className='icon-img' src={item.img}/>
                  <Text className='item-txt'>{item.text}</Text>
                  <Text className='item-description-txt'>{description}</Text>
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