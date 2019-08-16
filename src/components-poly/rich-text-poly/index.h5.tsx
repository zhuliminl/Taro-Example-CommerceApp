import '@/utils/commodity.css'
import './index.scss'

import Taro, { Component } from '@tarojs/taro'

// 肯定得重新定制

interface RichTextPolyInterface {
  nodes: string;
}

export default class RichTextPoly extends Component<RichTextPolyInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    const { nodes = '' } = this.props
    return (
      <div
        className='rich-text-poly-wrap'
        style={{
          overflow: 'hidden',
        }}
        dangerouslySetInnerHTML={createMarkup(nodes)}
      />
    )
  }
}

function createMarkup(str) {
  // return {__html: str}
  return { __html: putClassNameToImg(str) }
}

function putClassNameToImg(str) {
  return str.replace(/\<img /g, (i, m) => {
    return '<img class="rich-img" '
  }
  )
}