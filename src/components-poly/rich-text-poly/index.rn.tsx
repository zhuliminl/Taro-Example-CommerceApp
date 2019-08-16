
import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { WebView } from 'react-native-webview';
import {device} from '@/utils/device'

interface RichTextPolyInterface {
  nodes: string;
}

export default class RichTextPoly extends Component<RichTextPolyInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    const { nodes = '' } = this.props
    return (
      <View style={{
        width: device.windowWidth,
        backgroundColor: '#EEE',
        minHeight: 100,
        flex: 1,
      }}>
        <WebView 
          source={{ html: nodes }} 
          onError={syntheticEvent => {
            const { nativeEvent } = syntheticEvent;
            console.warn('WebView error: ', nativeEvent);
          }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          />
      </View>
    )
  }
}
