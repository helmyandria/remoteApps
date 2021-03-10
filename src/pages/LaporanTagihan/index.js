import React,  { useState, useEffect } from 'react'
import { StyleSheet, Picker, Text, View, Image, TouchableOpacity, StatusBar, Button } from 'react-native'
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

const LaporanTagihan = ({navigation}) => {
    const [selectedValueMonth, setSelectedValueMonth] = useState("des");
    const [selectedValueYear, setSelectedValueYear] = useState("2020");
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
    // object data get
    const [dataUser, setDataUser] = useState({
        email: '',
        first_name :'',
        last_name:''
    })
    // hit api with method get
    const getData = () => {
        fetch('https://reqres.in/api/users/2')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setDataUser(json.data)
        })
    }
    // object data post
    const [dataJob, setDataJob] = useState({
        name: '',
        job : ''
    })
    // hit api with post data
    const postData = () => {
        const dataForAPI = {
                name: `${var1}`,
                job: `${var2}`
        }
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(dataForAPI)
        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setDataJob(json)
            if (dataJob.name == 'zoro'){
                console.log('data name is zoro')
            } else {
                console.log('data name is  not zoro')
            }
        })
    }

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
        fetch('http://10.1.234.54:8080/api/v1/taglistrik', {
            method: 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(dataForAPITagihan)
        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setDataTagihan(json)
            // if (dataTagihan.name == 'zoro'){
            //     console.log('data name is zoro')
            // } else {
            //     console.log('data name is  not zoro')
            // }
            console.log(`Log data tagihan: ${dataTagihan.messageCode}`)
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
        // Call API Method GET
        // fetch('https://reqres.in/api/users/2')
        // .then(response => response.json())
        // .then(json => console.log(json))

        // Call API Method POST
        // const dataForAPI = {
        //     name: "zoro",
        //     job: "sword master"
        // }
        // fetch('https://reqres.in/api/users', {
        //     method: 'POST',
        //     headers : {
        //         'Content-type' : 'application/json'
        //     },
        //     body : JSON.stringify(dataForAPI)
        // })
        // .then(response => response.json())
        // .then(json => console.log(json))

    }, [])

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
                        {/* <Picker selectedValue={selectedValueMonth} style={styles.picker} onValueChange={(itemValue, itemIndex) => setSelectedValueMonth(itemValue)}>
                            <Picker.Item label="Januari" value="jan" />
                            <Picker.Item label="Februari" value="feb" />
                            <Picker.Item label="Maret" value="mar" />
                            <Picker.Item label="April" value="apr" />
                            <Picker.Item label="Mei" value="mei" />
                            <Picker.Item label="Juni" value="jun" />
                            <Picker.Item label="Juli" value="jul" />
                            <Picker.Item label="Agustus" value="ags" />
                            <Picker.Item label="September" value="sep" />
                            <Picker.Item label="Oktober" value="okt" />
                            <Picker.Item label="November" value="nov" />
                            <Picker.Item label="Desember" value="des" />
                        </Picker> */}

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
                        {/* <Picker selectedValue={selectedValueYear} style={styles.picker} onValueChange={(itemValue, itemIndex) => setSelectedValueYear(itemValue)}>
                            <Picker.Item label="2020" value="2020" />
                            <Picker.Item label="2021" value="2021" />
                            <Picker.Item label="2022" value="2022" />
                        </Picker> */}
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
                            <Text style={styles.valueText}>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
                            <Text style={styles.valueText}>{`${dataJob.name}`}</Text>
                            <Text style={styles.valueText}>{`${dataTagihan.messageCode}`}</Text>
                            <View style={styles.divView}/>
                            <Text style={styles.titleH1}>Alamat</Text>
                            {/* <Text style={styles.valueText}>JL.PRAPAT KURUNG UTARA 58 RT.002 RW.003 PERAK UTARA</Text> */}
                            <Text style={styles.valueText}>{`${dataUser.email}`}</Text>
                            <Text style={styles.valueText}>{`${dataJob.job}`}</Text>
                            <Text style={styles.valueText}>{`${dataTagihan.messageDesc}`}</Text>
                        </View>
                        <View style={styles.divView}/>
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
                                <Text style={{flex:1, textAlign:'center', color:'#ffffff', fontWeight:'bold',}}>2820</Text>
                                <Text style={{flex:1, textAlign:'center', color:'#ffffff', fontWeight:'bold',}}>2900</Text>
                                <Text style={{flex:1, textAlign:'center', color:'#ffffff', fontWeight:'bold',}}>80</Text>
                            </View>
                        </View>

                        <View style={styles.divView}/>

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