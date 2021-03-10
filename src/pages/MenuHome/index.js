import React from 'react';
import { StyleSheet, Text, View, Image, Touchable , StatusBar} from 'react-native';
import banner1 from '../../assets/images/banner_1.jpeg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LaporanTagihan from '../LaporanTagihan';
import InputNoMeter from '../InputNoMeter';
import Tes from '../Tes';
import {BackgroundCarousel} from "../../utility/BackgroundCarousel";
import TambahTagihan from '../TambahTagihan';

import MainMenu from '../MainMenu';

// const ProfileNavigator = ({ navigation, route }) => {
//     React.useLayoutEffect(() => {
//         const routeName = getFocusedRouteNameFromRoute(route);
//         if (routeName === "Group"){
//             navigation.setOptions({tabBarVisible: false});
//         }else {
//             navigation.setOptions({tabBarVisible: true});
//         }
//     }, [navigation, route]);
//     return(
//         <ProfileStack.Navigator screenOptions={{headerShown: false}}>
//             <ProfileStack.Screen name="Profile" component={ProfileScreen} />
//             <ProfileStack.Screen name="Group" component={GroupScreen} />
//         </ProfileStack.Navigator>
//     )};

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

function MenuHome({ navigation, route }) {
    // navigation.setOptions({ tabBarVisible: false }};
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === "LaporanTagihan"){
            console.log('masuk laporan tagihan');
            navigation.setOptions({tabBarVisible: false});
        }else {
            console.log('tidak masuk laporan tagihan');
            navigation.setOptions({tabBarVisible: true});
        }
    }, [navigation, route]);
    return (
        // <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                {/* <Stack.Screen name="MainMenu" component={MainMenu} options={{ headerShown: false }} /> */}
                <Stack.Screen name="Home" component={MenuHomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="LaporanTagihan" component={LaporanTagihan} options={{ headerShown: false }} />
                <Stack.Screen name="InputNoMeter" component={InputNoMeter} options={{ headerShown: false }} />
                <Stack.Screen name="TambahTagihan" component={TambahTagihan} options={{ headerShown: false }} />
                <Stack.Screen name="Tes" component={Tes} options={{ headerShown: false }} />
            </Stack.Navigator>
        // </NavigationContainer>
    );
  }

const Stack = createStackNavigator();

const images = [
    "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  ];

const MenuHomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent' />
            <View style={styles.containerSliderImage}>
                <BackgroundCarousel images={images}/>
            </View>
            {/* Menu Utama */}
            <View style={styles.containerMenu}>
            <View style={styles.containerRowMenu}>
            <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.navigate('InputNoMeter')}>
                <View style={styles.containerContentMenu}>
                    <MaterialCommunityIcons name='file-edit' size={50} style={styles.iconMenu} />
                    <Text style={styles.titleMenu}>Input</Text>
                    <Text style={styles.titleMenu}>No Meter</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.navigate('LaporanTagihan')}>
                <View style={styles.containerContentMenu}>
                    <MaterialCommunityIcons name='history' size={50} style={styles.iconMenu} />
                    <Text style={styles.titleMenu}>Laporan</Text>
                    <Text style={styles.titleMenu}>Tagihan</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.navigate('TambahTagihan')}>
                <View style={styles.containerContentMenu}>
                    <MaterialCommunityIcons name='bookmark-plus' size={50} style={styles.iconMenu} />
                    <Text style={styles.titleMenu}>Tambah</Text>
                    <Text style={styles.titleMenu}>Tagihan</Text>
                </View>
            </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

export default MenuHome

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
    }
})
