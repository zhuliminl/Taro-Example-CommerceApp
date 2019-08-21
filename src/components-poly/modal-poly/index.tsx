
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
import './index.scss'

interface ModalPolyInterface {
}

export default class ModalPoly extends Component<ModalPolyInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="modal-poly-comp">
        <AtModal isOpened>
          <AtModalHeader>标题</AtModalHeader>
          <AtModalContent>
            这里是正文内容，欢迎加入京东凹凸实验室
            这里是正文内容，欢迎加入京东凹凸实验室
            这里是正文内容，欢迎加入京东凹凸实验室
          </AtModalContent>
          {/* <AtModalAction> <Button>取消</Button> <Button>确定</Button> </AtModalAction> */}
        </AtModal>
        <Text>
          h55555 and wechat
        </Text>
      </View>
    )
  }
}
