import Taro, { Component, Config } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'
import configStore from './store'

import Index from './pages/index'

import './app.scss'

const store = configStore() 

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/home/home',
      'pages/community/community',
      'pages/seckill/seckill',
      'pages/partner/partner',
      'pages/user/user',
      'pages/user_login/user_login',
      'pages/setting/setting',
      'pages/estimate/estimate',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      navigationStyle: 'custom',  // 隐藏顶部导航栏
    },
    tabBar: {
      color: "#BABABA",
      selectedColor: "#FE1123",
      backgroundColor: "#FFFFFF",
      borderStyle: 'white',
      list: [
        {
          pagePath: "pages/home/home",
          iconPath: "./assets/tab-bar/home.png",
          selectedIconPath: "./assets/tab-bar/home-active.png",
          text: "首页"
        },
        {
          pagePath: "pages/community/community",
          iconPath: "./assets/tab-bar/save.png",
          selectedIconPath: "./assets/tab-bar/save-active.png",
          text: "好省圈"
        },
        {
          pagePath: "pages/seckill/seckill",
          // pagePath: "pages/estimate/estimate",
          iconPath: "./assets/tab-bar/seckill.png",
          selectedIconPath: "./assets/tab-bar/seckill-active.png",
          text: "大牌秒杀"
        },
        {
          pagePath: "pages/partner/partner",
          iconPath: "./assets/tab-bar/partner.png",
          selectedIconPath: "./assets/tab-bar/home-active.png",
          text: "合伙人特权"
        },
        {
          pagePath: "pages/user/user",
          iconPath: "./assets/tab-bar/user.png",
          selectedIconPath: "./assets/tab-bar/user-active.png",
          text: "我的"
        }
      ]
    }
  }

  componentDidMount () {
    console.log('APP DidMount')
  }

  componentDidShow () {
    console.log('APP DidShow')
  }

  componentDidHide () {
    console.log('APP DidShow')
  }

  componentDidCatchError () {
    console.log('APP DidCatchError')
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
