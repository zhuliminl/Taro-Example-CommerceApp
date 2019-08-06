import Taro, { Component, pxTransform, hideToast } from '@tarojs/taro';
import { View, Text, ScrollView } from '@tarojs/components';
import './home.scss'

import ItemListB from '@/components/item-list-a'
import Banner from '@/components/banner'
import Tab from '@/components/tab'
import SearchBarView from './search-bar-view'

import banner1 from '@/assets/tmp/banner/b1.png'
import banner2 from '@/assets/tmp/banner/b2.png'
import banner3 from '@/assets/tmp/banner/b3.png'
import banner4 from '@/assets/tmp/banner/b4.png'
import banner5 from '@/assets/tmp/banner/b5.png'
import { device } from '@/utils/device';
import {animateValue} from '@/utils/animation'

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
  {
    key: 5,
    src: banner5,
  },
]

const TAB_LIST = [
  {
    key: 0,
    title: '全部',
  },
  {
    key: 1,
    title: '女装',
  },
  {
    key: 2,
    title: '男装服饰',
  },
  {
    key: 3,
    title: '内衣',
  },
  {
    key: 4,
    title: '美妆',
  },
  {
    key: 5,
    title: '配饰',
  },
  {
    key: 6,
    title: '鞋品',
  },
  {
    key: 7,
    title: '箱包',
  },
  {
    key: 8,
    title: '儿童',
  },
  {
    key: 9,
    title: '母婴',
  },
  {
    key: 10,
    title: '居家',
  },
  {
    key: 11,
    title: '美食',
  },
  {
    key: 12,
    title: '数码',
  },
  /*
  {
    key: 13,
    title: '家电',
  },
  {
    key: 14,
    title: '其他',
  },
  {
    key: 15,
    title: '车品',
  },
  {
    key: 16,
    title: '文体',
  },
  {
    key: 17,
    title: '宠物',
  },
  */
]



const coupon_url = 'https://v2.api.haodanku.com/itemlist/apikey/saul/nav/3/cid/0/back/20/min_id/1'

// 隐藏顶部的搜索和分类 tab
const stickyTopInit = -200

class Home extends Component {
  config = {
    navigationBarTitleText: '首页',
    disableScroll: true,
  }

  state = {
    loading: false,
    coupons: [],
    current: 0,
    stickyTop: stickyTopInit,
    isHide: true,
  }

  componentDidMount = async () => {
    this.fetchCoupon()

    // setTimeout(() => {
    //   this.testAnimateSticky()
    // }, 3000)
  }

  fetchCoupon = async () => {
    try {
      const resp = await Taro.request({url: coupon_url})
      const coupons = resp && resp.data && resp.data.data
      this.setState({
        coupons,
      })
    } catch(err) {
      console.log('FIN get coupon err', err)
    }
  }

  setTop = value => {
    console.log('FIN set sticky top', value)
    this.setState({
      stickyTop: value
    })
  }

  testAnimateSticky = () => {
    // animateValue(stickyTopInit, 0, this.setTop)
  }

  handleOnScroll = (event) => {
    const {detail} = event
    const {scrollTop} = detail

    if(scrollTop > 300 && this.state.isHide) {
      // 展示顶部隐藏的组件
      console.log('FIN 展示顶部组件')
      this.setState({
        isHide: false,
        stickyTop: 0,
      })
    }

    if(scrollTop <= 300 && !this.state.isHide) {
      console.log('FIN 隐藏顶部组件')
      this.setState({
        isHide: true,
        stickyTop: stickyTopInit,
      })
    }

    console.log('FIN scroll scrollTop', scrollTop)
  }

  render () {
    let scrollStyle : any = {}
    if(device.isH5()) {
      scrollStyle.height = device.windowHeight - 55   // 必须大于底部栏目固定高度，才不会导致滑动障碍
    }

    if(device.isIOS()) {
      scrollStyle.height = device.windowHeight - 49.5   // 同上，需要根据底部栏目的实际高度来设置滚动高度
    }

    if(device.isAndroid()) {
      scrollStyle.height = device.windowHeight - device.info.statusBarHeight - 50.5   // 同上，需要根据底部栏目的实际高度来设置滚动高度
    }

    if(device.isWeChat()) {
      scrollStyle.height = device.windowHeight + 'px'   // wechat ide 中没问题
      scrollStyle.height = Taro.getSystemInfoSync().screenHeight + 'px'   // 手机上还是超出，需要集中处理这个问题 
      console.log('FIN item scroll style for wechat', scrollStyle)
    }



    return (
      <View className='home'>
        <View className='home-sticky-wrap'
          style={{
            top: this.state.stickyTop,
          }}
        >
          <SearchBarView/>
          <Tab 
            itemWidth={60}
            current={this.state.current}
            list={TAB_LIST}
            onChange={(item) => {
              this.setState({
                current: item.key,
              })
            }}
          />
        </View>
        <ScrollView
          onScroll={this.handleOnScroll.bind(this)}
          scrollY
          style={scrollStyle}
        >
          <View style={{height: pxTransform(40)}}></View>

          <Banner 
            bannerHeight={280}
            bannerWidth={700}
            imgList={IMG_LIST}
          />

          <SearchBarView/>
          <Tab 
            itemWidth={60}
            current={this.state.current}
            list={TAB_LIST}
            onChange={(item) => {
              this.setState({
                current: item.key,
              })
            }}
          />

          <ItemListB list={this.state.coupons || []} />
        </ScrollView>


      </View>
    )
  }
}

export default Home