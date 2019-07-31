import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './add_teacher.scss'


export default class Add_teacher extends Component {
  config = {
    navigationBarTitleText: 'add_teacher',
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="add_teacher-page">
        <Text>
          add_teacher
        </Text>
      </View>
    )
  }
}
