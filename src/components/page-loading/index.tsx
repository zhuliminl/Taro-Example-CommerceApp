import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Icon } from '@tarojs/components'
import './index.scss'
import gif_loading from '@/assets/loading.gif'
import { device } from '@/utils/device'

interface PageLoadingInterface {
}

export default class PageLoading extends Component<PageLoadingInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    let pageStyle: any = {
      width: device.windowWidth,
      height: device.windowHeight,
      backgroundColor: '#FFF',
    }

    if (device.isWeChat()) {
      pageStyle.width = pageStyle.width + 'px'
      pageStyle.height = pageStyle.height + 'px'
    }
    return (
      <View className="page-loading-comp"
        style={pageStyle}
      >
        <Image className='page-loading-gif' src={gif_loading} />
        <Text className='page-loading-txt'>正在加载......</Text>
      </View>
    )
  }
}
