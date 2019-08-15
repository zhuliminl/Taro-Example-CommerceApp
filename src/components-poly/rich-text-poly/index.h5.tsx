import '@/utils/commodity.css'
import './index.scss'

import Taro, { Component } from '@tarojs/taro'

// 肯定得重新定制

interface RichTextPolyInterface {
  frameStyle: any;
  nodes: string;
}

export default class RichTextPoly extends Component<RichTextPolyInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    const {frameStyle = {}, nodes = ''} = this.props
    // console.log('FIN nodes', nodes)
    return (
      <div
        className='rich-text-poly-wrap'
        style={frameStyle}
        dangerouslySetInnerHTML={createMarkup(nodes)}
      />
    )
  }
}

function createMarkup(str) {
  // return {__html: str}
  return {__html: putImgStyle(str)}
}

function putImgStyle(str) {
  return str.replace(/\<img /g, (i, m) => {
    // console.log('FIN xxx <img', i)
    return '<img class="rich-img" '
    // return i;
    }
  )
}