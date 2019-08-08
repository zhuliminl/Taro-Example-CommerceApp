import {View, Text} from 'react-native'
import React, {Component} from 'react'

export default class Test extends Component {
  state = {
    current: 0
  }

  render() {
    return (
      <View
        style={{
          marginTop: 100,
        }}
      >
          <Text>RN {this.props.title}</Text>
      </View>
    )
  }
}
