import './index.scss';

import Taro, { Component } from '@tarojs/taro';

import HangAround from './hang-around';
import LargeTitle from '@/components/large-title';
import { MyTalkLoader } from '@/components-poly/skeleton-poly';
import { ScrollView } from '@tarojs/components';
import Spin from '@/components/spin';
import SwiperPoly from '@/components-poly/swiper-poly';
import ThisWeek from './this-week';
import { talksService } from './_state/talk.service';


interface TalkInterface {
  scrollStyle: any;
  talks: any;
  firstLoading: boolean;
  loading: boolean;
}

export default class Talk extends Component<TalkInterface, {}> {

  componentDidMount = () => {
    talksService.get()
  }

  render() {
    const { talks = {}, firstLoading = true, loading = true } = this.props
    const imglist = talks['topdata'] && talks['topdata'].map(item => {
      return {
        id: item['id'],
        url: item['article_banner'],
        title: item['shorttitle'],
        type: 'image',             // 使用 mp-colorui 必须要声明好 item 类型
      }
    })

    const newData = talks['newdata'] || []

    const clickData = talks['clickdata'] || []
    // let talent_Category = talks['talent_Category'] || {}
    let talent_Category = Object.assign({}, talks['talent_Category'])
    talent_Category['0'] = "全部"
    const cats = Object.keys(talent_Category).map((item, i) => {
      return {
        key: i,
        title: talent_Category[item]
      }
    })

    if (firstLoading) {
      // if (true) {
      return <MyTalkLoader />
    }

    return (
      <ScrollView
        scrollY
        style={this.props.scrollStyle}
      >
        {/* <Spin isShow={loading} /> */}

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