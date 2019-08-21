
import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import Modal from 'react-native-modalbox';

interface ModalPolyInterface {
  isShow: boolean;
  width: number;
  height: number;
  borderRadius: number;
}

export default class ModalPoly extends Component<ModalPolyInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    const { height, width, isShow, borderRadius } = this.props
    return (
      <View>
        <Modal
          coverScreen
          isOpen={isShow}
          style={{
            height,
            width,
            backgroundColor: '#000',
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
