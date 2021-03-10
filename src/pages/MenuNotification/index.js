import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor, height: 24 }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );

const Notification = () => {
    return (
        <View style={styles.container}>
            {/* <MyStatusBar backgroundColor="#1d6ea4" barStyle="light-content" /> */}
            <StatusBar translucent  backgroundColor='transparent' />
            <Text style={styles.header}>Notification</Text>
            <View style={styles.containerContent}>
                <MaterialCommunityIcons name="bell" size={40} style={styles.iconContent} />
                <View>
                    <Text>Pembayaran bulan Desember 2020 telah terbayar !</Text>
                    <Text style={styles.dateContent}>10 Januari 2021</Text>
                </View>
            </View>
            <View style={styles.containerContent}>
                <MaterialCommunityIcons name="bell" size={40} style={styles.iconContent} />
                <View>
                    <Text>Pembayaran bulan November 2020 telah terbayar !</Text>
                    <Text style={styles.dateContent}>10 Desember 2021</Text>
                </View>
            </View>
            <View style={styles.containerContent}>
                <MaterialCommunityIcons name="bell" size={40} style={styles.iconContent} />
                <View>
                    <Text>Pembayaran bulan Oktober 2020 telah terbayar !</Text>
                    <Text style={styles.dateContent}>10 November 2021</Text>
                </View>
            </View>
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#ffffff',
        flex:1
    },
    header: {
        backgroundColor:'#3498db',
        color:'#ffff',
        padding:15,
        fontSize:20,
        marginBottom:15,
        paddingTop:34,
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
    iconContent:{
        marginRight:10
    },
    dateContent:{
        fontWeight:'bold',
        fontSize:12
    }
})
