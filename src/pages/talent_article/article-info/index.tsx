import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import read_grey from '@/assets/icon/read_grey.png'
import {parseDate} from '@/utils/date'

interface ArticleInfoInterface {
  data: any;
}

export default class ArticleInfo extends Component<ArticleInfoInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    const {data = {}} = this.props
    const checktime = data['checktime'] || ''
    return (
      <View className="article-info-comp">
        <Text className='article-info-title-txt'>{data['name']}</Text>
        <View className='article-info-author-wrap'>
          <Image className='article-info-author-avatar-img' src={data['head_img'] || ''}/>
          <Text className='article-info-author-name-txt'>{data['talent_name'] || ''}</Text>
          <Text className='article-info-date-txt'>{parseDate(checktime)}</Text>
          <Image className='article-info-read-img' src={read_grey}/>
          <Text className='article-info-read-number-txt'>232</Text>
        </View>

      </View>
    )
  }
}
