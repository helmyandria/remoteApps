import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Login from './src/pages/Login';
import MainMenu from './src/pages/MainMenu';
import Profile from './src/pages/Profile';
import Tes from './src/pages/Tes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function checkAsync() {
      let value = await AsyncStorage.getItem("user");
      if (value != null){
        console.log(`async not null`);
        setState(<MainMenu/>);
      } else {
        console.log(`async null`);
        setState(<Login/>);
      }
    }
    checkAsync();
    console.log(`state value : ${state}`);
  }, []);

  console.log(`state : ${state}`);

  return (
    // View with fullscreen color
    // <View style={{backgroundColor:'#f1c40f', flex:1}}>
    //   <Text>Tes tes</Text>
    // </View>

    <Login/>
    // <MainMenu/>
    // state
    // {state}
    // console.log(`state : ${state}`)

    // <Profile/>
    // <Tes/>
  );

  // return <React.Fragment>
  //   {state}
  // </React.Fragment>
};

export default App;