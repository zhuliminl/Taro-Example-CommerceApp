import './img_gallery.scss'

import Taro, { Component } from '@tarojs/taro'
import { Text, View } from '@tarojs/components'

export default class ImgGallery extends Component {
  config = {
    navigationBarTitleText: 'img_gallery',
    disableScroll: true,
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="img_gallery-page">
        <Text>
          img_gallery
        </Text>
      </View>
    )
  }
}
