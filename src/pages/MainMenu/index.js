import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {BackgroundCarousel} from "../../utility/BackgroundCarousel";
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import img_profile from '../../assets/images/profile.jpeg';

// Menu
import Home from '../MenuHome';
import Notification from '../MenuNotification';
import Profile from '../MenuProfile';
import MenuHome from '../MenuHome';

// Menu in Home Screen
import LaporanTagihan from '../LaporanTagihan';
import InputNoMeter from '../InputNoMeter';
import TambahTagihan from '../TambahTagihan';
import MenuListrik from '../MenuListrik';

// Menu in Profile Screen
import UbahProfile from '../Profile';
import UbahPassword from '../UbahPassword';
import PusatBantuan from '../PusatBantuan';
import TentangAplikasi from '../TentangAplikasi';
import Pengaduan from '../Pengaduan';

const Stack = createStackNavigator();

const images = [
  "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
];

const Tab = createMaterialBottomTabNavigator();

const retrieveData = () => {
  AsyncStorage.getItem('user')
    .then((value) => {
      const user = value ? JSON.parse(value) : [];
      // user.push(userDetails)
      // AsyncStorage.setItem('user', JSON.stringify(user));
      console.log(`value data : ${JSON.stringify(user)}`);
      console.log(user.map((item) => item.customer_name));
      console.log(user.map((item) => item.installation_code));
      console.log(user.map((item) => item.installation_address));
      console.log(user.map((item) => item.power_capacity));
      console.log(user[0].installation_address);
      console.log(user.length);
      for (let i=0; i < user.length; i++){
        console.log(`data loop : ${user[i].installation_address}`)
      }
      // Alert.alert(`${user.map((item) => item.name)}${'\n'}${user.map((item) => item.age)}`);
    })
    .catch((error) => {
      console.log(error);
    });
};

const navigationHome = () =>{
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        <Stack.Screen name="MainMenu" component={MainMenu} options={{ headerShown: false }} />
        <Stack.Screen name="MenuListrik" component={MenuListrik} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LaporanTagihan" component={LaporanTagihan} options={{ headerShown: false }} />
        <Stack.Screen name="InputNoMeter" component={InputNoMeter} options={{ headerShown: false }} />
        <Stack.Screen name="TambahTagihan" component={TambahTagihan} options={{ headerShown: false }} />
        <Stack.Screen name="UbahProfile" component={UbahProfile} options={{ headerShown: false }} />
        <Stack.Screen name="UbahPass" component={UbahPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Pengaduan" component={Pengaduan} options={{ headerShown: false }} />
        <Stack.Screen name="PusatBantuan" component={PusatBantuan} options={{ headerShown: false }} />
        <Stack.Screen name="TentangAplikasi" component={TentangAplikasi} options={{ headerShown: false }} />
      </Stack.Navigator>
    // </NavigationContainer>
  )
}

const MainMenu = () => {
  return (
        <Tab.Navigator
          initialRouteName="Home"
          backBehavior="Home"
          activeColor="#ffffff"
          inactiveColor="#d9d9d9"
          barStyle={{ backgroundColor: '#3498db' }} >

          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel:'Home',
              tabBarColor:'#3498db',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />

          <Tab.Screen
            name="Notification"
            component={Notification}
            options={{
              tabBarLabel: 'Notification',
              tabBarColor:'#8e44ad',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
              ),
            }}
          />

          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel:'Profile',
              tabBarColor:'#27ae60',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account-circle" color={color} size={26} />
              ),
            }}
          />

      </Tab.Navigator>
  );
};

const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor='transparent' />
        <View style={styles.containerSliderImage}>
            <BackgroundCarousel images={images}/>
        </View>
        {/* Menu Utama */}
        <View style={styles.containerMenu}>
          <View style={styles.containerRowMenu}>
            <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.navigate('MenuListrik')}>
              <View style={styles.containerContentMenu}>
                <MaterialCommunityIcons name='flash' size={50} style={styles.iconMenu} />
                  <Text style={styles.titleMenu}>Menu</Text>
                  <Text style={styles.titleMenu}>Listrik</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .5 } onPress={retrieveData}>
              <View style={styles.containerContentMenu}>
                <MaterialCommunityIcons name='water' size={50} style={styles.iconMenu} />
                <Text style={styles.titleMenu}>Menu</Text>
                <Text style={styles.titleMenu}>Air</Text>
              </View>
            </TouchableOpacity>
            {/* <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.navigate('TambahTagihan')}> */}
              <View style={styles.containerContentMenu}>
                <MaterialCommunityIcons name='home-modern' size={50} style={styles.iconMenu} />
                <Text style={styles.titleMenu}>Menu</Text>
                <Text style={styles.titleMenu}>Properti</Text>
              </View>
            {/* </TouchableOpacity> */}
            </View>
          </View>
        </View>
    );
}

