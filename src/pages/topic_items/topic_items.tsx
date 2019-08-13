import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import './topic_items.scss'
import { parseUrlParams } from '@/utils/navigation'
import Header from '@/components/header'
import Spin from '@/components/spin'
import { device } from '@/utils/device'

import ItemListB from '@/components/item-list-b'


export default class TopicItems extends Component {
  config = {
    navigationBarTitleText: 'topic_items',
    disableScroll: true,
  }

  state = {
    topicName: '',
    isLoading: true,
    coupons: [],
  }

  componentDidMount = async () => {
    const params = parseUrlParams(this.$router.params)
    const topicid = params.topicid || ''
    const topicName = params.topicName || ''
    this.setState({
      topicName,
    })

    const url = `https://v2.api.haodanku.com/get_subject_item/apikey/saul/id/${topicid}`
    try {
      const resp = await Taro.request({ url })
      const coupons = resp && resp.data && resp.data.data
      this.setState({
        coupons,
        isLoading: false,
      })
    } catch (err) {
      console.log('FIN get coupons err', err)
    }
  }

  render() {
    let scrollHeight: any = device.windowHeight
    let blankHeight: any = 50
    if (device.isIOS()) {
      blankHeight = 50 + 20
      scrollHeight = device.windowHeight - 70
    }

    if (device.isH5()) {
      scrollHeight = device.windowHeight - 50
    }

    if (device.isWeChat()) {
      blankHeight = (50 + 20) + 'px'
      scrollHeight = (device.windowHeight - 10) + 'px'   // 微信很奇怪，
    }

    if (device.isAndroid()) {
      blankHeight = 48
      scrollHeight = device.windowHeight - 48 - 24   
    }


    return (
      <View className="topic_items-page">
        <Header title={this.state.topicName} />
        <View style={{ height: blankHeight, backgroundColor: '#FFF' }} ></View>

        <ScrollView
          scrollY
          style={{
            height: scrollHeight,
          }}
        >
          <Spin isShow={this.state.isLoading} />
          <ItemListB
            list={this.state.coupons || []}
          />
        </ScrollView>

      </View>
    )
  }
}
