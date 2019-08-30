import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SceneMap, SceneRendererProps, TabBar, TabView, NavigationState } from 'react-native-tab-view';
import { device } from '@/utils/device';


interface SuperTabPolyInterface {
}

type State = NavigationState<{
  key: string;
  title: string;
}>;

export default class SuperTabPoly extends Component<SuperTabPolyInterface, {}> {
  state = {
    index: 0,
    routes: [
      { key: '0', title: '全部' },
      { key: '1', title: '美食' },
      { key: '2', title: '育英' },
      { key: '3', title: '美妆' },
      { key: '4', title: '博主' },
      { key: '5', title: '上衣' },
      { key: '5', title: '上衣' },
      { key: '6', title: '裤子' },
      { key: '7', title: '美食' },
    ],
  };


  handleIndexChange = index => {
    this.setState({
      index,
    })
  }


  componentDidMount = () => {
  }

  renderTabBar = (props: SceneRendererProps & { navigationState: State }) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={{
        backgroundColor: 'green',
      }}
      style={{
      }}
      tabStyle={{
        width: 60,
        backgroundColor: '#FFF',
      }}
      labelStyle={{
        color: '#333',
        fontSize: 14,
      }}
    />
  )

  renderScene = () => {
    return <View />
  }

  render() {
    if (true) {
      return (
        <View
          style={{
            // 高度必须有
            height: 300,
            backgroundColor: '#EEE',
          }}
        >
          <Text>xxxx</Text>
          <TabView
            style={{ backgroundColor: 'red', }}
            navigationState={this.state}
            renderScene={this.renderScene}
            renderTabBar={this.renderTabBar}
            onIndexChange={index => this.setState({ index })}
          />
          <Text>sssss</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
});