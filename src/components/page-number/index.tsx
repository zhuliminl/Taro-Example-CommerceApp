import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface PageNumberInterface {
  current: string | number;
  total: number;
}

export default class PageNumber extends Component<PageNumberInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    const {current = 0, total = 0} = this.props
    return (
      <View className="page-number-comp">
        <Text className='page-number-txt'>{parseInt(current.toString()) + 1}/{total}</Text>
      </View>
    )
  }
}
