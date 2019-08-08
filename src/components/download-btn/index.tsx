import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface DownloadBtnInterface {
}

export default class DownloadBtn extends Component<DownloadBtnInterface,{}> {

  componentDidMount = () => {
  }

  handleOnDownLoadBtnClick = () => {
    Taro.showToast({title: '正在下载'})
  }

  render() {
    return (
      <View className="download-btn-comp" onClick={this.handleOnDownLoadBtnClick.bind(this)}>
        <Text className='download-btn-txt'>
          下载原图
        </Text>
      </View>
    )
  }
}
