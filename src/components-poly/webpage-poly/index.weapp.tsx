import { Image, Text, View, WebView } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'

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
      <View className="webpage-poly-comp">
        <WebView
          src={url}
          // style={frameStyle}
          style={{
            width: 300,
            height: 300,
          }}
        />
      </View>
    )
  }
}
