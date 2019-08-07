import Taro, { Component, hideToast } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Moments from './moments'
import {host} from '@/constants/host'


const TAB_LIST = [
  {
    key: 0,
    title: '好省精选',
  },
  {
    key: 1,
    title: '营销素材',
  },
  {
    key: 2,
    title: '好省学院',
  },
]

class Community extends Component {
  config = {
    navigationBarTitleText: '好省圈',
    disableScroll: true,
  }

  state = {
    loading: false,
    current: 0,
    min_id: 1,
  }

  componentDidMount = () => {
    this.fetchMoments()
  }

  fetchMoments = async () => {
    const {min_id} = this.state
    // const url = `${host}/selected_item/apikey/saul/min_id/${min_id}`
    const url = `https://v2.api.haodanku.com/selected_item/apikey/saul/min_id/1`
    console.log('FIN URL', url)

    try {
      const resp = await Taro.request({url})
      console.log('FIN moments ', resp)

    } catch(err) {
      console.log('FIN get moments err', err)
    }

  }



  render () {
    return (
      <View className='community-page'>


      </View>
    )
  }
}

export default Community