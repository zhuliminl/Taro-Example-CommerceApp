import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

interface ArticleBottomInterface {
  data: any;
}

export default class ArticleBottom extends Component<ArticleBottomInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    const { data = {} } = this.props
    return (
      <View className="article-bottom-comp">
        <Image className='article-bottom-avatar-img' src={data['head_img'] || ''} />
        <Text className='article-bottom-author-name-txt'>{data['talent_name'] || ''}</Text>
        <View className='article-bottom-author-homepage-btn-wrap'>
          <Text className='article-bottom-author-btn-txt'>主页</Text>
        </View>
      </View>
    )
  }
}
