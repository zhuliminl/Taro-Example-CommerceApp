import Taro, { FunctionComponent } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import React from 'react'
import './index.scss'

interface MomentsInterface {
}

const Moments : FunctionComponent<MomentsInterface> = (props) => {

  return (
    <View className="moments-comp">
      <Text>
        moments
      </Text>
    </View>
  )
}

export default Moments
