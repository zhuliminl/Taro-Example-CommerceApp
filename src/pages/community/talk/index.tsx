import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface TalkInterface {
}

export default class Talk extends Component<TalkInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="talk-comp">
        <Text>
          talk
        </Text>
      </View>
    )
  }
}
