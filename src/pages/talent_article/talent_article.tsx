import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './talent_article.scss'
import HeaderWebpage from '@/components/header-webpage'
import WebPage from '@/components-poly/webpage-poly/index'


export default class TalentArticle extends Component {
  config = {
    navigationBarTitleText: 'talent_article',
    disableScroll: true,
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="talent_article-page">
        <HeaderWebpage backgroundColor={'#FE1123'} title={'达人文章'}/>
        <WebPage />
      </View>
    )
  }
}
