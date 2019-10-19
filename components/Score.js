import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { ScreenOrientation } from 'expo';
import { red } from 'ansi-colors';

export default class Score extends Component { 
    constructor(props) {
        super(props)

        // bind function
        this.changeScreenOrientation = this.changeScreenOrientation.bind(this);
    }

    changeScreenOrientation = ()=>{
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }
    render() {
        this.changeScreenOrientation();
        return (
        <View style={styles.container}>
            <Text style={styles.title}>
            Local files and assets can be imported by dragging and dropping them into the editor
            </Text>
            <Image style={styles.logo} source={require('../assets/splash.png')} />
            <TouchableOpacity
                style={styles.playGames}
                onPress={() => this.props.navigation.navigate('Soal')}
                >
                <Text style={styles.tombol}>Back to home</Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    margin: 24,
    marginTop: 0,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
  playGames: {
    borderStyle:'solid',
    borderColor: 'red', 
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#f0134d',
    padding: 20,
  },
  tombol: {
      fontSize: 25,
      color: '#ffffff',
  }
});
