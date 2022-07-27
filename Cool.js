// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View,TouchableOpacity,Image, ImageBackground} from 'react-native';
// import * as ImagePicker from 'react-native-image-picker';

// // import RNFetchBlob from 'rn-fetch-blob';
// const options={
//   title: 'my pic app',
//   takePhotoButtonTitle: 'Take photo with your camera',
//   chooseFromLibraryButtonTitle: 'Choose photo from library',
// }
// export default class App extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       avatarSource: null
//     //   pic:null
//     }
//   }
// myfun=()=>{
// //   alert('clicked');

//   ImagePicker.launchImageLibrary(options, (response) => {
//     // console.log('Response = ', response);

//     if (response.didCancel) {
//     //   console.log('User cancelled image picker');
//     }
//     // else if (response.error) {
//     //   console.log('Image Picker Error: ', response.error);
//     // }

//     else {
//       let source = { uri: response.uri };

//       // You can also display the image using data:
//     //   let source = { uri: 'data:image/jpeg;base64,' + response.data };

//       this.setState({
//         avatarSource: source
//         // pic:response.data
//       });
//     }
//   });
// }
//     // _uploadPic = () => {
//     //     // alert('ddf');
//     //     RNFetchBlob.fetch('POST', 'https://unentertaining-sect.000webhostapp.com/war/upload.php', {
//     //         Authorization: "Bearer access-token",
//     //         otherHeader: "foo",
//     //         'Content-Type': 'multipart/form-data',
//     //     }, [
//     //         // element with property `filename` will be transformed into `file` in form data
//     //         { name: 'image', filename: 'avatar.png', data: this.state.pic }
//     //     ]).then((resp) => {
//     //         console.log(resp);
//     //         alert('your image uploaded successfully');
//     //         this.setState({ avatarSource: null });
//     //     });
//     // };
//     // get uploadPic() {
//     //     return this._uploadPic;
//     // }
//     // set uploadPic(value) {
//     //     this._uploadPic = value;
//     // }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>

//           <ImageBackground source={this.state.avatarSource}
//           style={{ backgroundColor:'red',width:'100%',height:300,margin:10}}/>

//         <TouchableOpacity style={{backgroundColor:'green',margin:10,padding:10}}
//         onPress={this.myfun}>
//           <Text style={{color:'#fff'}}>Select Image</Text>
//         </TouchableOpacity>

//         {/* <TouchableOpacity onPress={this.uploadPic}>
//           <Text>Upload</Text>
//         </TouchableOpacity> */}


//       </View>
//     );
//   }
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });



// import { Text, View ,Image, ScrollView} from 'react-native'
// import React, { Component } from 'react'
// const Img=[
//   require('./Pic/boy.png'),
// ];


// export class Cool extends Component {
//   render() {
//     return (
      
//       <ScrollView> 
//       <View>
      //   <View>
      //   <Text>ashir</Text>
      //   <Image source={Img}
      //     style={{ resizeMode: 'stretch' }} />
      // </View>

//       <View>
//           <Text>ashir</Text>
//           <Image source={Img}
//             style={{ resizeMode: 'stretch' }} />
//         </View>
        
//         <View>
//           <Text>ashir</Text>
//           <Image source={Img}
//             style={{ resizeMode: 'stretch' }} />
//         </View>
        
//         <View>
//           <Text>ashir</Text>
//           <Image source={Img}
//             style={{ resizeMode: 'stretch' }} />
//         </View>
        
        
//         <ScrollView/>
//         </View>
//         )
//   }
// }

// export default Cool

import React from 'react';
import { Text, View ,Image, ScrollView,origImageHeight,origImageWidth,CALC_ME,} from 'react-native';


const Img= require('./Pic/boy.png');

const Cool = () => {
  return (
    <ScrollView>
<View>
        <Text>ashir</Text>
        <Image source={Img}
          style={{ resizeMode: 'stretch'}}
       x={2}
        y={10}/>
      </View>


      <View>
        <Text>ashir</Text>
        <Image source={Img}
          style={{  resizeMode: 'stretch',width:origImageWidth, height:origImageHeight, top:CALC_ME, left:CALC_ME }} />
      </View>


      <View>
        <Text>ashir</Text>
        <Image source={Img}
          style={{ resizeMode: 'stretch',width:origImageWidth, height:origImageHeight, top:CALC_ME, left:CALC_ME }} />
      </View>

      <View>
        <Text>ashir</Text>
        <Image source={Img}
          style={{ resizeMode: 'stretch',width:origImageWidth, height:origImageHeight, top:CALC_ME, left:CALC_ME }} />
      </View>
    </ScrollView>
  );
}

export default Cool;