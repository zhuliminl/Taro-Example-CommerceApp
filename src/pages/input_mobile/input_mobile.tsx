import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './input_mobile.scss'


export default class InputMobile extends Component {
  config = {
    navigationBarTitleText: 'input_mobile',
    disableScroll: true,
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="input_mobile-page">
        <Text>
          input_mobile
        </Text>
      </View>
    )
  }
}
