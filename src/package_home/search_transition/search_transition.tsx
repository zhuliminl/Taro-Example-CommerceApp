import './search_transition.scss'

import { Image, Text, View } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'

import LargetTitle from '@/components/large-title'
import Market from '@/constants/market'
import SearchBar from '@/components/search-bar'
import Tab from '@/components/tab'
import Tags from '@/components/tags'
import video_guide from '@/assets/image/video-guide.png'
import { appStore } from '../../_state/app.store';
import { appQuery } from '../../_state/app.query';
// import { AppService, appService } from '_state/app.service';

const TAG_LIST = [
  {
    key: 0,
    title: '洗衣液',
  },
  {
    key: 1,
    title: '儿童水杯',
  },
  {
    key: 2,
    title: '小白鞋',
  },
  {
    key: 3,
    title: '纸巾',
  },
  {
    key: 4,
    title: '仙女凉鞋',
  },
  {
    key: 5,
    title: '连衣裙',
  },
  {
    key: 6,
    title: '沐浴露',
  },
  {
    key: 7,
    title: '雨伞',
  },
  {
    key: 8,
    title: '百搭T恤',
  },
  {
    key: 9,
    title: '唇釉',
  },
  {
    key: 10,
    title: '儿童玩具',
  },
]

export default class Search extends Component {
  config = {
    navigationBarTitleText: 'search',
    disableScroll: true,
  }

  state = {
    current: 0,
    hotList: [],
  }

  componentDidMount = () => {
    this.fetchHotSearch()


    // console.log('FIN appStore', appStore.searchs)
    // console.log('FIN appQuery', appQuery.searchs.selectAll)


  }


  fetchHotSearch = async () => {
    const url = 'http://v2.api.haodanku.com/hot_key/apikey/saul/back/15'
    try {
      const resp = await Taro.request({ url })
      let data = resp && resp.data && resp.data.data || []

      let hotList = data.map((item, i) => ({
        key: i,
        title: item.keyword
      }))

      this.setState({
        hotList,
      })
    } catch (err) {
      console.log('FIN get hostList err', err)
    }

  }

  handleOnVideoGuideClick = () => {
    console.log('FIN 去h5')
  }

  handleOnHistoryClear = () => {
    console.log('FIN 清空历史')
  }

  render() {
    return (
      <View className="search-transition-page">
        <SearchBar
          placeholder={'复制标题，搜隐藏优惠券拿返利'}
          onSearch={(title) => {
            console.log('FIN 就搜你了', title)
          }}
        />

        <Tab
          noScroll
          marginLeft={65}
          itemWidth={80}
          current={this.state.current}
          list={Market}
          onChange={(item) => {
            console.log('FIN tab item', item)
            this.setState({
              current: item.key
            })
          }}
        />

        <Image className='video-guide' src={video_guide} onClick={this.handleOnVideoGuideClick.bind(this)} />

        <LargetTitle title='热门搜索' />
        <Tags tagList={this.state.hotList} />

        <LargetTitle title='历史记录'>
          <View className='history-clear-btn-wrap' onClick={this.handleOnHistoryClear.bind(this)}>
            <Text className='history-clear-btn-txt'>清空</Text>
          </View>
        </LargetTitle>
        <Tags tagList={TAG_LIST} />

      </View>
    )
  }
}
