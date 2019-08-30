import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SceneMap, SceneRendererProps, TabBar, TabView, NavigationState } from 'react-native-tab-view';


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
      { key: 'article', title: 'Article' },
      { key: 'contacts', title: 'Contacts' },
      { key: 'albums', title: 'Albums' },
      { key: 'chat', title: 'Chat' },
    ],
  }
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
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
    />
  );

  renderScene = SceneMap({
    albums: () => null,
    contacts: () => null,
    article: () => null,
    chat: () => null,
  })



  render() {
    return (
      <View>
        <Text>
          rn super-tab-poly
        </Text>
        <TabView
          navigationState={this.state}
          renderScene={this.renderScene}
          renderTabBar={this.renderTabBar}
          onIndexChange={this.handleIndexChange}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#3f51b5',
  },
  tab: {
    width: 120,
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
  label: {
    fontWeight: '400',
  },
});