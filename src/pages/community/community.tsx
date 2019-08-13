import Tab from '@/components/tab';
import TAB_LIST from '@/constants/community-tab';
import { device } from '@/utils/device';
import { View } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import './community.scss';
import Moments from './moments';
import Talk from './talk';
import Topic from './topic';


class Community extends Component {
  config = {
    navigationBarTitleText: '好省圈',
    disableScroll: true,
  }
  state = {
    current: 0,
  }

  render() {
    let scrollStyle: any = {}
    if (device.isH5()) {
      scrollStyle.height = device.windowHeight - 55  // 必须大于底部栏目固定高度，才不会导致滑动障碍
    }

    if (device.isIOS()) {
      scrollStyle.height = device.windowHeight - 49.5   // 同上，需要根据底部栏目的实际高度来设置滚动高度
    }

    if (device.isAndroid()) {
      scrollStyle.height = device.windowHeight - device.info.statusBarHeight - 50.5   // 同上，需要根据底部栏目的实际高度来设置滚动高度
    }

    if (device.isWeChat()) {
      scrollStyle.height = device.windowHeight + 'px'   // wechat ide 中没问题
      scrollStyle.height = Taro.getSystemInfoSync().screenHeight + 'px'   // 手机上还是超出，需要集中处理这个问题 
    }

    return (
      <View className='community-page'>
        <Tab
          noScroll
          marginLeft={65}
          marginTop={20}
          itemWidth={80}
          current={this.state.current}
          list={TAB_LIST}
          onChange={(item) => {
            console.log('FIN tab item', item)
            this.setState({
              current: item.key
            })
          }}
        />
        {
          this.state.current === 0 &&
          <Moments scrollStyle={scrollStyle} />
        }
        {
          this.state.current === 1 &&
          <Topic />
        }
        {
          this.state.current === 2 &&
          <Talk />
        }

      </View>
    )
  }
}

export default Community