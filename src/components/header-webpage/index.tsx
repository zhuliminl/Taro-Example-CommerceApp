import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface HeaderWebpageInterface {
}

export default class HeaderWebpage extends Component<HeaderWebpageInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="header-webpage-comp">
        <Text>
          header-webpage
        </Text>
      </View>
    )
  }
}
