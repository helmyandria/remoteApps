import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert, Button, StatusBar, ToastAndroid} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logoRemote from '../../assets/images/logo-remote.png';
import logoPelindo from '../../assets/images/logo-pelindo.png';
import Register from '../Register';
import MainMenu from '../MainMenu';

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor, height: 24 }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );

function Login() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="MainMenu" component={MainMenu} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function LoginScreen({navigation}) {
    const [usernameValue, setUsernameValue] = useState('');
    const [passValue, setPassValue] = useState('');

    const [dataLogin, setDataLogin] = useState({
        messageCode: '',
        messageDesc: ''
    })

    const postLogin = () => {
        const dataAPILogin = {
                username : `${usernameValue}`,
                password : `${passValue}`
        }
        fetch('http://10.1.234.74:8080/api/v1/akun', {
            method: 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(dataAPILogin)
        })
        .then(response => response.json())
        .then(json => {
            setDataLogin('')
            console.log(`data json value : ${JSON.stringify(json)}`)
            setDataLogin(json)
            if(dataLogin.messageCode == '00'){
                console.log('Data valid')
                console.log(`data login message ${dataLogin.messageCode}`)
                console.log(`data login message ${dataLogin.messageDesc}`)
                console.log(`data object list : ${JSON.stringify(json.listData)}`)
                // set data to async
                AsyncStorage.setItem('user', JSON.stringify(json.listData))
                .then(() => {
                    console.log('data saved on asyncstorage');
                })
                .catch((error) => {
                    console.log(error);
                });
                // show alert
                Alert.alert(
                    'LOGIN BERHASIL',
                    `Selamat datang ${usernameValue} `,
                    [
                    //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                        {text: 'OK', onPress: () => {
                              navigation.navigate('MainMenu'), setUsernameValue(''), setPassValue('')
                            }
                        },
                    ],
                    { cancelable: false }
                )
            } else if (dataLogin.messageCode == '06') {
                console.log('Data not valid')
                console.log(`data login message ${dataLogin.messageCode}`)
                console.log(`data login message ${dataLogin.messageDesc}`)
                // show toast
                if (Platform.OS === 'android') {
                    ToastAndroid.show('Periksa username / password Anda', ToastAndroid.SHORT)
                } else {
                    AlertIOS.alert(msg);
                }
                setUsernameValue(''), setPassValue('')
            }
        })
    }

    return(
        <View style={styles.container}>
            <MyStatusBar backgroundColor="#1d6ea4" barStyle="light-content" />
            <View style={styles.containerMainLogin}>
                <View style={styles.containerLogin}>
                    <Image source={logoRemote} style={styles.imageStyle}/>
                    <View>
                        <View style={{flexDirection:'row', alignItems:'center', paddingVertical:15, marginTop:20}}>
                            <MaterialCommunityIcons name="account" size={30} style={{marginRight:5, color:'#000000', flex:1}}/>
                            <TextInput style={styles.textInputStyle} placeholder='Masukkan Username' maxLength={15}
                            onChangeText={text => setUsernameValue(text)} value={usernameValue}/>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center', paddingVertical:15}}>
                            <MaterialCommunityIcons name="lock" size={30} style={{marginRight:5, color:'#000000', flex:1}}/>
                            <TextInput style={styles.textInputStyle} placeholder='Masukkan Password' maxLength={15} secureTextEntry={true}
                            onChangeText={text => setPassValue(text)} value={passValue}/>
                        </View>
                        <TouchableOpacity
                            style={styles.submitButtonStyleLogin} onPress={
                                () => {
                                    console.log(`username :  ${usernameValue}`)
                                    console.log(`pass :  ${passValue}`)
                                    postLogin()
                                }
                            }>
                        <Text style={styles.textStyleButton}> LOGIN </Text>
                        </TouchableOpacity>
                        {/* Button register */}
                        {/* <View style={styles.separator}></View>
                        <TouchableOpacity
                            style={styles.submitButtonStyleRegister} onPress={
                                () =>
                                // {Alert.alert('You tapped button Register');}
                                navigation.navigate('Register')
                            }>
                        <Text style={styles.textStyleButton}>REGISTER</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
                <Image source={logoPelindo} style={styles.imageStylePelindo}/>
            </View>
        </View>
    );
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#3498db',
        borderBottomLeftRadius:10,
    },
    containerMainLogin : {
        backgroundColor:'#ffff',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginTop:80,
        width:'100%',
        height:'100%',
    },
    containerLogin: {
        padding: 12,
        backgroundColor: '#F2F2F2',
        borderRadius:10,
        marginTop:35,
        marginLeft:25,
        marginRight:25,
    },
    imageStyle: {
        width:130,
        height:80,
        alignSelf:'center',
        marginTop:10,
        marginBottom:10
    },
    imageStylePelindo: {
        width:200,
        height:100,
        alignSelf:'center'
    },
    textStyleTitle: {
        marginTop:20,
        marginBottom:10
    },
    textInputStyle: {
        borderWidth:1,
        borderRadius:8,
        backgroundColor:'#dfe6e9',
        padding:10,
        flex:9,
        marginRight:10,
    },
    separator: {
        height:1,
        backgroundColor:'#000000',
    },
    submitButtonStyleLogin: {
        marginTop:20,
        marginBottom:20,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'#0984e3',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    textStyleButton:{
        color:'#fff',
        textAlign:'center',
    },
    submitButtonStyleRegister: {
        marginTop:20,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'#2ecc71',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
    },
})
