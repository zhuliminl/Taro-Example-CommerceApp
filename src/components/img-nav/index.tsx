import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface ImgNavInterface {
}

export default class ImgNav extends Component<ImgNavInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="img-nav-comp">
        <Text>
          img-nav
        </Text>
      </View>
    )
  }
}
