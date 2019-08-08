import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface PageNumberInterface {
  current: number;
  total: number;
}

export default class PageNumber extends Component<PageNumberInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="page-number-comp">
        <Text className='page-number-txt'>{this.props.current + 1}/{this.props.total}</Text>
      </View>
    )
  }
}
