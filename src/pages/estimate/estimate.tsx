import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './estimate.scss'
import console = require('console');


export default class Estimate extends Component {
  config = {
    navigationBarTitleText: 'estimate',
  }

  state = {
    title: ''
  }

  componentDidMount = () => {
    const params = this.parseParams(this.$router.params)
    this.setState({title: params.title})
  }

  parseParams = data => {
    let paramsObj : any = {}
    Object.keys(data).forEach(key => {
      paramsObj[key] = decodeURIComponent(data[key])
    })
    return paramsObj
  }

  render() {
    return (
      <View className="estimate-page">
        <Text>
          {this.state.title}
        </Text>
      </View>
    )
  }
}
