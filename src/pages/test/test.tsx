import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './test.scss'
import Test from '@/components/test'


export default class TestPage extends Component {
  config = {
    navigationBarTitleText: 'test',
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="test-page"
        style={{
          backgroundColor: '#999',
        }}
      >
        <Test />
      </View>
    )
  }
}
