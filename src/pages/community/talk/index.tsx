import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import './index.scss'
/* eslint-disable */
import SwiperPoly from '@/components-poly/swiper-poly/index'
/* eslint-enable */

import Spin from '@/components/spin'
import LargeTitle from '@/components/large-title'
import ThisWeek from './this-week'


/* eslint-disable */
const host = HOST
/* eslint-enable */


interface TalkInterface {
  scrollStyle: any;
}

export default class Talk extends Component<TalkInterface, {}> {
  state = {
    loading: true,
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
        loading: false,
      })
    } catch (err) {
      console.log('FIN get coupons err', err)
    }
  }

  render() {
    const talks = this.state.talks || {}
    const imglist = talks['topdata'] && talks['topdata'].map(item => {
      return {
        url: item['article_banner'],
        title: item['shorttitle'],
      }
    })

    const newData = talks['newdata'] || []

    return (
      <ScrollView
        scrollY
        style={this.props.scrollStyle}
      >
        <Spin isShow={this.state.loading} />
        <SwiperPoly
          imgList={imglist}
        />
        
        <LargeTitle title={'本周推荐'} />
        <ThisWeek talkList={newData} />


        <LargeTitle title={'大家都在逛'} />

      </ScrollView>
    )
  }
}
