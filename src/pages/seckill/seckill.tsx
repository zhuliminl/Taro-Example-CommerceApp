import Taro, { Component } from '@tarojs/taro';
import { View, Text, SwiperItem } from '@tarojs/components';
import TabPageWrap from '@/components/tab-page-wrap'
import {device} from '@/utils/device'

const TAB_LIST = [
  {
    key: 0,
    title: '淘宝',
  },
  {
    key: 1,
    title: '京东',
  },
  {
    key: 2,
    title: '淘宝',
  },
]

const FooA = () => (
  <View style={{backgroundColor: 'green', flexDirection: 'column', justifyContent: 'flex-start'}}>
    <View><Text>FooA</Text></View>
  </View>
)
const FooB = () => (
  <View style={{backgroundColor: 'green'}}>
    <Text>FooB</Text>
  </View>
)
const FooC = () => (
  <View style={{backgroundColor: 'red'}}>
    <Text>FooC</Text>
  </View>
)

const pages = [
  {
    key: 0,
    el: FooA,
  },
  {
    key: 1,
    el: FooB,
  },
  {
    key: 2,
    el: FooC,
  },
]

class Seckill extends Component {
  config = {
    navigationBarTitleText: '大牌秒杀',
    disableScroll: true,
  }

  state = {
    loading: false,
  }

render () {
  let scrollStyle: any = {}
  if (device.isH5()) {
    scrollStyle.height = device.windowHeight - 55   // 必须大于底部栏目固定高度，才不会导致滑动障碍
  }

  if (device.isIOS()) {
    scrollStyle.height = device.windowHeight - 49.5   // 同上，需要根据底部栏目的实际高度来设置滚动高度
  }

  if (device.isAndroid()) {
    scrollStyle.height = device.windowHeight - device.info.statusBarHeight - 50.5   // 同上，需要根据底部栏目的实际高度来设置滚动高度
  }

  if (device.isWeChat()) {
    scrollStyle.height = device.windowHeight + 'px'   // wechat ide 中没问题
    scrollStyle.height = Taro.getSystemInfoSync().screenHeight + 'px'   // 手机上还是超出，需要集中处理这个问题 
  }

  return (
      <View>
        <TabPageWrap
          height={scrollStyle.height}
          // height={400}
          current={0}
          onChange={(detail) => {
            console.log('FIN onTabPageWrap change', detail)
          }}
          pages={pages}
        />
      </View>
    )
  }
}

export default Seckill