import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert, Button, StatusBar} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
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
    const [usernameValue, setUsernameValue] = React.useState('');
    const [passValue, setPassValue] = React.useState('');

    return(
        <View style={styles.container}>
            <MyStatusBar backgroundColor="#1d6ea4" barStyle="light-content" />
            <View style={styles.containerMainLogin}>
                <View style={styles.containerLogin}>
                    <Image source={logoRemote} style={styles.imageStyle}/>
                    <View>
                        {/* <View style={{flexDirection:'row'}}>
                            <MaterialCommunityIcons name="account" size={30} style={styles.iconHeader}/>
                            <TextInput style={styles.textInputStyle} placeholder='Masukkan Username'/>
                        </View> */}
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
                        {/* <Text style={styles.textStyleTitle}>Password</Text>
                        <TextInput style={styles.textInputStyle} placeholder='Masukkan Password'/> */}
                        <TouchableOpacity
                            style={styles.submitButtonStyleLogin} onPress={
                                () =>
                                // {Alert.alert('You tapped button Login');}
                                // navigation.navigate('MainMenu')
                                {
                                    // Alert.alert(`Username : ${usernameValue} \nPassword : ${passValue}`)
                                    Alert.alert(
                                        'LOGIN',
                                        `Username : ${usernameValue} \nPassword : ${passValue}`,
                                        [
                                        //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                                          {text: 'OK', onPress: () => {
                                              navigation.navigate('MainMenu'), setUsernameValue(''), setPassValue('')
                                            }
                                            },
                                        ],
                                        { cancelable: false }
                                      )
                                    console.log(`Log input: ${usernameValue} ${passValue}`)
                                }
                            }>
                        <Text style={styles.textStyleButton}> LOGIN </Text>
                        </TouchableOpacity>
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
