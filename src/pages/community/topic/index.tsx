import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface TopicInterface {
}

export default class Topic extends Component<TopicInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="topic-comp">
        <Text>
          topic
        </Text>
      </View>
    )
  }
}
