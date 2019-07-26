import Taro, { Component } from '@tarojs/taro'
import { WebView } from 'react-native'


interface WebViewRnInterface {
  src: any,
}

export default class WebViewRN extends Component<WebViewRnInterface, {}> {
  render() {
    return (
      <WebView
        style={{ height: '100%' }}
        originWhitelist={['*']}
        source={{ uri: this.props.src }}
      />
    )
  }
}