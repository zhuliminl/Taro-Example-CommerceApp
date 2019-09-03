import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import './index.scss'
import Spin from '@/components/spin'
import TopicItem from './topic-item'
import { MyTopicsLoader } from '@/components-poly/skeleton-poly'
import { topicsService } from './_state/topic.service';

interface TopicInterface {
  scrollStyle: any;
  topics: any[];
  firstLoading: boolean;
  loading: boolean;
}

export default class Topic extends Component<TopicInterface, {}> {

  componentDidMount = () => {
    topicsService.get()
  }

  render() {
    const { topics = [], firstLoading = true, loading = true } = this.props
    if (firstLoading) {
      return <MyTopicsLoader />
    }

    return (
      <ScrollView
        scrollY
        style={this.props.scrollStyle}
      >
        <Spin isShow={loading} />
        {
          topics.map((topic, i) => {
            return (
              <TopicItem key={i} topic={topic} />
            )
          })
        }
      </ScrollView>
    )
  }
}
