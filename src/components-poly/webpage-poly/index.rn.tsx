
import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { WebView } from 'react-native-webview';


interface WebpagePolyInterface {
  url: string;
  frameStyle: any;
}

export default class WebpagePoly extends Component<WebpagePolyInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View
        style={this.props.frameStyle}
      >
        <WebView 
          source={{ uri: 'https://www.baidu.com' }} 
        />
      </View>
    )
  }
}
