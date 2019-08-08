import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

import gif_spin from '@/assets/gif/spin.gif'

interface SpinInterface {
  isShow?: boolean;
}

export default class Spin extends Component<SpinInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    if (!this.props.isShow) {
      return null
    }
    return (
      <View className="spin-comp">
        <Image className='spin-comp-img' src={gif_spin} />
      </View>
    )
  }
}
