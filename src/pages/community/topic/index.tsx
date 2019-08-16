import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import './index.scss'
import Spin from '@/components/spin'
import TopicItem from './topic-item'
import { MyTopicsLoader } from '@/components-poly/skeleton-poly/index'

interface TopicInterface {
  scrollStyle: any;
}

export default class Topic extends Component<TopicInterface,{}> {
  state = {
    loading: true,
    topics: [],
  }

  componentDidMount = () => {
    this.fetchTopics()
  }

  fetchTopics = async () => {
    const url = `https://v2.api.haodanku.com/get_subject/apikey/saul`
    try {
      const resp = await Taro.request({ url })
      const topics = resp && resp.data && resp.data.data
      // console.log('FIN topics data', topics)
      const preState = this.state

      this.setState({
        topics: preState.topics.concat(topics),
        loading: false,
      })

    } catch (err) {
      console.log('FIN get topics err', err)
    }
  }

  render() {
    if(this.state.loading) {
      return <MyTopicsLoader />
    }

    return (
      <ScrollView
        scrollY
        style={this.props.scrollStyle}
      >
        <Spin isShow={this.state.loading} />
        {
          this.state.topics.map((topic, i) => {
            return (
              <TopicItem key={i} topic={topic} />
            )
          })
        }
      </ScrollView>
    )
  }
}
