import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { device } from '@/utils/device'

interface SuperTabInterface {
  list: any[];
  height: number;
  toLeft: number;
}

export default class SuperTab extends Component<SuperTabInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    let wrapStyle: any = {
      height: this.props.height
    }

    if (device.isWeChat()) {
      wrapStyle.height = this.props.height + 'px'
    }

    let toLeftWrapStyle: any = { backgroundColor: '#111', height: 50 }
    const { toLeft } = this.props
    toLeftWrapStyle.width = toLeft
    if (device.isWeChat()) {
      toLeftWrapStyle.width = toLeft + 'px'
      toLeftWrapStyle.height = '50px'
    }

    return (
      <View className="super-tab-comp" style={wrapStyle}>
        <View style={toLeftWrapStyle}></View>
      </View>
    )
  }
}
