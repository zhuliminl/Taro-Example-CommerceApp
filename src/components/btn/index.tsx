import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss'

interface BtnInterface {
  title: string;
  callback: () => void;
}


class Btn extends Component<BtnInterface, {}> {
  static defaultProps = {
    callback: () => null
  }

  render() {
    return (
      <View
        className='btn-wrapper'
        onClick={() => {
          this.props.callback && this.props.callback()
        }}
      >
        <Text className='btn-title-txt'>{this.props.title}</Text>
      </View>
    )
  }
}

export default Btn