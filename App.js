
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Upload from './9Grid/Upload';
import Sample from './9Grid/Sample'
import NoCropBox from './9Grid/NoCropBox';





// import Dpsaverone from './DpSaverone';
// import Dpsavertwo from './Dpsavertwo';
// import Dpsaverthree from './DpSaverthree';
// import Dpsaverfour from './DpSavefour';
import Dpcreateone from './DP/Dpcreateone';
import DpTwo from './DP/DpTwo';
import DpPick from './DP/DpPick'




// import Cool from './Cool'
import SwipePick from './SwipePick';
import  Swipe1 from './Swipe1'
import Swipe2 from './Swipe2'
import Swipe3 from './Swipe3'
import Super from './Super'
import Launch from './Launch'
const Stack = createNativeStackNavigator()

export default function App() {
  // const newLocal = "A";
  return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen options={{ headerShown: false }} name="DpPick" component={DpPick} /> */}
        <Stack.Screen options={{ headerShown: false }} name="Dpcreateone" component={Dpcreateone} />
      
        <Stack.Screen options={{ headerShown: false }} name="DpTwo" component={DpTwo} /> 
        {/* <Stack.Screen options={{ headerShown: false }} name="Dpsaverfour" component={Dpsaverfour} /> */}
        {/* <Stack.Screen options={{ headerShown: false }} name="Dpsaverthree" component={Dpsaverthree} /> */}
        {/* <Stack.Screen options={{ headerShown: false }} name="Dpsavertwo" component={Dpsavertwo} /> */}
        {/* <Stack.Screen options={{ headerShown: false }} name="Dpsaverone" component={Dpsaverone} /> */} 
        


        {/* <Stack.Screen options={{ headerShown: false }}  name="SwipePick" component={SwipePick} /> */}
        {/* <Stack.Screen options={{ headerShown: false}} name="Swipe3" component={Swipe3} /> */}
        {/* <Stack.Screen options={{ headerShown: false }}  name="Super" component={Super} /> */}
        
        {/* <Stack.Screen options={{ headerShown: false}} name="Swipe1" component={Swipe1} /> */}
       
        
    
   {/* <Stack.Screen options={{ headerShown: false}} name="Swipe2" component={Swipe2} /> */}
 
   
      {/* <Stack.Screen options={{ headerShown: false }}  name="Super" component={Super} /> */}
        {/* <Stack.Screen options={{ headerShown: false }}  name="Upload" component={Upload} /> */}
        {/* <Stack.Screen options={{ headerShown: false }}  name="NoCropBox" component={NoCropBox} /> */}
        {/* <Stack.Screen options={{ headerShown: false }}  name="Sample" component={Sample} /> */}
       


           {/* <Stack.Screen options={{ headerShown: false }}  name="itech" component={itech} /> */}
       </Stack.Navigator>
    </NavigationContainer>

   
    
  );
}

