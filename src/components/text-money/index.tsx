import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { device } from '@/utils/device'

interface TextMoneyInterface {
  money: number;
  fontSize: any;
}

export default class TextMoney extends Component<TextMoneyInterface, {}> {

  render() {
    const { fontSize: fontSizeProp, money } = this.props
    let fontSize = fontSizeProp
    let symbolFontSize: any = fontSize / 1.7

    if (device.isWeChat()) {
      fontSize = Taro.pxTransform(fontSize * 2)
      symbolFontSize = Taro.pxTransform(symbolFontSize * 2)
    }

    return (
      <View className="text-money-comp">
        <Text
          className='text-money-symbol'
          style={{
            fontSize: symbolFontSize,
          }}
        >￥</Text>
        <Text
          style={{
            fontSize,
          }}
          className='text-money-txt'>{money}</Text>
      </View>
    )
  }
}
