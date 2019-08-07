import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import SuperTab from '@/components/super-tab'

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

class Seckill extends Component {
  config = {
    navigationBarTitleText: '大牌秒杀',
  }

  state = {
    loading: false,
  }

render () {
  return (
      <View>
        <SuperTab 
          list={TAB_LIST} 
          height={100}
          />
      </View>
    )
  }
}

export default Seckill