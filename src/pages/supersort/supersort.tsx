import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './supersort.scss'


export default class Supersort extends Component {
  config = {
    navigationBarTitleText: 'supersort',
  }

  state = {
    supersortData: []
  }

  componentDidMount = () => {

  }

  fetchSuperSearch = async() => {
    const url = 'http://v2.api.haodanku.com/super_classify/apikey/saul'
    try {
      const resp = await Taro.request({url})
      let general_classify = resp && resp.data && resp.data.general_classify || []

      console.log('FIN tablist', general_classify)

      this.setState({
        supersortData: general_classify,
      })

    } catch(err) {
      console.log('FIN get superSearch err', err)
    }
  }


  render() {
    return (
      <View className="supersort-page">
        <Text>
          supersort
        </Text>
      </View>
    )
  }
}
