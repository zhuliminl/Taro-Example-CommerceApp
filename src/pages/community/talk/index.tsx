import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
/* eslint-disable */
import SwiperPoly from '@/components-poly/swiper-poly/index'
/* eslint-enable */


/* eslint-disable */
const host = HOST
/* eslint-enable */


interface TalkInterface {
}

export default class Talk extends Component<TalkInterface, {}> {
  state = {
    isLoading: true,
    talks: {},
  }

  componentDidMount = async () => {

    // const url = `https://v2.api.haodanku.com/talent_info/apikey/saul/talentcat/1`
    const url = `${host}/talent_info/apikey/saul/talentcat/1`
    try {
      const resp = await Taro.request({ url })
      const talks = resp && resp.data && resp.data.data
      // console.log('FIN talks', talks)
      this.setState({
        talks,
        isLoading: false,
      })
    } catch (err) {
      console.log('FIN get coupons err', err)
    }
  }

  render() {
    const talks = this.state.talks || {}
    const imglist = talks['topdata'] && talks['topdata'].map(item => item['article_banner'])
    // console.log('imgList', imglist)
    
    return (
      <View className="talk-comp">
        <SwiperPoly 
          imgList={imglist}
        />
      </View>
    )
  }
}
