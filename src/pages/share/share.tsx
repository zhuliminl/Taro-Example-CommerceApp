import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './share.scss'


export default class Share extends Component {
  config = {
    navigationBarTitleText: 'share',
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="share-page">
        <Text>
          share
        </Text>
      </View>
    )
  }
}
