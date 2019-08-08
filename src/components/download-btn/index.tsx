import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Tab from '../tab';

interface DownloadBtnInterface {
  imgItem: any;
}

export default class DownloadBtn extends Component<DownloadBtnInterface, {}> {

  componentDidMount = () => {
    // this.testGetImageInfo()
    // this.testDownloadFile()
  }

  testGetImageInfo = async () => {
    const { imgItem = {} } = this.props
    console.log('FIN imgItem', imgItem)

    try {
      const foo = await Taro.getImageInfo({ src: imgItem })
      console.log('FIN 拿到图片宽高', foo)
    } catch (err) {
      console.log('FIN get image info error', err)
    }
  }

  testDownloadFile = async () => {
    const { imgItem = {} } = this.props
    try {
      const res = await Taro.downloadFile({ url: imgItem, })
      if (res.statusCode === 200) {
        const tempFilePath = res.tempFilePath
        Taro.showToast({
          title: tempFilePath
        })

        this.saveFile(tempFilePath)

      }

    } catch (err) {
      console.log('FIN download file fail', err)
    }
  }

  saveFile = async tempPath => {
    try {
      Taro.saveFile({
        tempFilePath: tempPath,
      })

    } catch (err) {
      console.log('FIN save file fail', err)
      Taro.showToast({ title: err.errMsg})
    }
  }

  handleOnDownLoadBtnClick = () => {
    Taro.showToast({ title: '正在下载' })

    this.testDownloadFile()

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
