
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
    // console.log('FIN url', url)
    // h5 端 IOS 滑动有问题，先不管
    return (
      <WebView
        src={url}
        // style={frameStyle}
        style={{
          ...frameStyle,
          top: 'unset'  // h5 端的定位通过 fix 来实现的，如果想要自定义位置，则需要 unset 原来的定位
        }}
      />
    )
  }
}
