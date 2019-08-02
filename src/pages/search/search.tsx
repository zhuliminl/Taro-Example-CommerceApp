import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './search.scss'
import SearchBar from '@/components/search-bar'


export default class Search extends Component {
  config = {
    navigationBarTitleText: 'search',
  }

  componentDidMount = () => {
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
      </View>
    )
  }
}
