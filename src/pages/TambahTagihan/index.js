import React , { useState } from 'react'
import { StyleSheet, Picker, Text, View, TouchableOpacity, TextInput, StatusBar, Alert } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DetailTambahTagihanListrik from '../DetailTambahTagihanListrik';
import { createStackNavigator } from '@react-navigation/stack';
import InputNoMeter from '../InputNoMeter';
import {Dropdown} from 'sharingan-rn-modal-dropdown';

const Stack = createStackNavigator();

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor, height: 24 }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );

function TambahTagihan() {
    return (
        // <NavigationContainer>
            <Stack.Navigator initialRouteName="TambahTagihan">
                <Stack.Screen name="TambahTagihan" component={TambahTagihanScreen} options={{ headerShown: false }} />
                <Stack.Screen name="DetailTambahTagihan" component={DetailTambahTagihanListrik} options={{ headerShown: false }} />
                <Stack.Screen name="InputNoMeter" component={InputNoMeter} options={{ headerShown: false }} />
            </Stack.Navigator>
        // </NavigationContainer>
    );
  }

  export const status = [
    {
        value: 'draft',
        label: 'Draft',
    },
    {
        value: 'post',
        label: 'Post',
    },
    ];

const TambahTagihanScreen = ({navigation}) => {
    const [selectedStatus, setSelectedStatus] = useState("Draft");
    const [valueSS, setValueSS] = useState('');
    const onChangeSS = (value) => {
        setValueSS(value);
    };
    return (
        <View style={{backgroundColor:'#3498db', flexDirection:'column'}}>
            <MyStatusBar backgroundColor="#1d6ea4" barStyle="light-content" />
            <View style={{backgroundColor:'#3498db', height:50, flexDirection:'row', justifyContent: 'flex-start', alignItems: 'center', paddingTop:20}}>
                <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="chevron-left" size={30} style={styles.iconHeader}/>
                </TouchableOpacity>
                <Text style={styles.titleHeader}>Tambah Tagihan Listrik</Text>
            </View>
            <View style={{backgroundColor:'#ffffff', borderTopLeftRadius:20, borderTopRightRadius:20, marginTop:20, width:'100%', height:'100%', paddingTop:20}}>
                <TextInput style={styles.textInputStyle} placeholder='Cari...' maxLength={30}/>
                <View style={{flexDirection:'row', marginBottom:20}}>
                    {/* <Text style={{ marginLeft:15, fontSize:16 }}>Filter Status : </Text> */}
                    {/* <Picker selectedStatus={selectedStatus} style={styles.picker} onValueChange={(itemValue, itemIndex) => setSelectedStatus(itemValue)}>
                        <Picker.Item label="Draft" value="Draft" />
                        <Picker.Item label="Post" value="Post" />
                    </Picker> */}
                    <Dropdown
                        label="Filter status"
                        data={status}
                        value={valueSS}
                        onChange={onChangeSS}
                    />
                </View>
                <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.navigate('DetailTambahTagihan')}>
                    <View style={styles.containerContent}>
                        <View style={{flex:9}}>
                            <Text>L/0210013017/000006</Text>
                            <Text>PT BERKAH INDUSTRI MESIN ANGKAT</Text>
                            <Text>Status : <Text style={{color:'#27ae60', fontWeight:'bold'}}>Post</Text></Text>
                        </View>
                        <View style={{flex:1}}>
                            <MaterialCommunityIcons name="chevron-right" size={40}  />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.navigate('InputNoMeter')}>
                    <View style={styles.containerContent}>
                        <View style={{flex:9}}>
                            <Text>L/0210324687/000056</Text>
                            <Text>PT BAROKAH INDUSTRI</Text>
                            <Text>Status : <Text style={{color:'#e74c3c', fontWeight:'bold'}}>Draft</Text></Text>
                        </View>
                        <View style={{flex:1}}>
                            <MaterialCommunityIcons name="chevron-right" size={40}  />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.containerContent}>
                    <View style={{flex:9}}>
                        <Text>L/093953017/000067</Text>
                        <Text>PT BERUSAHA SUKSES INDUSTRI</Text>
                        <Text>Status : <Text style={{color:'#27ae60', fontWeight:'bold'}}>Post</Text></Text>
                    </View>
                    <View style={{flex:1}}>
                        <MaterialCommunityIcons name="chevron-right" size={40}  />
                    </View>
                </View>
                <View style={{position: 'absolute', alignItems:'center', justifyContent:'center', right:20, bottom:'25%' }}>
                    <TouchableOpacity
                        style={styles.postButtonStyle} onPress={
                            () =>
                             {Alert.alert('You tapped button Add');}
                            //  {navigation.navigate('LaporanInputNoMeter')}
                            // this.FunctionToOpenSecondActivity
                        }>
                    <MaterialCommunityIcons name="plus-circle-outline" size={50} style={{color:'#3498db'}}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default TambahTagihan

const styles = StyleSheet.create({
    iconHeader: {
        color: '#ffffff',
        marginLeft:25,
        marginRight:25,
    },
    titleHeader: {
        color:'#fff',
        fontSize:18
    },
    textInputStyle: {
        borderWidth:1,
        marginBottom:20,
        marginHorizontal:20,
        borderRadius:8,
        backgroundColor:'#dfe6e9',
        paddingHorizontal:20,
    },
    containerContent:{
        flexDirection:'row',
        marginLeft:15,
        marginRight:15,
        marginBottom:15,
        backgroundColor:'#f2f2f2',
        borderRadius:8,
        justifyContent: 'flex-start',
        alignItems:'center',
        padding:20,
        borderLeftColor:'#f1c40f',
        borderLeftWidth:8
    },
    picker:{
        height: 20,
        width: 150
    },
})
