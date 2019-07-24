/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment,Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation"

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import homeScreen from './components/homeScreen';
import detailsScreen from './components/detailsScreen';
import aboutUs from "./components/aboutUs";
import details from "./components/details";
import event from './components/event';
import test from './components/test';
import dynamic from './components/dynamic';

export const RootStack = createDrawerNavigator(
  {
      HomeScreen:homeScreen,
      Event:event,
      DetailsScreen:detailsScreen,
      AboutUs:aboutUs,
      DetailsCompany:details,
      Test:test,
      dynamic:dynamic
  },
  {
      initialRouteName: "dynamic",
      activeTintColor: "grey",
      drawerBackgroundColor: "#fff",
      flex: 1,
      contentOptions: {
          activeTintColor: "grey",
          inactiveTintColor: "black",         
      }
  }
)
const AppContainer = createAppContainer(RootStack);
export default class App extends Component {
  render(){
    return (
      <View style={{backgroundColor:'White',height:'100%',width:'100%', color:"#000"}}>
        <AppContainer/>
      </View>
      
  );
  }
};
