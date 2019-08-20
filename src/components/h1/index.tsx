import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import classNames from 'classnames'

interface H1Interface {
  style?: any;
  title: string;
  desc?: string;
}

export default class H1 extends Component<H1Interface, {}> {

  componentDidMount = () => {
  }

  render() {
    const { style = {}, title = 'xxx', desc = '' } = this.props
    return (
      <View
        className="h1-comp"
        style={{
          ...style,
        }}
      >
        <Text className={classNames('h1-title-txt')}>{title}</Text>
        {desc && <Text className='h1-desc-txt'>{desc}</Text>}
      </View>
    )
  }
}
