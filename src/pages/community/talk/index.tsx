import './index.scss';

import Taro, { Component } from '@tarojs/taro';

import HangAround from './hang-around';
import LargeTitle from '@/components/large-title';
import { MyTalkLoader } from '@/components-poly/skeleton-poly';
import { ScrollView } from '@tarojs/components';
import Spin from '@/components/spin';
import SwiperPoly from '@/components-poly/swiper-poly';
import ThisWeek from './this-week';

/* eslint:disable */
const host = HOST
/* eslint:enable */


interface TalkInterface {
  scrollStyle: any;
}

export default class Talk extends Component<TalkInterface, {}> {
  state = {
    loading: true,
    talks: {},
  }

  componentDidMount = async () => {
    console.log('FIN talk did')


    // const url = `https://v2.api.haodanku.com/talent_info/apikey/saul/talentcat/1`
    const url = `${host}/talent_info/apikey/saul/talentcat/0`
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
        type: 'image',             // 使用 mp-colorui 必须要声明好 item 类型
      }
    })

    const newData = talks['newdata'] || []

    const clickData = talks['clickdata'] || []
    let talent_Category = talks['talent_Category'] || {}
    talent_Category['0'] = "全部"
    const cats = Object.keys(talent_Category).map((item, i) => {
      return {
        key: i,
        title: talent_Category[item]
      }
    })

    if (this.state.loading) {
    // if (true) {
      return <MyTalkLoader />
    }

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
        <HangAround talkList={clickData} cats={cats} />

      </ScrollView>
    )
  }
}