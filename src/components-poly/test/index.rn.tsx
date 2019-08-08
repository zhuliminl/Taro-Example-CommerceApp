
import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import Modal from "react-native-modal"

interface TestInterface {
}

export default class Test extends Component<TestInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View>
        <Modal
          isVisible
        >
          <View style={{ flex: 1 }}>
            <Text>I am the modal content!</Text>
          </View>
        </Modal>
      </View>
    )
  }
}
