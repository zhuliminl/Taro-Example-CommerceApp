
import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { WebView } from 'react-native-webview';


interface WebpagePolyInterface {
  url: string;
  frameStyle: any;
}

export default class WebpagePoly extends Component<WebpagePolyInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    const { url = '', frameStyle = {} } = this.props
    return (
      <View
        style={frameStyle}
      >
        <WebView
          source={{ uri: url }}
        />
      </View>
    )
  }
}
