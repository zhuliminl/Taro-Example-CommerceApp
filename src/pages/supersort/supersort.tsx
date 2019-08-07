import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import SideBar from './side-bar'
import ImgNav from './img-nav'
import {device} from '@/utils/device'

import './supersort.scss'



export default class Supersort extends Component {
  config = {
    navigationBarTitleText: 'supersort',
    disableScroll: true,
  }

  state = {
    supersortData: [],
    current: 0,
  }

  componentDidMount = () => {
    this.fetchSuperSort()

  }

  fetchSuperSort = async() => {
    const url = 'https://v2.api.haodanku.com/super_classify/apikey/saul'
    try {
      const resp = await Taro.request({url})
      let general_classify = resp && resp.data && resp.data.general_classify || []

      console.log('FIN supersort', general_classify)

      this.setState({
        supersortData: general_classify,
      })

    } catch(err) {
      console.log('FIN get superSearch err', err)
    }
  }


  handleOnChange = (item, i) => {
    this.setState({
      current: i
    })

  }

  render() {
    let scrollStyle : any = {
      height: device.windowHeight,
    }

    if(device.isAndroid()) {
      scrollStyle.height = device.windowHeight - device.info.statusBarHeight
    }

    if(device.isWeChat()) {
      scrollStyle.height = device.windowHeight + 'px'
    }

    const {supersortData = []} = this.state
    const imgNavData = supersortData[this.state.current] || {}

    return (
      <View className="supersort-page">
        <ScrollView
          scrollY
          className='supersort-scroll-left'
          style={scrollStyle}
        >
          <SideBar 
            list={this.state.supersortData}
            current={this.state.current}
            onChange={this.handleOnChange.bind(this)}
          />
        </ScrollView>

        <ScrollView
          scrollY
          className='supersort-scroll-right'
          style={scrollStyle}
        >
          <ImgNav imgNavData={imgNavData} />
        </ScrollView>
      </View>
    )
  }
}
