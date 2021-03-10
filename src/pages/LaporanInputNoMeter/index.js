import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from '../../assets/images/logo-remote.png'

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor, height: 24 }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );

class LaporanInputNoMeter extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <MyStatusBar backgroundColor="#1d6ea4" barStyle="light-content" />
                <View style={styles.header}>
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.goBack()}>
                        <MaterialCommunityIcons name="chevron-left" size={30} style={styles.iconHeader}/>
                    </TouchableOpacity>
                    <Text style={styles.titleHeader}>Laporan Input No Meter</Text>
                </View>

                <ScrollView>
                    <View style={styles.containerContent}>
                        <Image source={logo} style={{width:130, height:80, alignSelf:'center', marginTop:10, marginBottom:10}} />
                        <Text style={styles.titleContent}>Nama Pelanggan</Text>
                        <Text style={styles.valueContent}>Sri Wedari</Text>

                        <Text style={styles.titleContent}>Nomor Pelanggan</Text>
                        <Text style={styles.valueContent}>L123/xxx/xxx</Text>

                        <View style={styles.separator}/>

                        <Text style={styles.titleContent}>Total Biaya Tagihan bulan November</Text>
                        <Text style={styles.valueContent}>Rp xxxx</Text>

                        <Text style={styles.titleContent}>KWH awal bulan November</Text>
                        <Text style={styles.valueContent}>xxxx Kwh</Text>

                        <Text style={styles.titleContent}>KWH akhir bulan November</Text>
                        <Text style={styles.valueContent}>xxxx Kwh</Text>

                        <Text style={styles.titleContent}>Selisih KWH bulan November</Text>
                        <Text style={styles.valueContent}>xxxx Kwh</Text>

                        <View style={styles.separator}/>

                        <Text style={styles.titleContent}>KWH WBP</Text>
                        <Text style={styles.valueContent}>xxxx Kwh</Text>

                        <Text style={styles.titleContent}>Biaya kwh WBP</Text>
                        <Text style={styles.valueContent}>Rp xxxx</Text>

                        <Text style={styles.titleContent}>KWH LWBP</Text>
                        <Text style={styles.valueContent}>xxxx Kwh</Text>

                        <Text style={styles.titleContent}>Biaya kwh LWBP</Text>
                        <Text style={styles.valueContent}>Rp xxxx</Text>

                        <View style={styles.separator}/>

                        <Text style={styles.titleContent}>kVARH</Text>
                        <Text style={styles.valueContent}>xxxx Kwh</Text>

                        <Text style={styles.titleContent}>Biaya Denda kVARH</Text>
                        <Text style={styles.valueContent}>Rp xxxx</Text>

                        <Text style={styles.titleContent}>PPJU</Text>
                        <Text style={styles.valueContent}>x %</Text>

                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default LaporanInputNoMeter

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
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
        marginBottom:100,
        width:'100%',
        height:'100%'
    },
    titleContent: {
        fontSize: 18,
        textAlign: 'left',
        marginTop:5,
        marginLeft: 10,
        marginRight: 10,
        color: '#000000',
        fontWeight: 'bold'
    },
    valueContent: {
        fontSize: 16,
        textAlign: 'left',
        marginLeft:10,
        marginBottom:10,
        color: '#000000'
    },
    separator : {
        width:'100%',
        height:3,
        backgroundColor:'#f2f2f2'
    }
})
