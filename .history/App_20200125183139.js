import React, { Component } from 'react';
import { Text, View} from 'react-native';
import LoginPage from './components/LoginPage'
import Navigate from './components/Navigate'
import {Platform, StyleSheet} from 'react-native';

export default class App extends Component {
  render(){
return(
  <View style={styles.container}>
<LoginPage/>
<Navigate/>
</View>
)
  }
}

const styles = StyleSheet.create({
  container: {
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      backgroundColor: '#ffffff',
      flex: 1,
    },
})