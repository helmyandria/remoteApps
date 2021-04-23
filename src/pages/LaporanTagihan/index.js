import React,  { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'sharingan-rn-modal-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';

// dropdown list month
export const month = [
    {
        value: '01',
        label: 'Januari',
    },
    {
        value: '02',
        label: 'Februari',
    },
    {
        value: '03',
        label: 'Maret',
    },
    {
        value: '04',
        label: 'April',
    },
    {
        value: '05',
        label: 'Mei',
    },
    {
        value: '06',
        label: 'Juni',
    },
    {
        value: '07',
        label: 'Juli',
    },
    {
        value: '08',
        label: 'Agustus',
    },
    {
        value: '09',
        label: 'September',
    },
    {
        value: '10',
        label: 'Oktober',
    },
    {
        value: '11',
        label: 'November',
    },
    {
        value: '12',
        label: 'Desember',
    },
];

// dropdown list year
export const year = [
    {
        value: '2015',
        label: '2015',
    },
    {
        value: '2016',
        label: '2016',
    },
    {
        value: '2017',
        label: '2017',
    },
    {
        value: '2018',
        label: '2018',
    },
    {
        value: '2019',
        label: '2019',
    },
    {
        value: '2020',
        label: '2020',
    },
    {
        value: '2021',
        label: '2021',
    },
    {
        value: '2022',
        label: '2022',
    },
    {
        value: '2023',
        label: '2023',
    },
    {
        value: '2024',
        label: '2024',
    },
];

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor, height: 24 }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );

