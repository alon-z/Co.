import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
} from 'react-native';

import Workers from './app/pages/workers/component';
import ScrollableTabView from 'react-native-scrollable-tab-view';

class Co extends Component {
  render() {
    return (
      <ScrollableTabView initialPage={0}>
        <Workers tabLabel='Workers'/>
        <View tabLabel='Jobs'/>
        <View tabLabel='Options'/>
      </ScrollableTabView>    
    );
  }
}

AppRegistry.registerComponent('Co', () => Co);
