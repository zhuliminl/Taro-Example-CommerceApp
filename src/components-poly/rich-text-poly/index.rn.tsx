import { Image, Text, View } from 'react-native'
import React, { Component } from 'react'

import AutoHeightWebView from 'react-native-autoheight-webview'
import { device } from '@/utils/device'

interface RichTextPolyInterface {
  nodes: string;
}


export default class RichTextPoly extends Component<RichTextPolyInterface, {}> {
  state = {
    height: 0,
  }

  componentDidMount = () => {
  }

  render() {
    const { nodes = '' } = this.props
    // const nodes = '<h1>hello</h1>'
    return (
      <View
        style={{
          // width: device.windowWidth - 30,
          backgroundColor: '#FFF',
          overflow: 'hidden',
        }}
      >
        <AutoHeightWebView
          style={{
            width: device.windowWidth - 30
          }}
          // overScrollMode={'never'}
          scrollEnabled={false}
          customScript={`document.body.style.background = '#FFF';`}
          // either height or width updated will trigger this
          onSizeUpdated={(size) => {
            console.log('FIN richtext size', size)
          }}
          customStyle={`
            img {
              max-width: 100%;
            }
            .rich-img {
              max-width: 100%;
            }
          `}
          // source={{ html: `<p style="font-weight: 400;font-style: normal;font-size: 21px;line-height: 1.58;letter-spacing: -.003em;">Tags are great for describing the essence of your story in a single word or phrase, but stories are rarely about a single thing. <span style="background-color: transparent !important;background-image: linear-gradient(to bottom, rgba(146, 249, 190, 1), rgba(146, 249, 190, 1));">If I pen a story about moving across the country to start a new job in a car with my husband, two cats, a dog, and a tarantula, I wouldn’t only tag the piece with “moving”. I’d also use the tags “pets”, “marriage”, “career change”, and “travel tips”.</span></p>` }}
          source={{ html: putClassNameToImg(nodes) }}
          // disables zoom on ios (true by default)
          zoomable={false}
        />
      </View>
    )
  }
}

function putClassNameToImg(str) {
  return str.replace(/\<img /g, (i, m) => {
    return '<img class="rich-img" '
  }
  )
}