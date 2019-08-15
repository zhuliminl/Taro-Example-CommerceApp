import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface ArticleBottomInterface {
  data: any;
}

export default class ArticleBottom extends Component<ArticleBottomInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="article-bottom-comp">
        <Text>
          文章底部
        </Text>
      </View>
    )
  }
}
