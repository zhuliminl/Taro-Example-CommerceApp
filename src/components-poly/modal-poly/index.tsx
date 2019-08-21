
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
        <AtModal
          isOpened
        >
          <View style={{
            backgroundColor: '#000',
            height: '300px',
            width: '400px',
          }}>
            <Text>xxxxxxxxxxx</Text>
          </View>
        </AtModal>
      </View>
    )
  }
}
