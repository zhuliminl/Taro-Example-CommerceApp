import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import icon_back from '@/assets/icon/back.png'

import {device} from '@/utils/device'
const isIOS = device.isIOS()

interface TabBarInterface {
  list: any[],
}

export default class TabBar extends Component<TabBarInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="tab-bar-comp"
        style={isIOS ? { marginTop: 20 } : {}}
      >
        <View className='icon-back-wrap'>
          <Image className='item-back-img' src={icon_back} />
        </View>
        {
          this.props.list.map(item => {
            return (
              <View key={item.key} className='tab-bar-item-wrap'>
                <Text className='tab-bar-item-txt'>{item.title}</Text>
              </View>
            )
          })
        }
      </View>
    )
  }
}
