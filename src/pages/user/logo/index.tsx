import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'
import { device } from '@/utils/device';

interface LogoInterface {
}

export default class Logo extends Component<LogoInterface, {}> {
  render() {
    return (
      <View style={{
        width: device.windowWidth,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 100,
      }}>
        <Image
          src={require('./assets/logo.png')}
          style={{
            borderRadius: 10,
            width: 100,
            height: 100,
          }}
        />
      </View>
    )
  }
}
