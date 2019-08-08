import { ScrollView, Text, View } from '@tarojs/components';
import Taro, { Component, hideToast } from '@tarojs/taro';

import Moments from './moments'
import Spin from '@/components/spin'
import { device } from '@/utils/device'
import { host } from '@/constants/host'

const TAB_LIST = [
  {
    key: 0,
    title: '好省精选',
  },
  {
    key: 1,
    title: '营销素材',
  },
  {
    key: 2,
    title: '好省学院',
  },
]

class Community extends Component {
  config = {
    navigationBarTitleText: '好省圈',
    disableScroll: true,
  }

  state = {
    loading: false,
    current: 0,
    min_id: 1,
    moments: [],
  }

  componentDidMount = () => {
    this.fetchMoments()
  }

  fetchMoments = async () => {
    const { min_id } = this.state
    const url = `${host}/selected_item/apikey/saul/min_id/${min_id}`  // 跨域使用
    // const url = `https://v2.api.haodanku.com/selected_item/apikey/saul/min_id/1`
    try {
      const resp = await Taro.request({ url })
      const moments = resp && resp.data && resp.data.data
      const min_id = resp && resp.data['min_id']
      const preState = this.state

      this.setState({
        moments: preState.moments.concat(moments),
        min_id,
      })

    } catch (err) {
      console.log('FIN get moments err', err)
    }
  }

  handleOnScrollToLower = () => {
    this.fetchMoments()
  }

  render() {
    let scrollStyle: any = {}
    if (device.isH5()) {
      scrollStyle.height = device.windowHeight - 55   // 必须大于底部栏目固定高度，才不会导致滑动障碍
    }

    if (device.isIOS()) {
      scrollStyle.height = device.windowHeight - 49.5   // 同上，需要根据底部栏目的实际高度来设置滚动高度
    }

    if (device.isAndroid()) {
      scrollStyle.height = device.windowHeight - device.info.statusBarHeight - 50.5   // 同上，需要根据底部栏目的实际高度来设置滚动高度
    }

    if (device.isWeChat()) {
      scrollStyle.height = device.windowHeight + 'px'   // wechat ide 中没问题
      scrollStyle.height = Taro.getSystemInfoSync().screenHeight + 'px'   // 手机上还是超出，需要集中处理这个问题 
    }

    return (
      <View className='community-page'>
        <ScrollView
          scrollY
          style={scrollStyle}
          onScrollToLower={this.handleOnScrollToLower.bind(this)}
        >
          <Moments moments={this.state.moments} />
          <Spin isShow />
        </ScrollView>
      </View>
    )
  }
}

export default Community