import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, TextInput, Alert, Image, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import ImagePickerCamera from 'react-native-image-crop-picker';

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor, height: 24 }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );

const Stack = createStackNavigator();

const Pengaduan = ({navigation}) => {
        // const { navigation } = this.props;
        const [shouldShow, setShouldShow] = useState(false);
        const [containerImageNull, setContainerImageNull] = useState(true);
        const [image, setImage] = useState('https://www.arsenal.com/sites/default/files/styles/player_featured_image_1045x658/public/images/Tierney_1045x658_0.jpg?itok=mjvpH5MI');

        return (
            <View style={styles.container}>
                <MyStatusBar backgroundColor="#1d6ea4" barStyle="light-content" />
                <View style={styles.header}>
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="chevron-left" size={30} style={styles.iconHeader}/>
                    </TouchableOpacity>
                    <Text style={styles.titleHeader}>Pengaduan</Text>
                </View>
                <ScrollView>

                <View style={styles.containerContent}>
                    <Text style={styles.textStyle}>Silahkan isi form berikut ini untuk memberikan saran, pengaduan, atau laporan terkait KWH Meter PT Lamong Energi Indonesia</Text>
                    <TextInput
                        multiline={true}
                        numberOfLines={8}
                        backgroundColor='#f2f2f2f2'
                        placeholder="Isikan Pengaduan..."
                        style={{ textAlignVertical: "top", borderRadius:10, padding:20}}/>

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
                            style={{ backgroundColor:'#000000', height: 450, width: '100%', resizeMode:'stretch',marginTop:20}
                        }/>
                    ) : null
                    }

                    {containerImageNull ? (
                        <View style={styles.layoutImage}>
                            <MaterialCommunityIcons name="plus-circle-outline" size={50} style={styles.iconContent}/>
                        </View>
                    ) : null}

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.submitButtonStyle} onPress={
                        () =>
                        {Alert.alert('You tapped button Kirim Pengaduan');}
                        // navigation.navigate('MainMenu')
                        }>
                        <Text style={styles.textStyleButton}> Kirim </Text>
                    </TouchableOpacity>

                </View>
                </ScrollView>
            </View>
        )

}

export default Pengaduan

const styles = StyleSheet.create({
    container: {
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
    textStyle: {
        fontSize: 16,
        textAlign: 'justify',
        margin: 10,
        color: '#000000',
    },
    containerContent : {
        flex:1,
        backgroundColor:'#ffff',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginTop:20,
        width:'100%',
        height:'100%',
        paddingLeft:35,
        paddingRight:35,
    },
    textStyleButton:{
        color:'#fff',
        textAlign:'center',
    },
    submitButtonStyle: {
        marginTop:20,
        marginBottom:20,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'#2ecc71',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        marginBottom:100
    },
    layoutImage: {
        height:200,
        backgroundColor:'#f2f2f2',
        borderColor:'#000000',
        borderWidth:1,
        borderRadius:8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20
    },
})
