import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './index.scss'
import console = require('console');

interface ListInterface {
  title: string;
  desc: string;
  hasMarginBottom: boolean;
  callback: () => void;
  renderAsideEl: JSX.Element;
}


class List extends Component <ListInterface, {}> {
  static defaultProps = {
    desc: '',
    hasMarginBottom: false,
    renderAsideEl: null,
  }

  componentDidMount = () => {
    console.log('FIN list props', this.props)
  }

  render () {
    return (
      <View 
        className='list-wrapper'
        style={this.props.hasMarginBottom ? { marginBottom: 20}: {}}
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