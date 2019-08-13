
import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Platform } from 'react-native'
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {device} from '@/utils/device'

interface SwiperPolyInterface {
  imgList: any[];
}

export default class SwiperPoly extends Component<SwiperPolyInterface,{}> {
  state = {
    imgList: [
    ]
  }

  componentDidMount = () => {
  }

  _renderItem ({item, index}, parallaxProps) {
    return (
        <View style={styles.item}>
            <ParallaxImage
                source={{ uri: item['url'] }}
                containerStyle={styles.imageContainer}
                style={{
                  width: 300,
                  height: 100,
                }}
                parallaxFactor={0.4}
                {...parallaxProps}
            />
            <Text style={styles.title} numberOfLines={2}>
              xxxxx
            </Text>
        </View>
    );
}


  __renderItem ({item, index}) {
    return (
        <View style={styles.slide}>
            <Text style={styles.title}>xxxxxxxxxxxx</Text>
            <Image style={styles.image} source={{uri: item['url']}}/>
        </View>
    );
}

  render () {
    const {imgList = []} = this.props
    // if(true) {
    //   return (
    //     <View>
    //       <Text>xxxxxxxxx</Text>
    //     </View>
    //   )
    // }
      return (
          <Carousel
          // layout={'stack'}
          // layout={'tinder'}
          // layoutCardOffset={29}

            // ref={(c) => { this._carousel = c; }}

            data={imgList}
            renderItem={this._renderItem}
            sliderWidth={device.windowWidth}
            sliderHeight={300}
            itemWidth={device.windowWidth - 60}
            hasParallaxImages={true}
          />
      );
  }
}

const styles = StyleSheet.create({
  item: {
    width: device.windowWidth - 60,
    height: device.windowWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  slide: {

  },
  entries: {

  },
  sliderWidth: {

  },
  title: {

  },
})