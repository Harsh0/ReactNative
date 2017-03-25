//import a library to help create a component
import React from 'react';
import { Text,View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
//create a component
const App = () => (
	<View style={{flex:1}}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
);

//render it to device
AppRegistry.registerComponent('albums', () => App);
