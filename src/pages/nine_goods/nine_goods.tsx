import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './nine_goods.scss'


const TAB_LIST = [
  {
    key: 1,
    title: '精选',
  },
  {
    key: 2,
    title: '居家',
  },
  {
    key: 3,
    title: '美食',
  },
  {
    key: 4,
    title: '服饰',
  },
  {
    key: 5,
    title: '配饰',
  },
  {
    key: 6,
    title: '美妆',
  },
  {
    key: 7,
    title: '内衣',
  },
]


export default class NineGoods extends Component {
  config = {
    navigationBarTitleText: 'nine_goods',
    disableScroll: true,
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="nine_goods-page">
        <Text>
          nine_goods
        </Text>
      </View>
    )
  }
}
