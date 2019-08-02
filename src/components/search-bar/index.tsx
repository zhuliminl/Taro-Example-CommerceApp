import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

import icon_search_red from '@/assets/icon/search-red.png'
import icon_back from '@/assets/icon/back.png'

interface SearchBarInterface {
  placeholder: string;
  onSearch: (any) => void;
}


export default class SearchBar extends Component<SearchBarInterface, {}> {
  componentDidMount = () => {
  }

  render() {
    return (
      <View className="search-bar-comp">
        <Image className='search-bar-back-img' src={icon_back}/>
        <View className='search-bar-wrap'>
          <Image className='search-bar-img' src={icon_search_red} />
          <Text className='search-bar-title-thin'>{this.props.placeholder}</Text>
          <Text className='search-bar-red-btn'>搜券</Text>
        </View>
      </View>
    )
  }
}
