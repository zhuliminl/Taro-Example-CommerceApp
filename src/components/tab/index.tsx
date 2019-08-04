import Taro, { Component } from '@tarojs/taro';
import { View, Text, ScrollView } from '@tarojs/components';
import './index.scss'
import {device} from '@/utils/device'
import {animateValue} from '@/utils/animation'

interface TabInterface {
  onChange: (any) => void;
  current: number;
  noScroll?: boolean;
  list: any[];
  itemWidth: any;
  marginLeft?: any;
  backgroundColor?: any;
}

interface TabStateInterface {
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
      maxX: totalX - device.windowWidth,  // 最大移动位置是元素的总长度减去屏幕宽度
      leftX,
    }
  }

  static defaultProps = {
    list: [], // 小程序端底部 tab 页面在点击之前就会 init，所以必须给与初始值才不会报错
  }

  componentDidMount = () => {
    console.log('FIN tab props', this.props)
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


  handleTabItemClick = item => {
    console.log('FINxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
    this.setX(item)      // 处理容器滚动位置
    this.setLeftX(item)  // 处理小滑块滚动动画

    this.props.onChange && this.props.onChange(item)

  }

  setX = item =>{
    const {key} = item  // 当前被点中的 key
    const {itemWidth : W, current: preKey, noScroll} = this.props
    if(noScroll) return // 禁止滚动

    const {maxX} = this.state

    // if(key === preKey) return  // 两次点击的一样，不进行任何动作

    let nextX = W*key         // 正常情况下直接根据当前的 key 也就是序号，来决定下一个位置
    if(nextX >= maxX) {       // 超出范围
      nextX = maxX
    }

    if(key <= preKey) {        // 如果是反向点击的话，那下个位置就必须在当前位置上向左移动一个单位
      nextX = nextX - W*2      // 乘以2 用户会提前看到之前的 tab，体验更好
    }
    this.setState({ x: nextX, })
  }

  setLeftX = (item) => {
    const preLeftX = this.props.itemWidth * this.props.current
    const nextLeftX = this.props.itemWidth * item.key
    animateValue(preLeftX, nextLeftX, this.setCursor)
  }

  componentWillReceiveProps = nextProps => {
    console.log('FIN componentWillReceiveProps')
    const {current, list} = nextProps
    const item = list[current]
    this.setLeftX(item) // 同步滑动
  }

  render () {
    const {list} = this.props
    let leftX : any = this.state.leftX
    let {itemWidth, marginLeft, backgroundColor} = this.props
    if(device.isWeChat()) {
      // 微信端必须重新设置
      leftX = Taro.pxTransform(leftX*2)
      itemWidth = Taro.pxTransform(itemWidth*2)
      // marginLeft = Taro.pxTransform(marginLeft*2)
      marginLeft = 0   // 小程序太难伺候了，暂时设为 0 不影响排版
    }

    return (
      <ScrollView className='tab-wrap'
        style={{
          marginLeft: marginLeft || 0,
          backgroundColor: backgroundColor || '#FFF',
        }}
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
            const isActive = item.key === this.props.current
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