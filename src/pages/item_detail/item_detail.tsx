import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './item_detail.scss'


export default class Item_detail extends Component {
  config = {
    navigationBarTitleText: 'item_detail',
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="item_detail-page">
        <Text>
          item_detail
        </Text>
      </View>
    )
  }
}
