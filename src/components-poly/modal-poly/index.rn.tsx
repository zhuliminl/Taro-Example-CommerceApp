
import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import Modal from 'react-native-modalbox';

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
    const { height, width, isShow, borderRadius } = this.props
    return (
      <View>
        <Modal
          backButtonClose
          coverScreen
          isOpen={isShow}
          style={{
            height,
            width,
            backgroundColor: 'green',
            borderRadius,
            // justifyContent: 'center',
            // alignItems: 'center'
          }}
        // swipeToClose={}
        // onClosed={this.onClose}
        // onOpened={this.onOpen}
        // onClosingState={this.onClosingState}
        >
          {this.props.children}
        </Modal>
      </View>
    )
  }
}
