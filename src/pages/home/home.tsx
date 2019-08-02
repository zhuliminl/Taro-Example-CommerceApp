import Taro, { Component, pxTransform } from '@tarojs/taro';
import { View, Text, ScrollView } from '@tarojs/components';
import './home.scss'

import ItemListB from '@/components/item-list-b'
import Banner from '@/components/banner'
import SearchBarView from './search-bar-view'

import banner1 from '@/assets/banner/banner1.png'
import banner2 from '@/assets/banner/banner2.png'
import banner3 from '@/assets/banner/banner3.png'
import banner4 from '@/assets/banner/banner4.png'
import { device } from '@/utils/device';

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

const coupon_url = 'https://v2.api.haodanku.com/itemlist/apikey/saul/nav/3/cid/0/back/20/min_id/1'

class Home extends Component {
  config = {
    navigationBarTitleText: '真的首页',
  }

  state = {
    loading: false,
    coupons: [],
  }

  componentDidMount = async () => {
    try {
      const resp = await Taro.request({url: coupon_url})
      const coupons = resp && resp.data && resp.data.data
      this.setState({
        coupons,
      })
      console.log('FIN coupons', coupons)
    } catch(err) {
      console.log('FIN get coupon err', err)
    }
  }

  render () {
    return (
      <View className='home'>
        <Banner 
          bannerHeight={135}
          imgList={IMG_LIST}
        />
        <SearchBarView/>

        <ScrollView
          scrollY
          style={{
            height: device.windowHeight,
          }}
        >
          <ItemListB
            list={this.state.coupons || []}
          >
            <View>
              <Text>标题头</Text>
            </View>
          </ItemListB>
        </ScrollView>


      </View>
    )
  }
}

export default Home