import React from 'react';
import { StyleSheet, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LaporanTagihan from '../LaporanTagihan';
import InputNoMeter from '../InputNoMeter';
import TambahTagihan from '../TambahTagihan';
import Tes from '../Tes';

const Stack = createStackNavigator();

function MenuListrik() {
    return (
        // <NavigationContainer>
            <Stack.Navigator initialRouteName="MenuListrik">
                <Stack.Screen name="MenuListrik" component={MenuListrikScreen} options={{ headerShown: false }} />
                <Stack.Screen name="LaporanTagihan" component={LaporanTagihan} options={{ headerShown: false }} />
                <Stack.Screen name="InputNoMeter" component={InputNoMeter} options={{ headerShown: false }} />
                <Stack.Screen name="TambahTagihan" component={TambahTagihan} options={{ headerShown: false }} />
                <Stack.Screen name="Tes" component={Tes} options={{ headerShown: false }} />
            </Stack.Navigator>
        // </NavigationContainer>
    );
  }

  const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor, height: 24 }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );

const MenuListrikScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
                <MyStatusBar backgroundColor="#1d6ea4" barStyle="light-content" />
                <View style={styles.header}>
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="chevron-left" size={30} style={styles.iconHeader}/>
                    </TouchableOpacity>
                    <Text style={styles.titleHeader}>Menu Listrik</Text>
                </View>

                <View style={styles.containerContent}>
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
                     <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.navigate('Tes')}>
                     <View style={styles.containerContentMenu}>
                         <MaterialCommunityIcons name='file-edit' size={50} style={styles.iconMenu} />
                         <Text style={styles.titleMenu}>Tes</Text>
                         <Text style={styles.titleMenu}>Class</Text>
                     </View>
                     </TouchableOpacity>
                 </View>
                </View>
            </View>
    )
}

export default MenuListrik

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
})
