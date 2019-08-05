import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import icon_copy from '@/assets/icon/copy.png'

interface BottomBarInterface {
}

export default class BottomBar extends Component<BottomBarInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="bottom-bar-comp">
        <View className='bottom-bar-left-wrap'>
          <Image className='bottom-bar-left-img'  src={icon_copy}/>
          <Text className='bottom-bar-left-txt'>复制口令</Text>
        </View>
        <View className='bottom-bar-right-wrap'>
          <View className='bottom-bar-right-red-wrap'>
            <Text className='bottom-bar-right-txt'>分享赚</Text>
            <Text className='bottom-bar-right-txt'>￥4.76</Text>
          </View>
          <View className='bottom-bar-right-black-wrap'>
            <Text className='bottom-bar-right-txt'>下单返</Text>
            <Text className='bottom-bar-right-txt'>￥4.76</Text>
          </View>
        </View>
      </View>
    )
  }
}