const LaporanTagihan = ({navigation}) => {
    // data tagihan
    const [listTagihans, setlistTagihans] = useState([]);
    // async from no install
    const [namaPT, setNamaPT] = useState();
    const [alamatPT, setAlamatPT] = useState();
    const [noInstallasi, setNoInstallasi] = useState();
    // data dropdown no installasi
    const [dNoInstallasi, setdNoInstallasi] = useState();
    // data param dropdown no installasi
    const [paramNoInstall, setParamNoInstall] = useState('');
    // month DD
    const [monthDD, setMonthDD] = useState();
    // year DD
    const [yearDD, setYearDD] = useState();

    // constructor
    useEffect(() => {
        AsyncStorage.getItem('user')
        .then((value) => {
          const user = value ? JSON.parse(value) : [];
        //   console.log(`value data : ${JSON.stringify(user)}`);
          let ptdata = [] ;
          for (let i=0; i < user.length; i++){
            // console.log(`data loop : ${user[i].installation_code}`)
            ptdata.push(
            {
                value: `${user[i].installation_code}`,
                label: `${user[i].installation_code}`
            }
            );
          }
            setdNoInstallasi(ptdata);
        })
        .catch((error) => {
          console.log(error);
        });
        console.log(`useEffect running`)
    }, []);

    //   handler no installasi
    const onChangeHandlerNoInstallasi = (value) => {
        setParamNoInstall(`${value}`)
        console.log(`installation_code selected : ${value}`);
        const search = dNoInstallasi => dNoInstallasi.label === value;
        console.log(`index on selected : ${dNoInstallasi.findIndex(search)}`);
        AsyncStorage.getItem('user')
        .then((value) => {
            const findByInstallationCode = value ? JSON.parse(value) : [];
            console.log(`data pt name : ${findByInstallationCode[dNoInstallasi.findIndex(search)].customer_name}`)
            console.log(`data pt address : ${findByInstallationCode[dNoInstallasi.findIndex(search)].installation_address} `)
            setNamaPT(findByInstallationCode[dNoInstallasi.findIndex(search)].customer_name);
            setAlamatPT(findByInstallationCode[dNoInstallasi.findIndex(search)].installation_address);
            setNoInstallasi(findByInstallationCode[dNoInstallasi.findIndex(search)].installation_code);
        })
        .catch((error) => {
        console.log(error);
        });
    }

    // handler month
    const onChangeHandlerBulan = (value) => {
        setMonthDD(`${value}`);
        console.log(`value month : ${value}`)
    }

    // handler year
    const onChangeHandlerTahun = (value) => {
        setYearDD(`${value}`)
        console.log(`value year : ${value}`);
    }

    // hit api with post data tagihan
    const postDataTagihan = (installation_code) => {
        console.log(`setMonth DD : ${monthDD}`);
        const dataForAPITagihan = {
                period : `${monthDD}.${yearDD}`,
                installation_code : `${paramNoInstall}`
        }
        fetch('http://10.1.234.74:8080/api/v1/taglistrik', {
            method: 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(dataForAPITagihan)
        })
        .then(response => response.json())
        .then(json => {
            console.log(`data json : ${JSON.stringify(json)}`);
            const data = installation_code ? JSON.parse(JSON.stringify(json.listTagihanListrik)) : [];
            console.log(`post data tagihan value : ${data}`);
            setlistTagihans(data)
        })
    }

    // render data tagihan
    const renderPriceTypes = ({ item }) => (
        <ItemPriceTypes price_type={item.price_type} meter_from={item.meter_from} meter_to={item.meter_to} tariff={item.tariff}/>
    );

    const ItemPriceTypes = ({price_type, meter_from, meter_to, tariff}) => {
        return (
            <View>
                <View style={styles.containerInfoUser}>
                    <View style={{flexDirection:'row', alignContent:'center', alignSelf:'center', justifyContent:'center', width:'100%'}}>
                        <Text style={{flex:1, textAlign:'center', marginBottom:10, fontWeight:'bold', color:'#000000'}}>KWH Awal</Text>
                        <Text style={{flex:1, textAlign:'center', marginBottom:10, fontWeight:'bold', color:'#000000'}}>KWH Akhir</Text>
                        <Text style={{flex:1, textAlign:'center', marginBottom:10, fontWeight:'bold', color:'#000000'}}>Penggunaan</Text>
                    </View>
                    <View style={{flexDirection:'row',alignContent:'center', alignSelf:'center', justifyContent:'center'}}>
                        <Text style={{flex:1, textAlign:'center', color:'#ffffff', fontWeight:'bold',}}>{meter_from}</Text>
                        <Text style={{flex:1, textAlign:'center', color:'#ffffff', fontWeight:'bold',}}>{meter_to}</Text>
                        <Text style={{flex:1, textAlign:'center', color:'#ffffff', fontWeight:'bold',}}>-</Text>
                    </View>
                    <View style={styles.divView}/>
                        <Text style={styles.titleH1}>KWH {price_type}</Text>
                        <Text style={styles.valueText}>xxxx Kwh</Text>
                        <View style={styles.divView}/>
                        <Text style={styles.titleH1}>Biaya KWH {price_type}</Text>
                        <Text style={styles.valueText}>Rp {tariff}</Text>
                </View>
                <View style={styles.divView}/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <MyStatusBar backgroundColor="#1d6ea4" barStyle="light-content" />
            <View style={styles.header}>
                <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="chevron-left" size={30} style={styles.iconHeader}/>
                </TouchableOpacity>
                <Text style={styles.titleHeader}>Laporan Tagihan Listrik</Text>
            </View>
            <ScrollView>
                <View style={styles.containerMainLapListrik}>
                    <View style={styles.containerNoInstallasi}>
                        <Dropdown
                            label="No Installasi"
                            data={dNoInstallasi}
                            disableSort
                            value={dNoInstallasi}
                            onChange={value => onChangeHandlerNoInstallasi(value)}
                        />
                    </View>
                    <View style={styles.containerDate}>
                        <Dropdown
                            label="Bulan"
                            data={month}
                            disableSort
                            value={month}
                            onChange={value => onChangeHandlerBulan(value)}
                        />
                        <Dropdown
                            label="Tahun"
                            data={year}
                            value={year}
                            onChange={value => onChangeHandlerTahun(value)}
                        />
                    </View>
                    <View>
                        <TouchableOpacity
                            style={{marginTop:20,
                                marginBottom:20,
                                paddingTop:15,
                                paddingBottom:15,
                                backgroundColor:'#0984e3',
                                borderRadius:10,
                                borderWidth: 1,
                                marginLeft: 25,
                                marginRight:25,
                                borderColor: '#fff',}} onPress={
                                () =>
                                {postDataTagihan(`${paramNoInstall}`)}
                            }>
                        <Text style={{color:'#fff', textAlign:'center',}}> Cari </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerTitle}>
                        <Text style={styles.titleTagihan}>Tagihan Listrik</Text>
                        <Text style={styles.dataBulan}></Text>
                        <View style={styles.containerInfoUser}>
                            <Text style={styles.titleH1}>Nama</Text>
                            <Text style={styles.valueText}>{`${namaPT}`}</Text>
                            <View style={styles.divView}/>
                            <Text style={styles.titleH1}>Alamat</Text>
                            <Text style={styles.valueText}>{`${alamatPT}`}</Text>
                            <View style={styles.divView}/>
                            <Text style={styles.titleH1}>No Installasi</Text>
                            <Text style={styles.valueText}>{`${noInstallasi}`}</Text>
                            <View style={styles.divView}/>
                        </View>
                        <View style={styles.divView}/>
                        <FlatList
                            data={listTagihans}
                            renderItem={renderPriceTypes}
                            keyExtractor={item => item.price_type}
                        />
                        <View style={styles.divView}/>
                        <View style={{flexDirection:'row', backgroundColor:'#42d17f', borderRadius:8, padding:20, marginTop:10,}}>
                            <Text style={{textAlign:'left', flex:5, color:'#000000', fontSize:18, fontWeight:'bold'}}>TOTAL</Text>
                            <Text style={{textAlign:'right', flex:5, color:'#e84118', fontSize:18, fontWeight:'bold'}}>Rp 2.000.000,-</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default LaporanTagihan

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
    containerMainLapListrik : {
        backgroundColor:'#ffff',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginTop:20,
        marginBottom:100,
        width:'100%',
        height:'100%'
    },
    containerNoInstallasi: {
        marginLeft: 25,
        marginRight:25,
        marginTop:10
    },
    containerDate: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft: 25,
        marginRight:25,
    },
    picker:{
        height: 50, width: 150
    },
    containerTitle: {
        padding: 12,
        backgroundColor: '#48a2de',
        borderRadius:8,
        marginTop:20,
        marginLeft:25,
        marginRight:25,
        borderColor: '#d9d9d9',
        borderWidth: 3,
    },
    titleTagihan: {
        textAlign:'center',
        fontSize:25,
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop:10,
    },
    dataBulan : {
        textAlign:'center',
        fontSize:18,
        color: '#ffffff',
        marginBottom:15,
    },
    dataTagihan: {
        textAlign:'center',
        fontSize:20,
        color: '#000000',
        marginTop:20,
        marginBottom:20,
    },
    containerInfoUser: {
        backgroundColor: '#70b6e5',
        padding:20,
        borderRadius:8,
    },
    titleH1: {
        marginBottom:10,
        fontWeight:'bold',
        color:'#000000'
    },
    valueText: {
        color:'#ffffff',
        fontWeight:'bold',
    },
    divView:{
        width:'100%',
        marginBottom:10,
    },
})