import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, StatusBar} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor, height: 24 }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );

const DetailTambahTagihanListrik = ({navigation}) => {
    return (
        <View style={{backgroundColor:'#3498db', flexDirection:'column'}}>
            <MyStatusBar backgroundColor="#1d6ea4" barStyle="light-content" />
            <View style={{backgroundColor:'#3498db', height:50, flexDirection:'row', justifyContent: 'flex-start', alignItems: 'center', paddingTop:20}}>
                <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="chevron-left" size={30} style={styles.iconHeader}/>
                </TouchableOpacity>
                <Text style={styles.titleHeader}>Detail Tambah Tagihan Listrik</Text>
            </View>
            <ScrollView style={{width:'100%', height:'100%',}}>
                <View style={{backgroundColor:'#ffffff', borderTopLeftRadius:20, borderTopRightRadius:20, marginTop:20, paddingTop:20,}}>
                    <View style={styles.containerInfoUser}>
                        <Text style={styles.titleH1}>Nama</Text>
                        <Text style={styles.valueText}>PT BERKAH INDUSTRI MESIN ANGKAT</Text>
                        <View style={styles.divView}/>
                        <Text style={styles.titleH1}>Alamat</Text>
                        <Text style={styles.valueText}>JL.PRAPAT KURUNG UTARA 58 RT.002 RW.003 PERAK UTARA</Text>
                    </View>

                    <View style={styles.containerInfoUser}>
                        <Text style={styles.titleH1}>No Installasi</Text>
                        <Text style={styles.valueText}>L/0210013017/00006</Text>
                        <View style={styles.divView}/>
                        <View style={{flexDirection:'row', alignContent:'center', alignSelf:'center', justifyContent:'center', width:'100%'}}>
                            <Text style={{flex:1, textAlign:'center', marginBottom:10, fontWeight:'bold', color:'#000000'}}>KWH Awal</Text>
                            <Text style={{flex:1, textAlign:'center', marginBottom:10, fontWeight:'bold', color:'#000000'}}>KWH Akhir</Text>
                            <Text style={{flex:1, textAlign:'center', marginBottom:10, fontWeight:'bold', color:'#000000'}}>Penggunaan</Text>
                        </View>
                        <View style={{flexDirection:'row',alignContent:'center', alignSelf:'center', justifyContent:'center'}}>
                            {/* <Text style={{flex:1, textAlign:'center', color:'#797979', fontWeight:'bold',}}>2820</Text> */}
                            <Text style={{flex:1, textAlign:'center', alignSelf:'center', color:'#797979', fontWeight:'bold',}}>0</Text>
                            <Text style={{flex:1, textAlign:'center', alignSelf:'center', color:'#797979', fontWeight:'bold',}}>0</Text>
                            <Text style={{flex:1, textAlign:'center', alignSelf:'center', color:'#797979', fontWeight:'bold',}}>0</Text>
                        </View>
                    </View>

                    <View style={styles.containerInfoUser}>
                            <Text style={styles.titleH1}>KWH WBP</Text>
                            <Text style={styles.valueText}>xxxx Kwh</Text>

                            <View style={styles.divView}/>

                            <Text style={styles.titleH1}>Biaya KWH WBP</Text>
                            <Text style={styles.valueText}>Rp xxxxx</Text>

                            <View style={styles.divView}/>

                            <Text style={styles.titleH1}>KWH LWBP</Text>
                            <Text style={styles.valueText}>xxxx Kwh</Text>

                            <View style={styles.divView}/>

                            <Text style={styles.titleH1}>Biaya KWH LWBP</Text>
                            <Text style={styles.valueText}>Rp xxxxx</Text>

                            <View style={styles.divView}/>

                            <Text style={styles.titleH1}>kVARH</Text>
                            <Text style={styles.valueText}>xxxx Kwh</Text>

                            <View style={styles.divView}/>

                            <Text style={styles.titleH1}>Biaya Denda kVARH</Text>
                            <Text style={styles.valueText}>xxxx Kwh</Text>

                            <View style={styles.divView}/>

                            <Text style={styles.titleH1}>PPJU</Text>
                            <Text style={styles.valueText}>x %</Text>

                        </View>

                        <View style={{flexDirection:'row', backgroundColor:'#42d17f', borderRadius:8, padding:20, marginTop:10, marginBottom:100, marginLeft:25, marginRight:25}}>
                            <Text style={{textAlign:'left', flex:5, color:'#000000', fontSize:18, fontWeight:'bold'}}>TOTAL</Text>
                            <Text style={{textAlign:'right', flex:5, color:'#e84118', fontSize:18, fontWeight:'bold'}}>Rp 2.000.000,-</Text>
                        </View>

                    {/* <TouchableOpacity
                        style={styles.submitButtonStyleGreen} onPress={
                            () => {Alert.alert('You tapped button calculate');}
                            // this.FunctionToOpenSecondActivity
                        }>
                    <Text style={styles.titleButtonStyle}> CALCULATE </Text>
                    </TouchableOpacity>

                    <View style={styles.containerCalculate}>
                        <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:30, marginHorizontal:20}}> 234.675</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.submitButtonStyleBlue} onPress={
                            () => {Alert.alert('You tapped button simpan');}
                            // this.FunctionToOpenSecondActivity
                        }>
                    <Text style={styles.titleButtonStyle}> SIMPAN </Text>
                    </TouchableOpacity> */}
                </View>
            </ScrollView>
        </View>
    )
}

export default DetailTambahTagihanListrik

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
        borderRadius:8,
        backgroundColor:'#dfe6e9',
        flex:1,
        margin:5,
        width:35,
        height:40,
        paddingHorizontal:10
    },
    submitButtonStyleGreen: {
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'#2ecc71',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    submitButtonStyleBlue: {
        paddingTop:15,
        paddingBottom:15,
        marginLeft:30,
        marginRight:30,
        marginBottom:80,
        backgroundColor:'#0984e3',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    titleButtonStyle:{
        color:'#fff',
        textAlign:'center',
    },
    containerCalculate: {
        backgroundColor: '#F2F2F2',
        marginLeft:25,
        marginRight:25,
        padding:20,
        borderRadius:8,
        marginTop:10,
        marginBottom:10,
    }
})
