import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './search.scss'


export default class Search extends Component {
  config = {
    navigationBarTitleText: 'search',
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="search-page">
        <Text>
          search
        </Text>
      </View>
    )
  }
}
