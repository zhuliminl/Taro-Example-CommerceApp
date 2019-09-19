import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import { device } from '@/utils/device'

interface ItemDetailInterface {
  imgList: any[];
}

interface ImgAutoInterface {
  src: string;
}

const initH = 600
class ImgAuto extends Component<ImgAutoInterface, {}> {
  state = {
    imgH: initH,
    imgW: device.windowWidth,
  }

  componentDidMount = () => {

  }

  render() {
    const { src = '' } = this.props
    return (
      <Image
        src={src}
        onLoad={e => {
          const { detail = {} } = e
          this.setState({
            imgH: detail.height || initH,
            imgW: detail.width || device.windowWidth,
          })

        }}
        style={{
          // width: this.state.imgW,
          width: device.windowWidth,
          height: this.state.imgH * device.windowWidth / this.state.imgW,
        }}
      />
    )
  }
}

export default class ItemDetail extends Component<ItemDetailInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    const { imgList = [] } = this.props
    console.log('FIN imgList', imgList)
    return (
      <View className="item-detail-comp">
        {
          imgList && imgList.map((src, i) => {
            return (
              <ImgAuto key={i} src={src} />
            )
          })
        }
      </View>
    )
  }
}
