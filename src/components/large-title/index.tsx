import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface LargeTitleInterface {
  title: string;
  aside?: JSX.Element;
}

export default class LargeTitle extends Component<LargeTitleInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="large-title-comp">
        <Text className='large-title-txt'>
          {this.props.title}
        </Text>
        {this.props.children}
      </View>
    )
  }
}
