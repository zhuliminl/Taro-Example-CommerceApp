import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { device } from '@/utils/device'
import { navigateTo } from '@/utils/navigation'

interface SwiperPolyInterface {
  imgList: any[];
}

export default class SwiperPoly extends Component<SwiperPolyInterface, {}> {
  componentDidMount = () => {
  }

  _renderItem({ item, index }, parallaxProps) {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigateTo('talent_article', { title: 'xxxx', id: item['id'] })
        }}
      >
        <ParallaxImage
          source={{ uri: item['url'] }}
          containerStyle={styles.imageContainer}
          style={styles.bannerImg}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>{item['title']}</Text>
      </TouchableOpacity>
    )
  }



  render() {
    const { imgList = [] } = this.props
    return (
      <Carousel
        // layout={'default'}
        // layout={'stack'}
        // layout={'tinder'}
        // layoutCardOffset={29}
        // sliderHeight={100}
        // itemWidth={device.windowWidth - 80}

        data={imgList}
        renderItem={this._renderItem}
        sliderWidth={device.windowWidth}
        itemWidth={300}
        hasParallaxImages={true}
      />
    )
  }
}

const titleHeight = 40

const styles = StyleSheet.create({
  item: {
    // // shadowOpacity: 0.75,
    // shadowOpacity: 0.25,
    // shadowRadius: 10,
    // shadowColor: 'red',
    // shadowOffset: { height: 0, width: 0 },
    // backgroundColor: '#F5F6F7',

    marginTop: 10,
    marginBottom: 10,
    // width: device.windowWidth - 80,
    width: 300,
    height: 100 + titleHeight,   // 必须自行加上除了图片以外元素的高度才能保证图片显示正常，否则图片在宽度上将无法填满容器
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  bannerImg: {
    ...StyleSheet.absoluteFillObject,
    // resizeMode: 'cover',
    resizeMode: 'contain',
    width: 300,
    height: 100,
  },
  title: {
    height: titleHeight,
    // backgroundColor: '#F5F6F7',
    backgroundColor: '#FFF',
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 18,
    color: '#111',
  },
})