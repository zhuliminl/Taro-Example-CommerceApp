import './index.scss'

import { Image, RichText, Text, View } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'

interface RichTextPolyInterface {
  frameStyle: any;
  nodes: string;
}

export default class RichTextPoly extends Component<RichTextPolyInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    const { frameStyle = {}, nodes = '' } = this.props
    // console.log('FIN nodes', nodes)
    console.log('FIN withStyle img', putImgStyle(nodes))

    return (
      <View className="rich-text-poly-comp">
        <Text>
          weapp rich-text-poly
        </Text>
        {/* <RichText style={frameStyle} nodes={nodes} className='rich-text-poly-wrap' /> */}
        <RichText style={frameStyle} nodes={putImgStyle(nodes)} className='rich-text-poly-wrap' />
      </View>
    )
  }
}


function putImgStyle(str) {
  return str.replace(/\<img /g, (i, m) => {
    // console.log('FIN xxx <img', i)
    return '<img class="rich-img" '
    // return i;
    }
  )
}