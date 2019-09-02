import './index.scss'

import { Image, Text, View } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'

import { device } from '@/utils/device';
import icon_back from '@/assets/icon/back.png'

interface TabBarInterface {
  list: any[],
}

export default class TabBar extends Component<TabBarInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    let styleIOS: any = {}
    if (device.isIOS()) {
      styleIOS.paddingTop = 30
      // 
    }

    return (
      <View className="tab-bar-comp" style={styleIOS}>
        <View className='icon-back-wrap'
          onClick={() => {
            Taro.navigateBack()
          }}
        >
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
