import './home.scss';

import { ScrollView, Text, View, Image } from '@tarojs/components';
import Taro, { Component, pxTransform } from '@tarojs/taro';
import SplashScreen from 'react-native-splash-screen'

import Banner from '@/components/banner';
import ItemListB from '@/components/item-list-a';
import SearchBarView from './search-bar-view';
import Spin from '@/components/spin';
import Tab from '@/components/tab';
import Chips from './chips'
import banner1 from '@/assets/tmp/banner/b1.png';
// import banner2 from '@/assets/tmp/banner/b2.png';
// import banner3 from '@/assets/tmp/banner/b3.png';
// import banner4 from '@/assets/tmp/banner/b4.png';
// import banner5 from '@/assets/tmp/banner/b5.png';
import { device, px } from '@/utils/device';
import { navigateTo } from '@/utils/navigation';
import ModalPoly from '@/components-poly/modal-poly'

const IMG_LIST = [
  {
    key: 1,
    src: banner1,
  },
  {
    key: 2,
    src: banner1,
  },
  {
    key: 3,
    src: banner1,
  },
  {
    key: 4,
    src: banner1,
  },
  {
    key: 5,
    src: banner1,
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
    title: '男装',
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
  {
    key: 13,
    title: '家电',
  },
  /*
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




// 隐藏顶部的搜索和分类 tab
const stickyTopInit = -200

class Home extends Component {
  config = {
    navigationBarTitleText: '首页',
    disableScroll: true,
  }

  state = {
    showModal: false,
    loading: false,
    coupons: [],
    current: 0,
    stickyTop: stickyTopInit,
    isHide: true,

    cid: 1,
    min_id: 1,
    superSortList: [],
    tabList: TAB_LIST, // 目前的 tab 存在必须设置好一定的初始值才能确保点击有滚动效果，这是个很隐晦的 bug
  }

  componentDidMount = async () => {
    this.fetchCoupon()
    this.fetchSuperSortList()

    // SplashScreen.hide()
    // console.log('FIN splash', SplashScreen.show())
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000)

    // setTimeout(() => {
    //   this.setState({
    //     showModal: true,
    //   })
    // }, 1000)
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
    const { detail } = event
    const { scrollTop } = detail

    if (scrollTop > 300 && this.state.isHide) {
      // 展示顶部隐藏的组件
      this.setState({
        isHide: false,
        stickyTop: 0,
      })
    }

    if (scrollTop <= 300 && !this.state.isHide) {
      this.setState({
        isHide: true,
        stickyTop: stickyTopInit,
      })
    }
  }

  fetchCoupon = async () => {
    const { cid, min_id } = this.state
    // console.log('FIN home state', this.state)
    const coupon_url = `https://v2.api.haodanku.com/itemlist/apikey/saul/nav/3/cid/${cid}/back/20/min_id/${min_id}`
    // console.log('FIN coupon list url', coupon_url)
    try {
      const resp = await Taro.request({ url: coupon_url })
      const couponsData = resp && resp.data && resp.data.data
      const min_id = resp && resp.data && resp.data.min_id
      const preState = this.state
      const coupons = preState.coupons.concat(couponsData)
      this.setState({
        coupons,
        min_id,
      })
    } catch (err) {
      console.log('FIN get coupon err', err)
    }
  }


  fetchSuperSortList = async () => {
    const url = 'https://v2.api.haodanku.com/super_classify/apikey/saul'
    try {
      const resp = await Taro.request({ url })
      let general_classify = resp && resp.data && resp.data.general_classify || []

      let tabList: any = [{ key: 0, title: '全部' }]  // 单独插入全部

      general_classify.forEach((item, i) => {
        tabList.push({
          key: item.cid,
          title: item.main_name,
        })
      })

      // console.log('FIN superSortList', general_classify)

      this.setState({
        superSortList: general_classify,
        tabList,
      })

    } catch (err) {
      console.log('FIN get superSearch err', err)
    }

  }

  handleOnTabChange = item => {
    const key = item.key
    this.setState({
      current: key,
      cid: key,
      coupons: [],
      min_id: 1,
    }, this.fetchCoupon)

  }

  handleOnScrollToLower = () => {
    this.fetchCoupon()
  }

  render() {

    let scrollStyle: any = {}
    if (device.isH5()) {
      scrollStyle.height = device.windowHeight - 55   // 必须大于底部栏目固定高度，才不会导致滑动障碍
    }

    if (device.isIOS()) {
      scrollStyle.height = device.windowHeight - 49.5   // 同上，需要根据底部栏目的实际高度来设置滚动高度
    }

    if (device.isAndroid()) {
      scrollStyle.height = device.windowHeight - device.info.statusBarHeight - 49   // 同上，需要根据底部栏目的实际高度来设置滚动高度
    }

    if (device.isWeChat()) {
      scrollStyle.height = device.windowHeight + 'px'   // wechat ide 中没问题
      scrollStyle.height = Taro.getSystemInfoSync().screenHeight + 'px'   // 手机上还是超出，需要集中处理这个问题 
      // console.log('FIN item scroll style for wechat', scrollStyle)
    }

    let swiperStyle: any = {
      overflow: 'visible',
    }

    if (device.isRN()) {
      // swiperStyle.height = 300
    }


    return (
      <View className='home'>


        {/* <ModalPoly
          // 暂时注销弹窗
          // isShow={this.state.showModal}
          isShow={false}
          width={px(270)}
          height={px(300)}
          borderRadius={px(10)}
        >
          <View
            style={{
              // width: px(270),
              // height: px(270),
            }}
            onClick={() => {
              console.log('FIN ModalPoly click')
            }}>
            <Image
              style={{
                width: px(270),
                height: px(270 * 562 / 556),
              }}
              src={require('../../assets/image/open_notification.png')}
            />
          </View>
        </ModalPoly> */}

        {/* <View className='home-sticky-wrap'
        // 注销 sticky
          style={{
            top: this.state.stickyTop,
          }}
        >
          <SearchBarView />
          <Tab
            itemWidth={60}
            current={this.state.current}
            list={this.state.tabList}
            onChange={(item) => { this.handleOnTabChange(item) }}
          />
        </View> */}

        <ScrollView
          onScroll={this.handleOnScroll.bind(this)}
          onScrollToLower={this.handleOnScrollToLower.bind(this)}
          scrollY
          style={scrollStyle}
        >
          <View style={{ height: pxTransform(40) }}></View>

          <Banner
            bannerHeight={280}
            bannerWidth={700}
            imgList={IMG_LIST}
          />

          <SearchBarView />
          <Chips />

          <Tab
            itemWidth={60}
            current={this.state.current}
            list={this.state.tabList}
            onChange={(item) => { this.handleOnTabChange(item) }}
          />

          {/* <View onClick={() => { navigateTo('supersort') }}>
            <Text>超级分类</Text>
          </View> */}


          {/* <Swiper
            current={this.state.current}
            style={swiperStyle}
          >
            <SwiperItem>
              <ScrollView style={{height: 300, width: '100%'}}>
                <ItemListB list={this.state.coupons || []} />
              </ScrollView>
              <Spin isShow/>
            </SwiperItem>
            <SwiperItem>
              <ItemListB list={this.state.coupons || []} />
              <Spin isShow/>
            </SwiperItem>
            <SwiperItem>
              <ItemListB list={this.state.coupons || []} />
              <Spin isShow/>
            </SwiperItem>
          </Swiper> */}

          <ItemListB list={this.state.coupons || []} />
          <Spin isShow />

        </ScrollView>
      </View>
    )
  }
}

export default Home