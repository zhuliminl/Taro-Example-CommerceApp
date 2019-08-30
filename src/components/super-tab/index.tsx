import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface SuperTabInterface {
}

export default class SuperTab extends Component<SuperTabInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="super-tab-comp">
        <Text>
          super-tab
        </Text>
      </View>
    )
  }
}
