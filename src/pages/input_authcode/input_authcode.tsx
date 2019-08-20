import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './input_authcode.scss'


export default class InputAuthcode extends Component {
  config = {
    navigationBarTitleText: 'input_authcode',
    disableScroll: true,
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="input_authcode-page">
        <Text>
          input_authcode
        </Text>
      </View>
    )
  }
}
