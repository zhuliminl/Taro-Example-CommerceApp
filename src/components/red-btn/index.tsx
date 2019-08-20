import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface RedBtnInterface {
  title: string;
  disable?: boolean;
  style?: any;
  onClick: () => void;
  active?: boolean;
}

export default class RedBtn extends Component<RedBtnInterface, {}> {
  componentDidMount = () => {
  }

  render() {
    const { style = {}, onClick, disable = false, active = true } = this.props
    if(!active) {
      style['backgroundColor'] = '#CCC'
    }
    return (
      <View
        className="red-btn-comp"
        style={{
          ...style,
          opacity: disable ? 0.5 : 1,
        }}
        onClick={() => {
          if(!disable) {
            onClick && onClick()
          }
        }}>
        <Text className='red-btn-title-txt'>
          {this.props.title}
        </Text>
      </View>
    )
  }
}
