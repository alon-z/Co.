import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  AsyncStorage,
} from 'react-native';

import Storage from 'react-native-storage';

import Workers from './app/pages/workers/component';
import Projects from './app/pages/projects/component';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import stubWorkers from './app/pages/workers/stub.json';

var storage = new Storage({
    // maximum capacity, default 1000 
    size: 1000,

    // Use AsyncStorage. If none set, storage will be deleted after reload
    storageBackend: AsyncStorage,

    // expire time in milliseconds, default is 1 day. null = never
    defaultExpires: null,

    // cache data in the memory. default is true.
    enableCache: true,

    // if data was not found in storage, do sync
    sync : {
        // we'll talk about the details later.
    }
}) 

// make the storage global
global.storage = storage;

class Co extends Component {

  render() {

    storage.save({
      key: 'Workers',
      rawData: { 
          workers: stubWorkers
      },
      expires: null
    });

    // load
  storage.load({
      key: 'Workers',

      // autoSync(default true) means if data not found or expired,
      // then invoke the corresponding sync method
      autoSync: true,

      // syncInBackground(default true) means if data expired,
      // return the outdated data first while invoke the sync method.
      // It can be set to false to always return data provided by sync method when expired.(Of course it's slower)
      syncInBackground: true
  }).then(ret => {
      // found data go to then()
      console.log(ret);
  }).catch(err => {
      // any exception including data not found 
      // goes to catch()
      console.warn(err.message);
      switch (err.name) {
          case 'NotFoundError':
              console.log("notFound")
              break;
          case 'ExpiredError':
              console.log("expired")
              break;
      }
  })

    return (
      <ScrollableTabView initialPage={0}>
        <Workers tabLabel='Workers'/>
        <Projects tabLabel='Projects'/>
        <View tabLabel='Options'/>
      </ScrollableTabView>    
    );
  }
}

AppRegistry.registerComponent('Co', () => Co);
