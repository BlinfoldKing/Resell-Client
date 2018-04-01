import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/header';
import Buy from './components/screens/buy';
import Sell from './components/screens/sell';
import { Tabs, LoginScreen, Drawer } from './components/navigation';

export default class App extends React.Component {

  state = {
    screen : <Buy/>
  }


  render() {
    return (
        <LoginScreen/>
    );
  }
}
