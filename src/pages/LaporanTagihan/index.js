import React,  { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Picker, Text, View, Image, TouchableOpacity, StatusBar, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'sharingan-rn-modal-dropdown';

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

const Item = ({price_type, meter_from, meter_to, tariff}) => {
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

const LaporanTagihan = ({navigation}) => {
    const [listTagihans, setlistTagihans] = useState([]);
    const [valueSS, setValueSS] = useState('');

    const onChangeSS = (value) => {
        setValueSS(value);
    };
    // variable
    let var1='zoro';
    let var2='tes var 2';
    let bulan='';
    let tahun='';
    let textValue='';

     // object data post tagihan
     const [dataTagihan, setDataTagihan] = useState({
        messageCode: '',
        messageDesc : ''
    })
    // hit api with post data tagihan
    const postDataTagihan = () => {
        const dataForAPITagihan = {
                period : `${bulan}.${tahun}`,
                installation_code : 'L/07791/03'
        }
        fetch('http://10.1.237.101:8080/api/v1/taglistrik', {
            method: 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(dataForAPITagihan)
        })
        .then(response => response.json())
        .then(json => {
            setDataTagihan(json)
            console.log(`data json : ${JSON.stringify(json)}`)
            console.log(`data object list : ${JSON.stringify(json.listTagihanListrik)}`)
            DATA1.push(JSON.stringify(json.listTagihanListrik))
            console.log(`data from array : ${DATA1}`)
            setlistTagihans(DATA1)
        })
    }

    const onChangeHandler = (value) => {
        // console.log(`Selected value: ${value}`);
        // console.log(`Log var 1: ${var1}`);
        var1 = `${value}`;
        // var2 = `${value}`;
        bulan = `${value}`;
        // tahun = `${value}`;
        // console.log(`Log var 1 after update: ${var1}`);
        console.log(`bulan : ${bulan}`);
        // console.log(`tahun : ${tahun}`);
      }

      const onChangeHandlerTahun = (value) => {
        tahun = `${value}`;
        console.log(`tahun : ${tahun}`);
      }

    useEffect(() => {
    }, [])

    const DATA = [
        {
            "price_type": "KVARH",
            "meter_to": "27547",
            "meter_from": "27547",
            "ppju": "5",
            "tariff": "1590",
            "amount": "15367968",
            "period": "03.2017",
            "installation_code": "L/07791/03",
            "id": 43002355
        },
        {
            "price_type": "LWBP",
            "meter_to": "5615",
            "meter_from": "5447",
            "ppju": "5",
            "tariff": "1452",
            "amount": "15367968",
            "period": "03.2017",
            "installation_code": "L/07791/03",
            "id": 43002355
        },
        {
            "price_type": "WBP",
            "meter_to": "2358",
            "meter_from": "2358",
            "ppju": "5",
            "tariff": "2178",
            "amount": "15367968",
            "period": "03.2017",
            "installation_code": "L/07791/03",
            "id": 43002355
        }
    ];

    const DATA1 = []

    const renderItem = ({ item }) => (
        <Item price_type={item.price_type} meter_from={item.meter_from} meter_to={item.meter_to} tariff={item.tariff}/>
      );

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
                    <View style={styles.containerDate}>
                    <Dropdown
                        label="Bulan"
                        data={month}
                        disableSort
                        value={valueSS}
                        // onChange={onChangeSS}
                        onChange={value => onChangeHandler(value)}
                    />
                    <Dropdown
                        label="Tahun"
                        data={year}
                        value={valueSS}
                        // onChange={onChangeSS}
                        onChange={value => onChangeHandlerTahun(value)}
                    />
                    </View>
                    <View>
                        {/* <TouchableOpacity
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
                                {getData()}
                            }>
                        <Text style={{color:'#fff', textAlign:'center',}}> Cari with method get </Text>
                        </TouchableOpacity>
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
                                {postData()}
                            }>
                        <Text style={{color:'#fff', textAlign:'center',}}> Cari with mehod post </Text>
                        </TouchableOpacity> */}
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
                                {postDataTagihan()}
                            }>
                        <Text style={{color:'#fff', textAlign:'center',}}> Cari </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerTitle}>
                        <Text style={styles.titleTagihan}>Tagihan Listrik</Text>
                        <Text style={styles.dataBulan}>{textValue}</Text>
                        <View style={styles.containerInfoUser}>
                            <Text style={styles.titleH1}>Nama</Text>
                            {/* <Text style={styles.valueText}>PT BERKAH INDUSTRI MESIN ANGKAT</Text> */}
                            {/* <Text style={styles.valueText}>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
                            <Text style={styles.valueText}>{`${dataJob.name}`}</Text> */}
                            <Text style={styles.valueText}>{`${dataTagihan.messageCode}`}</Text>
                            <View style={styles.divView}/>
                            <Text style={styles.titleH1}>Alamat</Text>
                            {/* <Text style={styles.valueText}>JL.PRAPAT KURUNG UTARA 58 RT.002 RW.003 PERAK UTARA</Text> */}
                            {/* <Text style={styles.valueText}>{`${dataUser.email}`}</Text>
                            <Text style={styles.valueText}>{`${dataJob.job}`}</Text> */}
                            <Text style={styles.valueText}>{`${dataTagihan.messageDesc}`}</Text>
                            <View style={styles.divView}/>
                            <Text style={styles.titleH1}>No Installasi</Text>
                            <Text style={styles.valueText}>L/0210013017/00006</Text>
                            <View style={styles.divView}/>
                        </View>
                        <View style={styles.divView}/>
                        {/* {listTagihans.map(listTagihanListrik => {
                            return <Item price_type={listTagihanListrik.price_type} meter_from={listTagihanListrik.meter_from} meter_to={listTagihanListrik.meter_to} tariff={listTagihanListrik.tariff}/>
                        })} */}
                        <FlatList
                            data={DATA}
                            extraData={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.price_type}
                            refreshing={true}
                        />

                        {/* <View style={styles.containerInfoUser}>
                            <View style={{flexDirection:'row', alignContent:'center', alignSelf:'center', justifyContent:'center', width:'100%'}}>
                                <Text style={{flex:1, textAlign:'center', marginBottom:10, fontWeight:'bold', color:'#000000'}}>KWH Awal</Text>
                                <Text style={{flex:1, textAlign:'center', marginBottom:10, fontWeight:'bold', color:'#000000'}}>KWH Akhir</Text>
                                <Text style={{flex:1, textAlign:'center', marginBottom:10, fontWeight:'bold', color:'#000000'}}>Penggunaan</Text>
                            </View>
                            <View style={{flexDirection:'row',alignContent:'center', alignSelf:'center', justifyContent:'center'}}>
                                <Text style={{flex:1, textAlign:'center', color:'#ffffff', fontWeight:'bold',}}>2820</Text>
                                <Text style={{flex:1, textAlign:'center', color:'#ffffff', fontWeight:'bold',}}>2900</Text>
                                <Text style={{flex:1, textAlign:'center', color:'#ffffff', fontWeight:'bold',}}>80</Text>
                            </View>

                            <View style={styles.divView}/>

                            <Text style={styles.titleH1}>KWH WBP</Text>
                            <Text style={styles.valueText}>xxxx Kwh</Text>

                            <View style={styles.divView}/>

                            <Text style={styles.titleH1}>Biaya KWH WBP</Text>
                            <Text style={styles.valueText}>Rp xxxxx</Text>
                        </View> */}
                        <View style={styles.divView}/>

                        {/* <View style={styles.containerInfoUser}> */}
                            {/* <Text style={styles.titleH1}>KWH WBP</Text>
                            <Text style={styles.valueText}>xxxx Kwh</Text>

                            <View style={styles.divView}/>

                            <Text style={styles.titleH1}>Biaya KWH WBP</Text>
                            <Text style={styles.valueText}>Rp xxxxx</Text>

                            <View style={styles.divView}/> */}

                            {/* <Text style={styles.titleH1}>KWH LWBP</Text>
                            <Text style={styles.valueText}>xxxx Kwh</Text>

                            <View style={styles.divView}/>

                            <Text style={styles.titleH1}>Biaya KWH LWBP</Text>
                            <Text style={styles.valueText}>Rp xxxxx</Text>

                            <View style={styles.divView}/>

                            <Text style={styles.titleH1}>kVARH</Text>
                            <Text style={styles.valueText}>xxxx Kwh</Text>

                            <View style={styles.divView}/>

                            <Text style={styles.titleH1}>Biaya Denda kVARH</Text>
                            <Text style={styles.valueText}>xxxx</Text>

                            <View style={styles.divView}/> */}

                            {/* <Text style={styles.titleH1}>PPJU</Text>
                            <Text style={styles.valueText}>x %</Text> */}

                        {/* </View> */}

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
    containerDate: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft: 25,
        marginRight:25,
        marginTop:10,
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