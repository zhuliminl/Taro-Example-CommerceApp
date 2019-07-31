import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './estimate.scss'


export default class Estimate extends Component {
  config = {
    navigationBarTitleText: 'estimate',
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="estimate-page">
        <Text>
          estimate
        </Text>
      </View>
    )
  }
}
