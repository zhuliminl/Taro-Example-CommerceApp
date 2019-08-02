import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import {navigateTo} from '@/utils/navigation'

import icon_search_red from '@/assets/icon/search-red.png'


export default class SearchBarView extends Component {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="search-bar-view-comp"
        onClick={() => {
          navigateTo('search_transition')
        }}
      >
        <Image className='search-bar-view-img' src={icon_search_red} />
        <View className='search-bar-view-text-wrap'>
          <Text className='search-bar-view-title-thin'>复制标题,</Text>
          <Text className='search-bar-view-title-bold'>搜隐藏优惠券</Text>
          <Text className='search-bar-view-title-thin'>拿返利</Text>
        </View>
        <Text className='search-bar-view-red-btn'>搜券</Text>
      </View>
    )
  }
}
