import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface TagItemInterface {
  key: number;
  title: string;
}

interface TagsInterface {
  tagList: TagItemInterface[];
}

export default class Tags extends Component<TagsInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="tags-comp">
        {
          this.props.tagList.map(item => {
            return (
              <View key={item.key} className='tag-item-wrap'>
                <Text className='tag-item-txt'>{item.title}</Text>
              </View>
            )
          })
        }
      </View>
    )
  }
}
