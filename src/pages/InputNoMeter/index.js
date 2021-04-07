import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert, StatusBar, FlatList} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import ImagePickerCamera from 'react-native-image-crop-picker';
import LaporanInputNoMeter from '../LaporanInputNoMeter';
import { Dropdown } from 'sharingan-rn-modal-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor, height: 24 }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );

const Stack = createStackNavigator();

function InputNoMeter({ navigation, route }) {
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
            <Stack.Navigator initialRouteName="InputNoMeter">
                <Stack.Screen name="InputNoMeter" component={InputNoMeterScreen} options={{ headerShown: false }} />
                <Stack.Screen name="LaporanInputNoMeter" component={LaporanInputNoMeter} options={{ headerShown: false }} />
            </Stack.Navigator>
        // </NavigationContainer>
    );
}

var PPJU = [
    {
      description: '',
      percentage: ''
    }
  ];

const Item = ({ description, percentage }) => {
    return (
        <View style={{flexDirection:'row'}}>
            <Text style={{flex : 5, fontWeight:'bold', color:'#000000'}}>{description}</Text>
            <Text style={{flex : 2, fontWeight:'bold', color:'#000000'}}>:</Text>
            <Text style={{flex : 5, fontWeight:'bold', color:'#000000'}}>{percentage}%</Text>
        </View>
    )
};

const InputNoMeterScreen = ({navigation}) => {
    const [image, setImage] = useState('https://www.arsenal.com/sites/default/files/styles/player_featured_image_1045x658/public/images/Tierney_1045x658_0.jpg?itok=mjvpH5MI');
    const [shouldShow, setShouldShow] = useState(false);
    const [containerImageNull, setContainerImageNull] = useState(true);
    const [namaPT, setNamaPT] = useState();
    const [alamatPT, setAlamatPT] = useState();
    const [list, setList] = useState([]);

    var nameArray=[
        {
            value: '',
            label: '',
        },
    ]

    const renderPPJU = ({ item }) => (
        <Item description={item.description} percentage={item.percentage} />
      );

    const onChangeHandler = (value) => {
        console.log(`installation_code selected : ${value}`);
        const search = nameArray => nameArray.label === value;
        console.log(`index on selected : ${nameArray.findIndex(search)-1}`);
        AsyncStorage.getItem('user')
        .then((value) => {
            const findByInstallationCode = value ? JSON.parse(value) : [];
            console.log(`data pt name : ${findByInstallationCode[nameArray.findIndex(search)-1].customer_name}`)
            console.log(`data pt address : ${findByInstallationCode[nameArray.findIndex(search)-1].installation_address} `)
            setNamaPT(findByInstallationCode[nameArray.findIndex(search)-1].customer_name);
            setAlamatPT(findByInstallationCode[nameArray.findIndex(search)-1].installation_address);
        })
        .catch((error) => {
        console.log(error);
        });
        getPriceType(value);
        getPpju(value);
    }

    const getPriceType = (value) => {
        const priceType = {
            installation_code : `${value}`,
        }
        fetch('http://10.1.234.88:8080/api/v1/pricetype', {
            method: 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(priceType)
        })
        .then(response => response.json())
        .then(json => {
            console.log(`data json value price type : ${JSON.stringify(json)}`)
        })
    }

    const getPpju = (value) => {
        const priceType = {
            installation_code : `${value}`,
        }
        fetch('http://10.1.234.88:8080/api/v1/ppju', {
            method: 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(priceType)
        })
        .then(response => response.json())
        .then(json => {
            console.log(`data json value ppju : ${JSON.stringify(json)}`)
            console.log(`value list data ppju : ${JSON.stringify(json.lisData)}`)

            // clear data PPJU
            PPJU = [];

            // set PPJU array to get data from json object
            const ppju = value ? JSON.parse(JSON.stringify(json.lisData)) : [];
            console.log(`value list data description ppju : ${ppju.map((item) => item.description)}`)
            for (let i=0; i < ppju.length; i++){
                PPJU.push({
                    description: ppju[i].description,
                    percentage: ppju[i].percentage
                })
                console.log(`desc : ${ppju[i].description}`)
                console.log(`percen : ${ppju[i].percentage}`)
            }
            // setList(`${json.lisData}`)
            setList(JSON.stringify(json.lisData))
            console.log(`array PPJU : ${PPJU}`)
            console.log(`value list : ${list}`)
        })
        // .finally(() => setLoading(false));
    }

    useEffect(() => {
          AsyncStorage.getItem('user')
          .then((value) => {
            const user = value ? JSON.parse(value) : [];
            console.log(`value data : ${JSON.stringify(user)}`);
            for (let i=0; i < user.length; i++){
                // console.log(`data loop : ${user[i].installation_code}`)
                nameArray.push(
                {
                    value: `${user[i].installation_code}`,
                    label: `${user[i].installation_code}`
                }
                );
              }
          })
          .catch((error) => {
            console.log(error);
          });

          console.log(`useEffect running`)
    }, []);

    return (
        <View style={styles.container}>
            <MyStatusBar backgroundColor="#1d6ea4" barStyle="light-content" />
            <View style={styles.header}>
                <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="chevron-left" size={30} style={styles.iconHeader}/>
                </TouchableOpacity>
                <Text style={styles.titleHeader}>Input No Meter</Text>
            </View>
            <ScrollView>
            <View style={styles.containerMainNoMeter}>
                <View style={styles.containerInfoUser}>
                    <Dropdown
                        label="No Installasi"
                        data={nameArray}
                        disableSort
                        value={nameArray}
                        // onChange={onChangeSS}
                        onChange={value => onChangeHandler(value)}
                    />
                    <View style={styles.divView}/>
                    <Text style={styles.titleH1}>Nama</Text>
                    <Text style={styles.valueText}>{`${namaPT}`}</Text>
                    <View style={styles.divView}/>
                    <Text style={styles.titleH1}>Alamat</Text>
                    <Text style={styles.valueText}>{`${alamatPT}`}</Text>
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.titlePriceType}>Title Price Type</Text>
                    <Text style={styles.titleH1}>KWH Awal</Text>
                    <TextInput style={styles.textInputStyle} keyboardType={'numeric'} maxLength={10} editable={false} />
                    <Text style={styles.titleH1}>KWH Akhir</Text>
                    <TextInput style={styles.textInputStyle} keyboardType={'numeric'} maxLength={6}/>
                    <Text style={styles.titleH1}>Penggunaan</Text>
                    <TextInput style={styles.textInputStyle} keyboardType={'numeric'} maxLength={10} editable={false} />
                    <Text style={styles.titleH1}>Foto No Meter</Text>
                    <TouchableOpacity onPress={()=>
                        {ImagePickerCamera.openCamera({
                                    width: 300,
                                    height: 400,
                                    // cropping: true
                                  }).then(image => {
                                    console.log(image);
                                    setImage(image.path);
                                    console.log('Image : '+image.path)
                                        setShouldShow(true)
                                        setContainerImageNull(false)
                                  });
                        }
                        }>
                        {shouldShow ? (
                            <Image
                                source={{uri:image}}
                                style={{ backgroundColor:'#000000', height: 450, width: '100%', resizeMode:'stretch'}
                            }/>
                        ) : null
                        }
                        {containerImageNull ? (
                            <View style={styles.layoutImage}>
                                <MaterialCommunityIcons name="plus-circle-outline" size={50} style={styles.iconContent}/>
                            </View>
                        ) : null}

                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', backgroundColor: '#F2F2F2', marginLeft:25, marginRight:25, padding:20, borderRadius:8, marginTop:20,}}>
                    {/* list PPJU */}
                    {/* <FlatList
                        data={list}
                        renderItem={renderPPJU}
                        keyExtractor={item => item.id}
                        extraData={list}
                        refreshing={list}
                    /> */}
                    {/* {list.map(lisData => {
                        return <Item description={'t'} percentage={'s'}/>
                    })} */}
                    {/* {list.map(value => {console.log(`mapping list`)})} */}
                    {/* {Object.entries(list).map(([key, value]) => {return console.log('object entries list'), <Text>{value}</Text>}, )} */}
                    {Object.entries(PPJU).map(([key, value]) => {return  <Text>{value.description} : <Text>{value.percentage} %</Text></Text>}, )}
                    {/* {Object.entries(list).map(([key, value]) => {console.log(`mapping : ${value}`)})} */}
                    {console.log(`ppju data : ${PPJU}`)}
                    {console.log(`list length : ${list.length}`)}
                    {console.log(`list description : ${list.description}`)}
                    {console.log(`isinya list di tampilan : ${list}`)}
                    {console.log(`get data from array : ${JSON.stringify(list.description)}`)}
                    {/* list PPJU */}
                </View>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity
                        style={styles.draftButtonStyle} onPress={
                            () =>
                             {Alert.alert('You tapped button draft');}
                        }>
                    <Text style={styles.titleButtonStyle}> DRAFT </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.postButtonStyle} onPress={
                            () =>
                            //  {Alert.alert('You tapped button posting');}
                             {navigation.navigate('LaporanInputNoMeter')}
                        }>
                    <Text style={styles.titleButtonStyle}> POSTING </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

