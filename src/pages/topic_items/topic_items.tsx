import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './topic_items.scss'
import {parseUrlParams} from '@/utils/navigation'


export default class TopicItems extends Component {
  config = {
    navigationBarTitleText: 'topic_items',
    disableScroll: true,
  }

  state = {
    topicid: ''
  }

  componentDidMount = () => {
    const params = parseUrlParams(this.$router.params)
    const topicid = params.topicid
    this.setState({
      topicid,
    })

    console.log('FIN  topicid', topicid)
    // const url = `https://v2.api.haodanku.com/item_detail/apikey/saul/itemid/${itemid}`
    // try {
    //   const resp = await Taro.request({ url })
    //   const item = resp && resp.data && resp.data.data
    //   this.setState({
    //     item,
    //     isLoading: false,
    //   })
    // } catch (err) {
    //   console.log('FIN get coupon err', err)
    // }
  }

  render() {
    return (
      <View className="topic_items-page">
        <Text>
          {this.state.topicid}
        </Text>
      </View>
    )
  }
}
