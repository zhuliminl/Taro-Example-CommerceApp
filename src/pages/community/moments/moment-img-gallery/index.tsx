import Taro, { FunctionComponent } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import React from 'react'
import './index.scss'

interface MomentImgGalleryInterface {
  imgList: any[];
}

const MomentImgGallery: FunctionComponent<MomentImgGalleryInterface> = (props) => {
  const { imgList = [] } = props
  console.log('FIN imglist', imgList)

  return (
    <View className="moment-img-gallery-comp">
      {
        imgList.map((item, i) => {
          return (
            <Image className='moment-img' src={item || ''} key={i} style={{}} />
          )
        })
      }
    </View>
  )
}

export default MomentImgGallery
