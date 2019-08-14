
import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { WebView } from 'react-native-webview';


interface WebpagePolyInterface {
  url: string;
}

export default class WebpagePoly extends Component<WebpagePolyInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <WebView source={{ uri: 'https://facebook.github.io/react-native/' }} />
    )
  }
}
