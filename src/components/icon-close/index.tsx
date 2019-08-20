import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import icon_close_round_grey from '@/assets/icon/close_round_grey.png'

interface IconCloseInterface {
  onClick: () => void;
  isShow: boolean;
}

export default class IconClose extends Component<IconCloseInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    const { onClick, isShow } = this.props
    if(!isShow) return null
    return (
      <View className="icon-close-comp" onClick={() => {
        onClick && onClick()
      }}>
        <Image className='icon-close-round-img' src={icon_close_round_grey} />
      </View>
    )
  }
}
