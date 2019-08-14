import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView, Image } from '@tarojs/components'
import './index.scss'
import { device } from '@/utils/device'

interface ThisWeekInterface {
  talkList: any[];
}

export default class ThisWeek extends Component<ThisWeekInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    const { talkList = [] } = this.props
    console.log('FIN talkList', talkList)
    return (
      <View className="this-week-comp">
        <ScrollView
          // showsHorizontalScrollIndicator={false}
          scrollX
          style={{
            width: device.windowWidth,
            paddingBottom: 10,
            // height: 100,
            // backgroundColor: '#F5F6F7',
          }}
        >
          <View className='this-week-scroll-wrap' >
            {
              talkList.map((item, i) => {
                let title = item['name'] || ''
                if(title.length >= 4) {
                  title = title.substr(0,10) + '...'
                }

                return (
                  <View className='this-week-item-wrap' key={i}>
                    <Image className='this-week-item-img' src={item['article_banner']} />
                    <Text className='this-week-item-title'>{title}</Text>
                    <View className='this-week-user-wrap'>
                      <Image className='this-week-user-avatar-img' src={item['head_img']} /> 
                      <Text className='this-week-user-name-txt'>{item['talent_name']}</Text>
                    </View>
                  </View>
                )
              })
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}
