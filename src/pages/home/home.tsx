import Taro, { Component, pxTransform } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './home.scss'
import Banner from '@/components/banner'

import banner1 from '@/assets/banner/banner1.png'
import banner2 from '@/assets/banner/banner2.png'
import banner3 from '@/assets/banner/banner3.png'
import banner4 from '@/assets/banner/banner4.png'

const IMG_LIST = [
  {
    key: 1,
    src: banner1,
  },
  {
    key: 2,
    src: banner2,
  },
  {
    key: 3,
    src: banner3,
  },
  {
    key: 4,
    src: banner4,
  },
]

class Home extends Component {
  config = {
    navigationBarTitleText: '真的首页',
  }

  state = {
    loading: false,
  }

render () {
  return (
      <View className='home'>
        <Banner 
          bannerHeight={135}
          imgList={IMG_LIST}
        />
      </View>
    )
  }
}

export default Home