import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Tab from '@/components/tab'
import console = require('console');

const TAB_LIST = [
  {
    key: 0,
    title: '全部',
  },
  {
    key: 1,
    title: '女装',
  },
  {
    key: 2,
    title: '男装',
  },
  {
    key: 3,
    title: '内衣',
  },
  {
    key: 4,
    title: '美妆',
  },
  {
    key: 5,
    title: '配饰',
  },
  {
    key: 6,
    title: '鞋品',
  },
  {
    key: 7,
    title: '箱包',
  },
  {
    key: 8,
    title: '儿童',
  },
  {
    key: 9,
    title: '母婴',
  },
  {
    key: 10,
    title: '居家',
  },
  {
    key: 11,
    title: '美食',
  },
  {
    key: 12,
    title: '数码',
  },
  /*
  {
    key: 13,
    title: '家电',
  },
  {
    key: 14,
    title: '其他',
  },
  {
    key: 15,
    title: '车品',
  },
  {
    key: 16,
    title: '文体',
  },
  {
    key: 17,
    title: '宠物',
  },
  */
]


class Community extends Component {
  config = {
    navigationBarTitleText: '好省圈',
  }

  state = {
    loading: false,
    animationData: {},
  }

  componentDidMount = () => {
    console.log('FIN 动画')
    let animation = Taro.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })


    animation.scale(1.4,1.4).rotate(45).step()

    this.setState({
      animationData : animation.export()
    })
  }


  render () {
    return (
      <View>
        <Text>好省圈</Text>

        <View
          animation={this.state.animationData}
        >
          <Text>动画</Text>
        </View>


        <Tab 
          current={3}
          list={TAB_LIST}
          handleItemClick={(item) => {
            console.log('FIN', item)
          }}
        />
      </View>
    )
  }
}

export default Community