export default InputNoMeter

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#3498db',
    },
    header: {
        backgroundColor:'#3498db',
        height:50, flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop:20
    },
    iconHeader: {
        marginLeft:25,
        marginRight:25,
        color: '#ffffff'
    },
    titleHeader: {
        color:'#fff',
        fontSize:18
    },
    mainContainer: {
        flexDirection: 'column',
        flex: 1,
    },
    containerMainNoMeter : {
        backgroundColor:'#ffff',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginTop:20,
        width: '100%',
        height: '100%',
    },
    title: {
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        marginTop:20,
        marginBottom:20,
    },
    containerInfoUser: {
        backgroundColor: '#F2F2F2',
        marginLeft:25,
        marginRight:25,
        padding:20,
        borderRadius:8,
        marginTop:20,
    },
    containerInput: {
        backgroundColor: '#F2F2F2',
        marginLeft:25,
        marginRight:25,
        padding:20,
        borderRadius:8,
        marginTop:20,
    },
    titlePriceType: {
        marginBottom:20,
        fontWeight:'bold',
        color:'#000000',
        textAlign: 'center'
    },
    titleH1: {
        marginBottom:10,
        fontWeight:'bold',
        color:'#000000'
    },
    valueText: {
        color:'#797979',
        fontWeight:'bold',
    },
    divView:{
        width:'100%',
        marginBottom:10,
    },
    textInputStyle: {
        borderWidth:1,
        marginBottom:20,
        borderRadius:8,
        backgroundColor:'#dfe6e9',
        padding:10,
        color:'#000000'
    },
    iconContent: {
        color: '#000000'
    },
    layoutImage: {
        height:200,
        backgroundColor:'#dfe6e9',
        borderColor:'#000000',
        borderWidth:1,
        borderRadius:8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    postButtonStyle: {
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginRight:30,
        backgroundColor:'#0984e3',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        marginBottom: 80,
        flex:1,
    },
    draftButtonStyle: {
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:30,
        backgroundColor:'#e74c3c',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        marginBottom: 80,
        flex:1,
    },
    titleButtonStyle:{
        color:'#fff',
        textAlign:'center',
    },
})