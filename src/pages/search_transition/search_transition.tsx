import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './search_transition.scss'
import SearchBar from '@/components/search-bar'
import LargetTitle from '@/components/large-title'
import Tab from '@/components/tab'
import Market from '@/constants/market'

import video_guide from '@/assets/image/video-guide.png'


export default class Search extends Component {
  config = {
    navigationBarTitleText: 'search',
  }

  state = {
    current: 0
  }

  componentDidMount = () => {
  }

  handleOnVideoGuideClick = () => {
    console.log('FIN 去h5')
  }

  handleOnHistoryClear = () => {
    console.log('FIN 清空历史')
  }

  render() {
    return (
      <View className="search-page">
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

        <Image className='video-guide'src={video_guide} onClick={this.handleOnVideoGuideClick.bind(this)}/>
        <LargetTitle title='热门搜索'/>
        <LargetTitle title='历史记录'>
          <View className='history-clear-btn-wrap' onClick={this.handleOnHistoryClear.bind(this)}>
            <Text className='history-clear-btn-txt'>清空</Text>
          </View>
        </LargetTitle>


      </View>
    )
  }
}
