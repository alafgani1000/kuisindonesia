import React, { Component }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './components/Home';
import Soal from './components/Soal';
import Score from './components/Score';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Soal: Soal,
    Score: Score,
  },
  {
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
