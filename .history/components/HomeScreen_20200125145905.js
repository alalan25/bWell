import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Platform, StyleSheet} from 'react-native';

export default class HomeScreen extends Component {
  render(){
return(
<View style={styles.container}>
<Text>
no u
</Text>
</View>
)
  }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        backgroundColor: '#000000',
        height: 100,
        flex: 1,
      },
})