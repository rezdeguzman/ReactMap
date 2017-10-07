/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapView from 'react-native-maps';

export default class ReactMap extends Component {
  render() {
    return (
      <View style={styles.container}>
       <MapView
	   style={styles.map}
	   initialRegion={{
			latitude: 14.6134,
            longitude: 121.085,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
	   }}
	   />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
  map:{
	  left: 0,
	  right: 0,
	  top: 0,
	  bottom: 0,
	  position: 'absolute',
  },
});

AppRegistry.registerComponent('ReactMap', () => ReactMap);
