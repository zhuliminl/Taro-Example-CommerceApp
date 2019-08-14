import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import {navigateTo} from '@/utils/navigation'

interface HangAroundInterface {
  talkList: any[];
  cats: any;
}

export default class HangAround extends Component<HangAroundInterface, {}> {
  state = {
    current: 0,
  }

  componentDidMount = () => {

  }

  render() {
    // 筛选数据
    const { cats = [], talkList: talkListData = [] } = this.props
    const talkList = talkListData.filter(item => {
      const talentcat = +item['talentcat'] || 0
      return this.state.current === talentcat || this.state.current === 0
    })


    return (
      <View className="hang-around-comp">
        <View className='hand-around-cats-wrap'>
          {
            cats.map((item, i) => {
              let activeStyleWrap: any = {}
              let activeStyleTitle: any = {}
              if (this.state.current === i) {
                activeStyleWrap = {
                  backgroundColor: '#FE1123'
                }
                activeStyleTitle = {
                  color: '#FFF',
                }
              }
              return (
                <View className='hand-around-cat-item-wrap' key={i} style={activeStyleWrap} onClick={() => { this.setState({ current: i }) }}>
                  <Text className='hand-around-cat-itme-title-txt' style={activeStyleTitle}>{item['title'] || ''}</Text>
                </View>
              )
            })
          }
        </View>
        {
          talkList.map((item, i) => {
            const talentcat = +item['talentcat'] || 0
            const cat = cats[talentcat] || {}
            const labelTxt = cat['title'] || ''
            return (
              <View className='hand-around-item-wrap' key={i} 
                onClick={() => {
                  navigateTo('talent_article', {title: 'xxxx', id: item['id']})
                }}
              >
                <View className='hand-around-item-img-wrap'>
                  <Image className='hand-around-item-img' src={item['article_banner']} mode={'aspectFit'} />
                  <View className='hand-around-item-label-wrap'>
                    <Text className='hand-around-item-label-txt'>{labelTxt}/{item['itemnum']}单品</Text>
                  </View>
                </View>
                <Text className='hand-around-item-title-txt'>{item['name']}</Text>
                <Text className='hand-around-item-desc-txt'>{item['article']}</Text>
              </View>
            )
          })
        }
      </View>
    )
  }
}
