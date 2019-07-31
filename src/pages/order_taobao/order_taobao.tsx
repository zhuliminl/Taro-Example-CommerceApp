import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './order_taobao.scss'


export default class OrderTaobao extends Component {
  config = {
    navigationBarTitleText: 'order_taobao',
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="order_taobao-page">
        <Text>
          order_taobao
        </Text>
      </View>
    )
  }
}
