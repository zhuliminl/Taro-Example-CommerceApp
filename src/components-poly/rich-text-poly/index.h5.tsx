import Taro, { Component } from '@tarojs/taro'
import '@/utils/commodity.css'   // 肯定得重新定制
import './index.scss'

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
        className='rech-text-poly-wrap'
        style={frameStyle}
        dangerouslySetInnerHTML={createMarkup(nodes)}
      />
    )
  }
}

function createMarkup(str) {
  return {__html: str}
}
