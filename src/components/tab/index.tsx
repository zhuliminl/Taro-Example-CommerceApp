import Taro, { Component } from '@tarojs/taro';
import { View, Text, ScrollView } from '@tarojs/components';
import './index.scss'
import {device} from '@/utils/device'
import {moveStrategies} from '@/utils/animation'
import console = require('console');

interface TabInterface {
  handleItemClick: (any) => void;
  current: number;
  list: any[];
  itemWidth: any;
}

interface TabStateInterface {
  current: number;
  x: number;
  maxX: number;
  leftX?: number;
}

interface ActiveStyleInterface {
  color?: string;
  fontWeight?: String;
}


class Tab extends Component <TabInterface, TabStateInterface> {
  constructor(props) {
    super(props)
    const {list, itemWidth, current} = this.props
    const totalX = itemWidth*(list.length)
    const leftX = itemWidth*current
    this.state = {
      x: 0,
      current: this.props.current || 0,
      maxX: totalX - device.windowWidth,  // 最大移动位置是元素的总长度减去屏幕宽度
      leftX,
    }
  }

  static defaultProps = {
    handleItemClick: () => null,
    list: [], // 小程序端底部 tab 页面在点击之前就会 init，所以必须给与初始值才不会报错
  }

  componentDidMount = () => {
    console.log('FIN tab state', this.state)
  }

  printV = v => {
    console.log('FIN value', v)
  }

  setCursor = v => {
    this.setState({
      leftX: v
    })
  }

  // 让某个值在某个区间变化
  animateValue = (a, b, fn) => {
    // console.log('FIN 初始值a', a)
    // console.log('FIN 初始值b', b)
    const duration = 0.2*1000
    let d = b - a
    let startT = +new Date();
    let ID = setInterval(() => {
      let curT = +new Date();
      let passT = curT - startT;
      let value = moveStrategies.sineaseIn(passT, a, d, duration)
      fn(value)
      if(passT > duration) {
        fn(b)  // 强制纠正动画值的不精确性
        // console.log('FIN 终点值', value)
        clearInterval(ID)
      }
    }, 0.4)
  }

  handleTabItemClick = item => {
    this.handleActiveItem(item) // 处理 tab 的激活状态和移动

    const preLeftX = this.props.itemWidth * this.state.current
    const nextLeftX = this.props.itemWidth * item.key
    this.animateValue(preLeftX, nextLeftX, this.setCursor)

    // console.log('FIN 之前的位置', preLeftX)
    // console.log('FIN 下一次的位置', nextLeftX)
  }

  handleActiveItem = item =>{
    const {key} = item  // 当前被点中的 key
    const {itemWidth : W} = this.props

    const {maxX, current: preKey} = this.state

    // if(key === preKey) return  // 两次点击的一样，不进行任何动作

    let nextX = W*key         // 正常情况下直接根据当前的 key 也就是序号，来决定下一个位置
    if(nextX >= maxX) {       // 超出范围
      nextX = maxX
    }

    if(key <= preKey) {        // 如果是反向点击的话，那下个位置就必须在当前位置上向左移动一个单位
      nextX = nextX - W*2      // 乘以2 用户会提前看到之前的 tab，体验更好
    }
    this.setState({
      x: nextX,
      current: item.key,
    })
  }


  render () {
    const {list} = this.props
    let leftX : any = this.state.leftX
    let itemWidth = this.props.itemWidth
    if(device.isWeChat()) {
      // 微信端必须重新设置
      leftX = Taro.pxTransform(leftX*2)
      itemWidth = Taro.pxTransform(itemWidth*2)
    }

    return (
      <ScrollView className='tab-wrap'
        scrollX
        scrollLeft={this.state.x}
        scrollWithAnimation
        // showsHorizontalScrollIndicator={false}  // wchat app 会报错，打算直接用其他元素遮盖来隐藏滚动条
      >
        <View className='cursor-wrap' 
          style={{ 
            width: itemWidth,
            left: leftX,
          }}
        >
          <View className="cursor-item"></View>
        </View>
        {
          list.map(item => {
            const isActive = item.key === this.state.current
            let activeStyle : ActiveStyleInterface = {}
            if(isActive) {
              activeStyle.color = '#FE1123'
              activeStyle.fontWeight = 'bold'
            }
            return (
              <View 
                onClick={this.handleTabItemClick.bind(this, item)}
                id={item.title}
                key={item.key}
                className='tab-item-wrap'
                style={{
                  width: itemWidth,
                }}
              > 
                <Text 
                  className='tab-item-txt' 
                  style={activeStyle}>{item.title}</Text>
              </View>
            )
          })
        }
      </ScrollView>
    )
  }
}

export default Tab