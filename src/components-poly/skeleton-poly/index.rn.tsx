
import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
  ShineOverlay,
  Progressive,
} from "rn-placeholder";
import { device } from '@/utils/device'



export const MyMomentsLoader = () => (
  <Placeholder
    Animation={ShineOverlay}
  >
    <View
      style={{
        marginTop: 40,
        height: device.windowHeight,
        width: device.windowWidth,
        flexDirection: 'row',
      }}
    >
      <PlaceholderLine
        style={{
          borderRadius: 3,
          height: 60,
          width: 60,
          margin: 10,
          marginLeft: 15,
          padding: 0,
        }}
      />
      <View
        style={{
          flexDirection: 'column',
        }}
      >
        <PlaceholderLine
          style={{
            borderRadius: 3,
            height: 30,
            width: 180,
            marginTop: 10,
            padding: 0,
          }}
        />
        <PlaceholderLine
          style={{
            borderRadius: 3,
            height: 10,
            width: 60,
            marginTop: 1,
            padding: 0,
          }}
        />
        <PlaceholderLine
          style={{
            borderRadius: 3,
            height: 10,
            width: 260,
            marginTop: 1,
            padding: 0,
          }}
        />
        <PlaceholderLine
          style={{
            borderRadius: 3,
            height: 10,
            width: 260,
            marginTop: 1,
            padding: 0,
          }}
        />
        <PlaceholderLine
          style={{
            borderRadius: 3,
            height: 10,
            width: 240,
            marginTop: 1,
            padding: 0,
          }}
        />
        <PlaceholderLine
          style={{
            borderRadius: 3,
            height: 10,
            width: 200,
            marginTop: 1,
            padding: 0,
          }}
        />
        <PlaceholderLine
          style={{
            borderRadius: 3,
            height: 10,
            width: 100,
            marginTop: 1,
            padding: 0,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: 240 + 4*6,
          }}
        >
        <PlaceholderLine
          style={{
            borderRadius: 3,
            height: 80,
            width: 80,
            padding: 0,
            margin: 4,
            marginLeft: 0,
          }}
        />
        <PlaceholderLine
          style={{
            borderRadius: 3,
            height: 80,
            width: 80,
            padding: 0,
            margin: 4,
          }}
        />
        <PlaceholderLine
          style={{
            borderRadius: 3,
            height: 80,
            width: 80,
            padding: 0,
            margin: 4,
          }}
        />

        <PlaceholderLine
          style={{
            borderRadius: 3,
            height: 80,
            width: 80,
            padding: 0,
            margin: 4,
            marginLeft: 0,
            marginTop: 0,
          }}
        />
        <PlaceholderLine
          style={{
            borderRadius: 3,
            height: 80,
            width: 80,
            padding: 0,
            margin: 4,
            marginTop: 0,
          }}
        />
        <PlaceholderLine
          style={{
            borderRadius: 3,
            height: 80,
            width: 80,
            padding: 0,
            margin: 4,
            marginTop: 0,
          }}
        />


        </View>

      </View>
    </View>
  </Placeholder>
)

export const MyTopicsLoader = () => (
  <Placeholder
    Animation={ShineOverlay}
  >
    <View
      style={{
        height: device.windowHeight,
        paddingHorizontal: 20,
      }}
    >
      <PlaceholderLine
        style={{
          width: 340,
          height: 340,
          marginBottom: 0,
          borderRadius: 3,
          // marginLeft: 40,
          marginTop: 20,
          alignSelf: 'center',
        }}
      />
      <PlaceholderLine
        style={{
          width: 100,
          height: 30,
          marginBottom: 0,
          borderRadius: 3,
          // marginLeft: 40,
          marginTop: 20,
        }}
      />
      <PlaceholderLine
        style={{
          width: 340,
          height: 12,
          marginBottom: 0,
          borderRadius: 3,
          // marginLeft: 40,
          marginTop: 10,
        }}
      />

      <PlaceholderLine
        style={{
          width: 300,
          height: 12,
          marginBottom: 0,
          borderRadius: 3,
          // marginLeft: 40,
          marginTop: 10,
        }}
      />

      <PlaceholderLine
        style={{
          width: 200,
          height: 12,
          marginBottom: 0,
          borderRadius: 3,
          // marginLeft: 40,
          marginTop: 10,
        }}
      />
    </View>
  </Placeholder>
)

export const MyTalkLoader = () => (
  <Placeholder
    Animation={ShineOverlay}
  >
    <View style={{
      height: device.windowHeight,
    }}>
      <PlaceholderLine
        style={{
          width: 300,
          height: 150,
          marginBottom: 0,
          borderRadius: 3,
          // marginLeft: 40,
          marginTop: 20,
          alignSelf: 'center',
        }} />
      <PlaceholderLine
        style={{
          width: 100,
          height: 30,
          marginBottom: 0,
          borderRadius: 3,
          marginTop: 40,
          marginLeft: 20,
        }} />
      <PlaceholderLine
        style={{
          width: 180,
          height: 80,
          marginBottom: 0,
          borderRadius: 3,
          marginTop: 10,
          marginLeft: 20,
        }} />
      <PlaceholderLine
        style={{
          width: 140,
          height: 24,
          marginBottom: 0,
          borderRadius: 3,
          marginTop: 10,
          marginLeft: 20,
        }} />
      <View style={{ flexDirection: 'row', alignItems: 'center', }}>
        <PlaceholderLine
          style={{
            width: 24,
            height: 24,
            marginBottom: 0,
            borderRadius: 12,
            marginTop: 10,
            marginLeft: 20,
          }} />
        <PlaceholderLine
          style={{
            width: 80,
            height: 12,
            marginBottom: 0,
            borderRadius: 1,
            marginTop: 10,
            marginLeft: 6,
          }} />
      </View>
    </View>
  </Placeholder>
)