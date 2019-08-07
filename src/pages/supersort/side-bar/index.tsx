import Taro, { FunctionComponent } from '@tarojs/taro'
import React from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface SideBarInterface {
  list: any[];
  current: number;
  onChange: (item, i) => void;
}

const SideBar : FunctionComponent<SideBarInterface> = (props,) => {
  const {list, current, onChange} = props
  console.log('FIN list')
  const activeStyleWrap : any = {
    borderColor: 'red',
    backgroundColor: '#FFF',
  }
  const activeStyleTxt : any = {
    color: '#FE1123',
  }
  return (
    <View className='side-bar-comp'>
      {
        list.map((item,i) => {
          return (
            <View className='side-bar-item-wrap' style={current === i ? activeStyleWrap : {}} key={item.cid} onClick={() => {onChange(item, i)}}>
              <Text className='side-bar-item-txt' style={current === i ? activeStyleTxt : {}}>{item.main_name}</Text>
            </View>
          )
        })
      }
    </View>
  )
}

export default SideBar