import React from 'react';
import {Text, View} from 'react-native';
import Login from './src/pages/Login';
import MainMenu from './src/pages/MainMenu';
import Profile from './src/pages/Profile';
import Tes from './src/pages/Tes';

const App = () => {
  return (
    // View with fullscreen color
    // <View style={{backgroundColor:'#f1c40f', flex:1}}>
    //   <Text>Tes tes</Text>
    // </View>

    <Login/>
    // <Profile/>
    // <Tes/>
  );
};

export default App;

// import { StackNavigator, NavigationActions } from "react-navigation";

// const AppNavigator = StackNavigator(
//   {
//     First: { screen: Login },
//     Tes: { screen: Tes },
//   },
//   {
//     initialRouteName: "Tes",
//     headerMode: "none"
//   }
// )

// // Prevents double taps navigating twice
// const navigateOnce = (getStateForAction) => (action, state) => {
//   const { type, routeName } = action;
//   return (
//       state &&
//       type === NavigationActions.NAVIGATE &&
//       routeName !== 'PerformanceDetail' &&
//       routeName === state.routes[state.routes.length - 1].routeName
//   ) ? state : getStateForAction(action, state);
// };
// AppNavigator.router.getStateForAction = navigateOnce(AppNavigator.router.getStateForAction);

// export default () =>
//   <Root>
//       <AppNavigator />
//   </Root>;