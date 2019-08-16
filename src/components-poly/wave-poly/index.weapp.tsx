
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

interface WavePolyInterface {
}

export default class WavePoly extends Component<WavePolyInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="wave-poly-comp">
        <Text>
        weapp wave-poly
        </Text>
      </View>
    )
  }
}
