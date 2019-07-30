import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Tab from '@/components/tab'
import console = require('console');

const TAB_LIST = [
  {
    key: 1,
    title: '全部',
  },
  {
    key: 2,
    title: '女装',
  },
  {
    key: 3,
    title: '男装',
  },
  {
    key: 4,
    title: '内衣',
  },
  {
    key: 5,
    title: '美妆',
  },
  {
    key: 6,
    title: '配饰',
  },
  {
    key: 7,
    title: '鞋品',
  },
  {
    key: 8,
    title: '鞋品',
  },
  {
    key: 9,
    title: '鞋品',
  },
]


class Community extends Component {
  config = {
    navigationBarTitleText: '好省圈',
  }

  state = {
    loading: false,
  }


render () {
  return (
      <View>
        <Text>好省圈</Text>
        <Tab 
          current={3}
          list={TAB_LIST}
          handleItemClick={(item) => {
            console.log('FIN', item)
          }}
        />
      </View>
    )
  }
}

export default Community