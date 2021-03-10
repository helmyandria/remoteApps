import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import img_profile from '../../assets/images/profile.jpeg';
import Profile from '../Profile';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import UbahPassword from '../UbahPassword';
import PusatBantuan from '../PusatBantuan';
import TentangAplikasi from '../TentangAplikasi';

const Stack = createStackNavigator();

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor, height: 24 }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );

function MenuProfile({ navigation, route }) {
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
            <Stack.Navigator initialRouteName="Profile">
                <Stack.Screen name="Profile" component={MenuProfileScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ProfileEdit" component={Profile} options={{ headerShown: false }} />
                <Stack.Screen name="UbahPass" component={UbahPassword} options={{ headerShown: false }} />
                <Stack.Screen name="PusatBantuan" component={PusatBantuan} options={{ headerShown: false }} />
                <Stack.Screen name="TentangAplikasi" component={TentangAplikasi} options={{ headerShown: false }} />
            </Stack.Navigator>
        // </NavigationContainer>
    );
  }

const MenuProfileScreen = ({navigation}) => {
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
                <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.navigate('ProfileEdit')}>
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

export default MenuProfile

const styles = StyleSheet.create({
    header: {
        backgroundColor:'#3498db',
        color:'#ffff',
        padding:15,
        fontSize:20,
        marginBottom:15,
    },
})
