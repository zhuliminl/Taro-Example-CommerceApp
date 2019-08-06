import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import bg_devide from '@/assets/image/bg_devide.png'

interface CenterTitleInterface {
  title: string;
}

export default class CenterTitle extends Component<CenterTitleInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="center-title-comp">
        <Image className='center-title-devide-img' src={bg_devide} />
        <Text className='center-title-txt'>{this.props.title}</Text>
        <Image className='center-title-devide-img' src={bg_devide} />
      </View>
    )
  }
}
