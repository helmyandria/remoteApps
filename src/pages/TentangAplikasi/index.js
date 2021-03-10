import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Animation from 'lottie-react-native';
import anim from '../../../src/assets/images/wave_loading.json';

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor, height: 24 }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );

class TentangAplikasi extends Component {
    componentDidMount() {
        this.animation.play();
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <MyStatusBar backgroundColor="#1d6ea4" barStyle="light-content" />
                <View style={styles.header}>
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.goBack()}>
                        <MaterialCommunityIcons name="chevron-left" size={30} style={styles.iconHeader}/>
                    </TouchableOpacity>
                    <Text style={styles.titleHeader}>Tentang Aplikasi</Text>
                </View>

                <View style={styles.containerContent}>
                    <Text style={styles.welcome}>Tentang Aplikasi on Update..</Text>
                    <Text style={styles.welcome}>Coming Soon</Text>
                    <View style={{flex:1, alignItems:'center'}}>
                        <Animation
                            ref={animation => {
                            this.animation = animation;
                            }}
                            style={{
                            width: 200,
                            height: 250
                            }}
                            loop={true}
                            source={anim}
                        />
                    </View>
                </View>
            </View>
                // <View style={styles.loadingModal}>
                //     <View  style={{ backgroundColor:'transparent', height:86, width:86, justifyContent:'center', alignItems:'center', borderRadius:6 }} >
                //     <Animation
                //             ref={animation => {
                //             this.animation = animation;
                //             }}
                //             style={{
                //             width: 80,
                //             height: 80
                //             }}
                //             loop={true}
                //             source={anim}
                //         />
                //     </View>
                // </View>
        )
    }
}

export default TentangAplikasi

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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#000000'
    },
    containerContent : {
        backgroundColor:'#ffff',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginTop:20,
        width:'100%',
        height:'100%'
    },
    loadingModal: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
