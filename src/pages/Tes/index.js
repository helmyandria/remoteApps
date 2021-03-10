
import React, { Component } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity } from "react-native";
import {BackgroundCarousel} from "../../utility/BackgroundCarousel";
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'sharingan-rn-modal-dropdown';

const images = [
  "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
];

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor, height: 24  }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class Tes extends Component{
  constructor(props){
     // variable
     let var1='zoro';
     let var2='tes var 2';
     let bulan='';
     let tahun='';
     let textValue='';
  }
  render() {
    return (
      <Text style={titleHeader}>hello World</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3498db'
},
header: {
    backgroundColor:'#3498db',
    height:50,
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop:20
},
iconHeader: {
    color: '#ffffff',
    marginLeft:25,
    marginRight:25,
},
titleHeader: {
    color:'#fff',
    fontSize:18
},
containerContent : {
    backgroundColor:'#ffff',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    marginTop:20,
    width:'100%',
    height:'100%',
    alignItems:'center',
},
containerRowMenu: {
    flexDirection:'row',
    marginTop:15,
    marginHorizontal:15
},
containerContentMenu:{
    backgroundColor:'#f2f2f2',
    alignItems:'center',
    padding:20,
    borderRadius:20,
    marginHorizontal:10,
},
iconMenu: {
    color:'#3498db',
    marginBottom:10
},
    titleMenu: {
    color:'#797979',
    fontWeight:'bold'
},
});