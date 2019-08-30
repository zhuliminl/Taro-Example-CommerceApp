
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
import './index'
import { device } from '@/utils/device'

interface ModalPolyInterface {
  isShow: boolean;
  width: number | string;
  height: number | string;
  borderRadius: number | string;
  // onCancel: () => void;
  // onConfirm: () => void;
}

export default class ModalPoly extends Component<ModalPolyInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    // 注意：官方 UI 暂时不支持自定义宽度和圆角

    let wrapStyle: any = {
      // width: this.props.width,
      height: this.props.height,
      // borderRadius: this.props.borderRadius,
    }

    if (device.isWeChat()) {
      // wrapStyle.width += 'px'
      wrapStyle.height += 'px'
      // wrapStyle.borderRadius += 'px'
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
            overflow: 'hidden',
          }}>
            {this.props.children}
          </View>
        </AtModal>
      </View>
    )
  }
}
