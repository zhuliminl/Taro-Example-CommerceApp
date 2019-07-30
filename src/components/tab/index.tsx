import Taro, { Component } from '@tarojs/taro';
import { View, Text, ScrollView } from '@tarojs/components';
import './index.scss'

interface TabInterface {
  handleItemClick: (any) => void;
  current: number;
  list: any[];
}

interface ActiveStyleInterface {
  backgroundColor?: string
}


class Tab extends Component <TabInterface, {}> {
  static defaultProps = {
    handleItemClick: () => null
  }

  componentDidMount = () => {
    const i = 1
    const {list} = this.props
    this.props.handleItemClick && this.props.handleItemClick(list[i])
  }

  render () {
    const {list, current} = this.props
    return (
      <ScrollView className='tab-wrap'
        scrollX
      >
        {
          list.map(item => {
            const isActive = item.key === current
            let activeStyle : ActiveStyleInterface = {}
            if(isActive) {
              activeStyle.backgroundColor = 'red'
            }

            return (
              <View 
                key={item.key}
                className='tab-item-wrap'
                style={activeStyle}
              > 
                <Text className='tab-item-txt'>{item.title}</Text>
              </View>
            )
          })
        }
      </ScrollView>
    )
  }
}

export default Tab