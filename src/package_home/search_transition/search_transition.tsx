import './search_transition.scss'

import { Image, Text, View } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'

import LargetTitle from '@/components/large-title'
import Market from '@/constants/market'
import SearchBar from '@/components/search-bar'
import Tab from '@/components/tab'
import Tags from '@/components/tags'
import video_guide from '@/assets/image/video-guide.png'
import { appQuery } from '@/_state/app.query'
import { appService } from '@/_state/app.service';
import { navigateTo } from '@/utils/navigation'

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
    historys: [],
  }

  componentDidMount = () => {
    this.setHotSearch()
    this.setHistory()
  }

  sub1: any;
  setHotSearch = () => {
    appService.getHotSearch()
    this.sub1 = appQuery.searchs.select('hotList').subscribe(hotList => {
      this.setState({
        hotList,
      })
    })
  }

  sub2: any;
  setHistory = () => {
    this.sub2 = appQuery.searchs.select('historys').subscribe(historys => {
      this.setState({
        historys: historys.map((item, i) => ({
          title: item,
          key: i,
        }))
      })
    })
  }

  componentWillUnmount = () => {
    this.sub1 && this.sub1.unsubscribe()
    this.sub2 && this.sub2.unsubscribe()
  }


  handleOnVideoGuideClick = () => {
  }

  handleOnHistoryClear = () => {
    appService.clearHistory()
  }

  handleOnTagClick = title => {
    if (title) {
      navigateTo('search', { keyword: title })
    }
  }

  render() {
    return (
      <View className="search-transition-page">
        <SearchBar
          placeholder={'复制标题，搜隐藏优惠券领优惠券'}
          onSearch={(title) => {
            if (title) {
              appService.pushHistory(title)
            }
          }}
        />

        {/* <Tab
          noScroll
          marginLeft={65}
          itemWidth={80}
          current={this.state.current}
          list={Market}
          onChange={(item) => {
            // console.log('FIN tab item', item)
            this.setState({
              current: item.key
            })
          }}
        /> */}

        <Image className='video-guide' src={video_guide} onClick={this.handleOnVideoGuideClick.bind(this)} />

        <LargetTitle title='热门搜索' />
        <Tags
          tagList={this.state.hotList}
          onTagClick={(title) => {
            this.handleOnTagClick(title)
            appService.pushHistory(title)
          }}
        />

        <LargetTitle title='历史记录'>
          <View className='history-clear-btn-wrap' onClick={this.handleOnHistoryClear.bind(this)}>
            <Text className='history-clear-btn-txt'>清空</Text>
          </View>
        </LargetTitle>
        <Tags
          tagList={this.state.historys}
          onTagClick={title => {
            this.handleOnTagClick(title)
          }}
        />

      </View>
    )
  }
}
