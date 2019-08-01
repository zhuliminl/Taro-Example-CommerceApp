import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface AchievementInterface {
  title: string;
  money: number;
}


export default class Achievement extends Component<AchievementInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="achievement-comp">
        <View className='achievement-title-wrap'>
          <Text className='achievement-titie-txt'>{this.props.title}</Text>
          <Text className='achievement-money-txt'></Text>
        </View>
      </View>
    )
  }
}
