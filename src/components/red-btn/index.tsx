import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface RedBtnInterface {
  title: string;
  style?: any;
  onClick: () => void;
}

export default class RedBtn extends Component<RedBtnInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    const { style = {}, onClick } = this.props
    return (
      <View className="red-btn-comp" style={style} onClick={() => {
        onClick && onClick()
      }}>
        <Text className='red-btn-title-txt'>
          {this.props.title}
        </Text>
      </View>
    )
  }
}
