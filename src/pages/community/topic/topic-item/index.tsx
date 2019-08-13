import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import {navigateTo} from '@/utils/navigation'

interface TopicItemInterface {
  key: any;
  topic: any;
}

export default class TopicItem extends Component<TopicItemInterface,{}> {

  componentDidMount = () => {
  }

  render() {
    const {topic = {}} = this.props
    let bannerImgSrc = 'http://img.haodanku.com/' + topic['image']
    // console.log('FIN topic', topic)

    return (
      <View className="topic-item-comp" onClick={() => {
        navigateTo('topic_items', {topicid: topic['id'], topicName: topic['name']})
      }}>
        <View className='topic-banner-wrap'>
          <Image className='topic-banner-img' src={bannerImgSrc} mode={'scaleToFill'} />
          <View className='topic-date-wrap'>
            <Text className='topic-date-txt'>活动时间：08/23-08/26</Text>
          </View>
        </View>
        <Text className='topic-title-txt'>{topic['name']}</Text>
        <Text className='topic-title-desc-txt'>{topic['content']}</Text>
      </View>
    )
  }
}
