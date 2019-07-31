import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './invite.scss'


export default class Invite extends Component {
  config = {
    navigationBarTitleText: 'invite',
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="invite-page">
        <Text>
          invite
        </Text>
      </View>
    )
  }
}
