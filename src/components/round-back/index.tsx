import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

import round_back from '@/assets/icon/round_back.png'

interface RoundBackInterface {
}

export default class RoundBack extends Component<RoundBackInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="round-back-comp" onClick={() => {
        Taro.navigateBack()
      }}>
        <Image className='round_back-img' src={round_back} />
      </View>
    )
  }
}
