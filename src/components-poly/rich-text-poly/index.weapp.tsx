import './index.scss'
import '@/utils/commodity.css'

import { Image, RichText, Text, View } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'

interface RichTextPolyInterface {
  nodes: string;
}

export default class RichTextPoly extends Component<RichTextPolyInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    const { nodes = '' } = this.props
    return (
      <View className="rich-text-poly-comp">
        {/* <RichText nodes={nodes} className='rich-text-poly-wrap' /> */}
        <RichText nodes={putClassNameToImg(nodes)} className='rich-text-poly-wrap' />
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
