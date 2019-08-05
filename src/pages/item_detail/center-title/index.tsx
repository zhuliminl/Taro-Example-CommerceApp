import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface CenterTitleInterface {
}

export default class CenterTitle extends Component<CenterTitleInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="center-title-comp">
        <Text>
          center-title
        </Text>
      </View>
    )
  }
}
