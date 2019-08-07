import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import {device} from '@/utils/device'

interface SuperTabInterface {
  list: any[];
  height: number;
}

export default class SuperTab extends Component<SuperTabInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    let wrapStyle : any = {
      height: this.props.height
    }

    if(device.isWeChat()) {
      wrapStyle.height = this.props.height + 'px'
    }

    return (
      <View className="super-tab-comp" style={wrapStyle}>
      </View>
    )
  }
}
