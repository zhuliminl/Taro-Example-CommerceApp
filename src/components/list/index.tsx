import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './index.scss'
import {device} from '@/utils/device'

interface ListInterface {
  title: string;
  desc: string;
  hasMarginBottom: boolean;
  callback: () => void;
  renderAsideEl: JSX.Element;
}

interface WrapperStyleInterface {
  marginBottom?: any;
  paddingTop?: number;
  paddingBottom?: number;
}


class List extends Component <ListInterface, {}> {
  static defaultProps = {
    desc: '',
    hasMarginBottom: false,
    renderAsideEl: null,
  }

  render () {
    let wrapperStyle : WrapperStyleInterface = {}
    if(this.props.hasMarginBottom) {
      wrapperStyle.marginBottom = Taro.pxTransform(20)
    }

    if(device.isIOS()) {
      wrapperStyle.paddingTop = 18
      wrapperStyle.paddingBottom =18
    }

    return (
      <View 
        className='list-wrapper'
        style={wrapperStyle}
        onClick={() => {
          this.props.callback && this.props.callback()
        }}
      >
        <Text className='list-title'>{this.props.title}</Text>
        <Text className='list-desc'>{this.props.desc}</Text>
        {this.props.renderAsideEl}
        <Image 
          className='list-arrow-img'
          src={require('./assets/arrow_grey.png')}
        />
      </View>
    )
  }
}

export default List