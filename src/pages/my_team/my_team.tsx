import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './my_team.scss'


export default class MyTeam extends Component {
  config = {
    navigationBarTitleText: 'my_team',
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="my_team-page">
        <Text>
          my_team
        </Text>
      </View>
    )
  }
}
