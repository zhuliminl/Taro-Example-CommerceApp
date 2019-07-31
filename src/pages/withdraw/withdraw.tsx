import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './withdraw.scss'


export default class Withdraw extends Component {
  config = {
    navigationBarTitleText: 'withdraw',
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="withdraw-page">
        <Text>
          withdraw
        </Text>
      </View>
    )
  }
}
