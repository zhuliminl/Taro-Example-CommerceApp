import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'


export default class Test extends Component {
  state = {
    current: 0
  }

  render() {
    return (
      <View
        className="test-comp"
        style={{
          marginTop: 100,
        }}
      >
          <Text>{this.props.title}wwwwwwwwwwwwwwwwwwwwww</Text>
      </View>
    )
  }
}
