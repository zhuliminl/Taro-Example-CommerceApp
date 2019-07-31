import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './order_seckill.scss'


export default class Order_seckill extends Component {
  config = {
    navigationBarTitleText: 'order_seckill',
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="order_seckill-page">
        <Text>
          order_seckill
        </Text>
      </View>
    )
  }
}