const ProfileScreen = ({navigation}) => {
  return (
      <View style={{backgroundColor:'#ffffff', flex:1}}>
          <StatusBar translucent  backgroundColor='transparent' />
          {/* Menu Atas */}
          <View style={{backgroundColor:'#3498db', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', paddingHorizontal:15, paddingVertical:15, borderBottomLeftRadius:20, borderBottomRightRadius:20, paddingTop:34}}>
              <Image source={img_profile} style={{width:120, height:120, borderRadius:75, marginRight:15}}/>
              <View style={{flexDirection:'column'}}>
                  <Text style={{fontSize:25, fontWeight:'bold', color:'#ffffff'}}>Jane Doe</Text>
                  <View style={{flexDirection:'row', alignItems:'center', paddingVertical:5}}>
                      <MaterialCommunityIcons name="cellphone-iphone" size={20} style={{marginRight:5, color:'#ffffff'}}/>
                      <Text style={{color:'#ffffff'}}>081234567890</Text>
                  </View>
                  <View style={{flexDirection:'row', alignItems:'center', paddingVertical:5}}>
                      <MaterialCommunityIcons name="email" size={20} style={{marginRight:5, color:'#ffffff'}}/>
                      <Text style={{color:'#ffffff'}}>janedoe@mail.com</Text>
                  </View>
              </View>
          </View>
          {/* Menu Bawah */}
          <View style={{backgroundColor:'#ffffff', flex:1, paddingTop:20, marginTop:20}}>
              <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.navigate('UbahProfile')}>
                  <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal:15, paddingVertical:10}}>
                      <MaterialCommunityIcons name="account" size={26} style={{marginRight:5, color:'#797979', flex:1}}/>
                      <Text style={{color:'#797979', flex:8}}>Profil</Text>
                      <MaterialCommunityIcons name="chevron-right" size={26} style={{marginRight:5, color:'#797979', flex:1}}/>
                  </View>
              </TouchableOpacity>
              <View style={{height:1, backgroundColor:'#f2f2f2', marginHorizontal:15, marginVertical:10}}/>
              <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.navigate('UbahPass')}>
                  <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal:15, paddingVertical:10}}>
                      <MaterialCommunityIcons name="lock" size={26} style={{marginRight:5, color:'#797979', flex:1}}/>
                      <Text style={{color:'#797979', flex:8}}>Ubah Password</Text>
                      <MaterialCommunityIcons name="chevron-right" size={26} style={{marginRight:5, color:'#797979', flex:1}}/>
                  </View>
              </TouchableOpacity>
              <View style={{height:1, backgroundColor:'#f2f2f2', marginHorizontal:15, marginVertical:10}}/>
              <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.navigate('Pengaduan')}>
                  <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal:15, paddingVertical:10}}>
                      <MaterialCommunityIcons name="email-edit" size={26} style={{marginRight:5, color:'#797979', flex:1}}/>
                      <Text style={{color:'#797979', flex:8}}>Pengaduan</Text>
                      <MaterialCommunityIcons name="chevron-right" size={26} style={{marginRight:5, color:'#797979', flex:1}}/>
                  </View>
              </TouchableOpacity>
              <View style={{height:1, backgroundColor:'#f2f2f2', marginHorizontal:15, marginVertical:10}}/>
              <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.navigate('PusatBantuan')}>
                  <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal:15, paddingVertical:10}}>
                      <MaterialCommunityIcons name="help-box" size={26} style={{marginRight:5, color:'#797979', flex:1}}/>
                      <Text style={{color:'#797979', flex:8}}>Pusat Bantuan</Text>
                      <MaterialCommunityIcons name="chevron-right" size={26} style={{marginRight:5, color:'#797979', flex:1}}/>
                  </View>
              </TouchableOpacity>
              <View style={{height:1, backgroundColor:'#f2f2f2', marginHorizontal:15, marginVertical:10}}/>
              <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.navigate('TentangAplikasi')}>
                  <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal:15, paddingVertical:10}}>
                      <MaterialCommunityIcons name="information" size={26} style={{marginRight:5, color:'#797979', flex:1}}/>
                      <Text style={{color:'#797979', flex:8}}>Tentang Aplikasi</Text>
                      <MaterialCommunityIcons name="chevron-right" size={26} style={{marginRight:5, color:'#797979', flex:1}}/>
                  </View>
              </TouchableOpacity>
              <View style={{height:1, backgroundColor:'#f2f2f2', marginHorizontal:15, marginVertical:10}}/>
              <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal:15, paddingVertical:10}}>
                  <MaterialCommunityIcons name="logout" size={26} style={{marginRight:5, color:'#797979', flex:1}}/>
                  <Text style={{color:'#797979', flex:9}}>Keluar</Text>
              </View>
          </View>
      </View>
  )
}

export default navigationHome;

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor:'#ffffff'
  },
  containerSliderImage: {
      alignItems:'center'
  },
  containerMenu : {
      backgroundColor:'#ffffff',
      marginTop:230,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      alignItems:'center'
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
  header: {
    backgroundColor:'#3498db',
    color:'#ffff',
    padding:15,
    fontSize:20,
    marginBottom:15,
  },
})