import Taro, { Component } from '@tarojs/taro';
import { View, Text, SwiperItem } from '@tarojs/components';
import TabPageWrap from '@/components/tab-page-wrap'

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
  <View style={{backgroundColor: 'blue', height: 300, display: 'flex', flexDirection: 'column'}}>
    <Text>FooA</Text>
    <Text>FooA</Text>
    <Text>FooA</Text>
    <Text>FooA</Text>
    <Text>FooA</Text>
    <Text>FooA</Text>
    <Text>FosfdsoA</Text>
    <Text>FooA</Text>
    <Text>Foob</Text>
    <Text>FooA</Text>
    <Text>FosdA</Text>
    <Text>FooA</Text>
    <Text>barA</Text>
    <Text>sauloA</Text>
  </View>
)
const FooB = () => (
  <View style={{background: 'green'}}>
    <Text>FooB</Text>
  </View>
)
const FooC = () => (
  <View style={{background: 'red'}}>
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
  return (
      <View>
        <TabPageWrap
          scrollable
          height={300}
          current={0}
          onChange={() => {
            console.log('FIN onTabPageWrap change', )
          }}
          pages={pages}
        />
      </View>
    )
  }
}

export default Seckill