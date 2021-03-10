import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor, height: 24 }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );

const Stack = createStackNavigator();

const Register = ({navigation}) => {
    return (
        <View style={styles.container}>
            <MyStatusBar backgroundColor="#1d6ea4" barStyle="light-content" />
            <View style={styles.header}>
                <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.goBack()}>
                  <MaterialCommunityIcons name="chevron-left" size={30} style={styles.iconHeader}/>
                </TouchableOpacity>
                <Text style={styles.titleHeader}>Register</Text>
            </View>
            <ScrollView>

            <View style={styles.containerMainRegister}>
                <View style={styles.containerRegister}>
                        <Text style={styles.textStyleTitle}>Username</Text>
                        <TextInput style={styles.textInputStyle} placeholder='Masukkan Username'/>
                        <Text style={styles.textStyleTitle}>Password</Text>
                        <TextInput style={styles.textInputStyle} placeholder='Masukkan Password'/>
                        <Text style={styles.textStyleTitle}>Konfirmasi Pasword</Text>
                        <TextInput style={styles.textInputStyle} placeholder='Konfirmasi Password'/>
                        <Text style={styles.textStyleTitle}>Nama</Text>
                        <TextInput style={styles.textInputStyle} placeholder='Masukkan Nama'/>
                        <Text style={styles.textStyleTitle}>Alamat</Text>
                        <TextInput style={styles.textInputStyle} placeholder='Masukkan Alamat'/>
                        <Text style={styles.textStyleTitle}>No. KWH</Text>
                        <TextInput style={styles.textInputStyle} placeholder='Masukkan No KWH'/>
                        <TouchableOpacity
                            style={styles.submitButtonStyleRegister}
                            // onPress={() => this.props.navigation.navigate('About')}
                            >
                        <Text style={styles.textStyleButton}>SUBMIT</Text>
                        </TouchableOpacity>
                </View>
            </View>
            </ScrollView>

        </View>
    );
};

export default Register

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#3498db',
    },
    header: {
        backgroundColor:'#3498db',
        height:50,
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop:20,
    },
    iconHeader: {
        marginLeft:20,
        marginRight:25,
        color:'#ffffff'
    },
    titleHeader: {
        color:'#fff',
        fontSize:18
    },
    containerMainRegister : {
        width:'100%',
        height:'100%',
        backgroundColor:'#ffff',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginTop:20,
    },
    containerRegister: {
        padding: 12,
        backgroundColor: '#ffff',
        borderRadius:10,
        marginTop:15,
        marginLeft:25,
        marginRight:25,
    },
    textTitle: {
        color:'#ffff'
    },
    textStyleTitle: {
        marginTop:20,
        marginBottom:10
    },
    textInputStyle: {
        borderWidth:1,
        borderRadius:8,
        backgroundColor:'#dfe6e9',
    },
    submitButtonStyleRegister: {
        marginTop:20,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'#2ecc71',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        marginBottom: 100,
    },
    textStyleButton:{
        color:'#fff',
        textAlign:'center',
    },
})
