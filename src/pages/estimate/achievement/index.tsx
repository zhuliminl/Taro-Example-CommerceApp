import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import TextMoney from '@/components/text-money'

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
          <Text className='achievement-title-txt'>{this.props.title}</Text>
          <TextMoney money={this.props.money} fontSize={32}/>
        </View>

        {/* 我的概况 */}
        <View className='achievement-table-wrap'>
          <View className='achievement-table-title-wrap'>
            <Text className='acievement-table-title-txt'>我的概况</Text>
          </View>

          <View className='achievement-item-wrap'>
            <View className='achievement-item-left-wrap'>
              <Text className='acheievement-item-left-txt'>淘宝订单</Text>
              <Text className='acheievement-item-left-money'>8.32</Text>
            </View>
            <View className='achievement-item-right-wrap'>
              <Text className='acheievement-item-left-txt'>效果预估</Text>
              <Text className='acheievement-item-left-money'>0.23</Text>
            </View>
          </View>

          <View className='achievement-item-wrap'>
            <View className='achievement-item-left-wrap'>
              <Text className='acheievement-item-left-txt'>京东订单</Text>
              <Text className='acheievement-item-left-money'>3.33</Text>
            </View>
            <View className='achievement-item-right-wrap'>
              <Text className='acheievement-item-left-txt'>效果预估</Text>
              <Text className='acheievement-item-left-money'>0</Text>
            </View>
          </View>

          <View className='achievement-item-wrap'>
            <View className='achievement-item-left-wrap'>
              <Text className='acheievement-item-left-txt'>拼多多订单</Text>
              <Text className='acheievement-item-left-money'>9.32</Text>
            </View>
            <View className='achievement-item-right-wrap'>
              <Text className='acheievement-item-left-txt'>效果预估</Text>
              <Text className='acheievement-item-left-money'>0</Text>
            </View>
          </View>



        </View>
      </View>
    )
  }
}
