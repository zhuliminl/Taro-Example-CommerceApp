import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import { device } from '../../../../rn_temp/utils/device';

import bg_chip1 from '@/assets/image/chip1.png'
import bg_chip2 from '@/assets/image/chip2.png'
import { navigateTo } from '@/utils/navigation'

interface ChipsInterface {
}

export default class Chips extends Component<ChipsInterface, {}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View
        className="chips-comp"
        style={{
          width: device.windowWidth,
          flexDirection: 'row',
        }}>

        <View
          style={{
            width: device.windowWidth / 2,
          }}
          onClick={() => {
            navigateTo('nine_goods')
          }}
        >
          <Image
            style={{
              width: device.windowWidth / 2,
              height: 150 * (device.windowWidth / 2) / 350,
            }}
            src={bg_chip1}
          />
        </View>

        <View
          style={{
            width: device.windowWidth / 2,
          }}
          onClick={() => {
            navigateTo('ranking_list')
          }}
        >
          <Image
            style={{
              width: device.windowWidth / 2,
              height: 150 * (device.windowWidth / 2) / 350,
            }}
            src={bg_chip2}
          />
        </View>

      </View>
    )
  }
}
