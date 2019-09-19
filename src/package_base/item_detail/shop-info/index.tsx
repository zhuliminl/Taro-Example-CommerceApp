import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import bg_tianmao from '@/assets/image/bg_tianmao.png'
import up from '@/assets/image/up.png'


interface ShopInfoInterface {
  item: any;
}

export default class ShopInfo extends Component<ShopInfoInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    const { item } = this.props
    return (
      <View className="shop-info-comp">
        <View className='shop-info-title-wrap'>
          <Image className='shop-info-bg' src={bg_tianmao} />
          <Text className='shop-info-title-txt'>{item['shopName']}</Text>
        </View>
        <View className='shop-info-appraise-wrap'>

          <View className='shop-info-appraise-item-wrap'>
            <Text className='shop-info-appraise-item-txt'>宝贝描述{item['descScore']}</Text>
            <Image className='shop-info-appraise-up-img' src={up} />
          </View>

          <View className='shop-info-appraise-item-wrap'>
            <Text className='shop-info-appraise-item-txt'>卖家服务{item['shipScore']}</Text>
            <Image className='shop-info-appraise-up-img' src={up} />
          </View>

          <View className='shop-info-appraise-item-wrap'>
            <Text className='shop-info-appraise-item-txt'>物流五服务{item['serviceScore']}</Text>
            <Image className='shop-info-appraise-up-img' src={up} />
          </View>

        </View>

        <View className='shop-info-recommend-wrap'>
          <Text className='shop-info-recommend-title-txt'>推荐语</Text>
          <Text className='shop-info-recommend-desc-txt'>{item['desc']}</Text>
        </View>
      </View>
    )
  }
}
