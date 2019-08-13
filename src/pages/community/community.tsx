import './community.scss'

import { ScrollView, Text, View } from '@tarojs/components';
import Taro, { Component, hideToast, startBluetoothDevicesDiscovery } from '@tarojs/taro';

import Market from '@/constants/market'
import Moments from './moments'
import SearchBar from '@/components/search-bar'
import Spin from '@/components/spin'
import TAB_LIST from '@/constants/community-tab'
import Tab from '@/components/tab'
import { device } from '@/utils/device'
import Topic from './topic'
import Talk from './talk'

// import { host } from '@/constants/host'



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
    const url = `https://v2.api.haodanku.com/selected_item/apikey/saul/min_id/${min_id}`  // 跨域使用
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
      scrollStyle.height = device.windowHeight - 55  // 必须大于底部栏目固定高度，才不会导致滑动障碍
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
        <Tab
          noScroll
          marginLeft={65}
          marginTop={20}
          itemWidth={80}
          current={this.state.current}
          list={TAB_LIST}
          onChange={(item) => {
            console.log('FIN tab item', item)
            this.setState({
              current: item.key
            })
          }}
        />
        {
          this.state.current === 0 &&
          <ScrollView
            scrollY
            style={scrollStyle}
            onScrollToLower={this.handleOnScrollToLower.bind(this)}
          >
            <Moments moments={this.state.moments} />
            <Spin isShow />
          </ScrollView>
        }
        {
          this.state.current === 1 &&
          <Topic />
        }
        {
          this.state.current === 2 &&
          <Talk />
        }

      </View>
    )
  }
}

export default Community