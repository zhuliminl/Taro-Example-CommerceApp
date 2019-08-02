import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './search_transition.scss'
import SearchBar from '@/components/search-bar'
import Tab from '@/components/tab'
import Market from '@/constants/market'


export default class Search extends Component {
  config = {
    navigationBarTitleText: 'search',
  }

  state = {
    current: 0
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
      </View>
    )
  }
}
