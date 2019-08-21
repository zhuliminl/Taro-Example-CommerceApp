
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
import './index.scss'
import { device } from '@/utils/device'

interface ModalPolyInterface {
  isShow: boolean;
  width: number;
  height: number;
  // onCancel: () => void;
  // onConfirm: () => void;
}

export default class ModalPoly extends Component<ModalPolyInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    let wrapStyle: any = {
      width: this.props.width,
      height: this.props.height,
    }

    if (device.isWeChat()) {
      wrapStyle.width += 'px'
      wrapStyle.height += 'px'
    }

    return (
      <View className="modal-poly-comp">
        <AtModal
          isOpened={this.props.isShow}
          // onCancel={this.props.onCancel}
          // onConfirm={this.props.onConfirm}
        >
          <View style={{
            ...wrapStyle,
            backgroundColor: '#000',
          }}>
            {this.props.children}
          </View>
        </AtModal>
      </View>
    )
  }
}
