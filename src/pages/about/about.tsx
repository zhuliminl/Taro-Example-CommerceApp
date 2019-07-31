import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './about.scss'


export default class About extends Component {
  config = {
    navigationBarTitleText: 'about',
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="about-page">
        <Text>
          about
        </Text>
      </View>
    )
  }
}
