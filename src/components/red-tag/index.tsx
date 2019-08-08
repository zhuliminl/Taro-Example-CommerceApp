import Taro, { FunctionComponent } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import React from 'react'
import './index.scss'

interface RedTagInterface {
  title: string;
}

const RedTag : FunctionComponent<RedTagInterface> = (props) => {
  const {title} = props

  return (
    <View className="red-tag-comp">
      <Text className='red-tag-txt'>{title}</Text>
    </View>
  )
}

export default RedTag
