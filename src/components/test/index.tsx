import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'

const TAB_LIST = [
  {
    key: 0,
    title: '0000',
    title_desc: '今日评估效果0000',
  },
  {
    key: 1,
    title: '111111',
    title_desc: '本月评估效果1111',
  },
  {
    key: 2,
    title: '22222',
    title_desc: '上月评估效果2222',
  },
  {
    key: 3,
    title: '33333',
    title_desc: '上月总确认收3333',
  },
]



export default class Test extends Component {
  state = {
    current: 0
  }

  handleChange = (event) => {
    const {detail} = event
    const {current} = detail
    console.log("FIN current", current)
    this.setState({current})
  }

  render() {
    return (
      <View 
        className="test-comp"
        style={{
          marginTop: 100,
        }}
      >
        {
          TAB_LIST.map(item => {
            return (
              <View key={item.key} style={{backgroundColor: '#FFF', flexDirection: 'row'}}
              onClick={() => {
                this.setState({current: item.key})
              }}
              >
                <Text style={{
                  fontSize: 35,
                  color: this.state.current === item.key ? 'red': '#333',
                }}>{item.title}</Text>
              </View>
            )
          })
        }
        <Swiper
          current={this.state.current}
          onChange={this.handleChange.bind(this)}
          style={{
            height: 300,
            backgroundColor: '#f5F6F7',
          }}
        >
          {
            TAB_LIST.map(item => {
              return (
                <SwiperItem key={item.key}>
                  <View>
                    <Text style={{fontSize: 35, color: 'red'}}>=>current{this.state.current}</Text>
                    <Text style={{fontSize: 35}}>{item.title_desc}</Text>
                  </View>
                </SwiperItem>
              )
            })
          }
        </Swiper>
      </View>
    )
  }
}
