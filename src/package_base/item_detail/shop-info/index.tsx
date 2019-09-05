import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import bg_tianmao from '@/assets/image/bg_tianmao.png'
import up from '@/assets/image/up.png'


interface ShopInfoInterface {
  item: any;
  isHdk?: boolean;
}

export default class ShopInfo extends Component<ShopInfoInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    const { item } = this.props
    return (
      <View className="shop-info-comp">
        <View className='shop-info-title-wrap'>
          {/* <Image className='shop-info-bg' src={bg_tianmao} /> */}
          <Text className='shop-info-title-txt'>{item.sellernick}</Text>
        </View>
        <View className='shop-info-appraise-wrap'>

          <View className='shop-info-appraise-item-wrap'>
            <Text className='shop-info-appraise-item-txt'>宝贝描述4.7</Text>
            <Image className='shop-info-appraise-up-img' src={up} />
          </View>

          <View className='shop-info-appraise-item-wrap'>
            <Text className='shop-info-appraise-item-txt'>卖家服务4.8</Text>
            <Image className='shop-info-appraise-up-img' src={up} />
          </View>

          <View className='shop-info-appraise-item-wrap'>
            <Text className='shop-info-appraise-item-txt'>物流五服务4.7</Text>
            <Image className='shop-info-appraise-up-img' src={up} />
          </View>

        </View>

        <View className='shop-info-recommend-wrap'>
          <Text className='shop-info-recommend-title-txt'>推荐语</Text>
          <Text className='shop-info-recommend-desc-txt'>{item.itemdesc || item['goodsDescription'] || ''}</Text>
        </View>
      </View>
    )
  }
}
