
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, RichText } from '@tarojs/components'
import './index.scss'

interface RichTextPolyInterface {
  frameStyle: any;
  nodes: string;
}

export default class RichTextPoly extends Component<RichTextPolyInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    const { frameStyle = {}, nodes = '' } = this.props
    console.log('FIN nodes', nodes)

    return (
      <View className="rich-text-poly-comp">
        <Text>
          weapp rich-text-poly
        </Text>
        <RichText style={frameStyle} nodes={nodes} className='rech-text-poly-wrap' />
      </View>
    )
  }
}
