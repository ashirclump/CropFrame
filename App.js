
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Upload from './Upload';
// import Header from './Header';
import NoCropBox from './NoCropBox';
// import Sample from './Sample';
import Cool from './Cool'
import Info from './Info';
import  Profile from './Profile'
import Sample from './Sample'
const Stack = createNativeStackNavigator()

export default function App() {
  // const newLocal = "A";
  return (
    <>
      <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
       
        <Stack.Screen options={{ headerShown: false }}  name="Upload" component={Upload} />
        <Stack.Screen options={{ headerShown: false }}  name="NoCropBox" component={NoCropBox} />
        <Stack.Screen options={{ headerShown: false }}  name="Sample" component={Sample} />
        {/* <Stack.Screen options={{ headerShown: false }}  name="Info" component={Info} /> */}
   
        {/* <Stack.Screen options={{ headerShown: false }}  Header={false} name="Profile" component={Profile} /> */}
       
           {/* <Stack.Screen options={{ headerShown: false }}  name="itech" component={itech} /> */}
      
      
       </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
    </>
    
  );
}

// import { Text, View } from 'react-native'
// import React, { Component } from 'react'
// import Cool from './Cool'
// export class App extends Component {
//   render() {
//     return (
//       <View>
//         <S/>
//       </View>
//     )
//   }
// }

// export default App