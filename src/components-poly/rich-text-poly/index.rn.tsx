
import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { WebView } from 'react-native-webview';
import { device } from '@/utils/device'

interface RichTextPolyInterface {
  nodes: string;
}


const BaseScript = `
    document.body.style.backgroundColor = 'red';
    height = document.body.scrollHeight;
    window.ReactNativeWebView.postMessage(JSON.stringify({
      type: 'setHeight',
      height: height,
    }));

    window.ReactNativeWebView.postMessage(JSON.stringify({
      type: 'pageMessage',
      data: {
        name: 'saul',
        age: 32,
      }
    }));


    (function() {
      var height = null;
      var ID = setInterval(function() { 
        // window.alert('xxxxx你好啦啦啦');

        if (document.body.scrollHeight != height) {
          height = document.body.scrollHeight;
          window.ReactNativeWebView.postMessage(JSON.stringify({
            type: 'setHeight',
            height: height,
          }));
        } else {
          clearInterval(ID)
          window.ReactNativeWebView.postMessage(JSON.stringify({
            type: 'timer',
            message: 'timerClear!',
          }));
        }
      }, 2000);

      // 注意取消定时器

    })();
    true; // note: this is required, or you'll sometimes get silent failures
  `;

export default class RichTextPoly extends Component<RichTextPolyInterface, {}> {
  state = {
    height: 0,
  }

  onMessage(event) {
    // console.log('FIN webview onMessage', event)
    try {
      const action = JSON.parse(event.nativeEvent.data)
      console.log('FIN action', action)
      if (action.type === 'setHeight' && action.height > 0) {
        this.setState({ height: action.height })
      }
    } catch (error) {
      console.log('FIN try get webview message', error)
      // pass
    }
  }

  componentDidMount = () => {
  }

  render() {
    const { nodes = '' } = this.props
    // const nodes = '<h1>hello</h1>'
    return (
      <View style={{
        width: device.windowWidth - 30,
        backgroundColor: 'green',
        // minHeight: 500,
        // height: this.state.height/2,
        // height: 1,
        height: 100/2,
      }}>
        <WebView
          source={{ html: nodes }}
          onError={syntheticEvent => {
            const { nativeEvent } = syntheticEvent;
            console.warn('WebView error: ', nativeEvent);
          }}
          onMessage={this.onMessage.bind(this)}

          // scalesPageToFit
          useWebKit
          javaScriptEnabled
          domStorageEnabled
          scrollEnabled={false}
          automaticallyAdjustContentInsets={false}
          injectedJavaScript={BaseScript}

          onLoad={syntheticEvent => {
            const { nativeEvent } = syntheticEvent;
            console.log('FIN webview onLoad')
            // this.url = nativeEvent.url;
          }}
        />
      </View>
    )
  }
}
