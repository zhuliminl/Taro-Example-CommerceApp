import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface ArticleInfoInterface {
  data: any;
}

export default class ArticleInfo extends Component<ArticleInfoInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    const {data = {}} = this.props
    return (
      <View className="article-info-comp">
        <Text>
          article-info
        </Text>
      </View>
    )
  }
}
