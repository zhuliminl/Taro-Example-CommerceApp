
import Taro, { Component } from '@tarojs/taro'
import { WebView, View } from '@tarojs/components'


interface WebpagePolyInterface {
  url: string;
  frameStyle: any;
}

export default class WebpagePoly extends Component<WebpagePolyInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    const { url = '', frameStyle = {} } = this.props
    console.log('FIN url', url)
    // h5 端 IOS 滑动有问题，先不管
    return (
      <WebView
        src={url}
        // style={frameStyle}
        style={{
          width: 300,
          height: 300,
        }}
      />
    )
  }
}
