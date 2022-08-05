import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { STYLES, COLORS } from './Styles';
import ImagePicker ,{launchImageLibrary}from 'react-native-image-picker';
// import {launchImageLibrary} from 'react-native-image-picker'
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export default function SimpleImagePicker() {
  const [imageSource, setImageSource] = useState(null);

  function selectImage() {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      noData: true,
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true
      }
    };

   
    launchImageLibrary(options, response => {
      if (response.Cancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };

        // ADD THIS
        setImageSource(source.uri);
      }
    });
  }

  return (
    <View
      style={[
        STYLES.flex,
        STYLES.centerContainer,
        { backgroundColor: COLORS.primaryDark }
      ]}
    >
      <Text style={[STYLES.title, { color: COLORS.primaryLight }]}>
        Simple Image Picker
      </Text>
      {/* ADD THIS */}
      <View style={STYLES.imageContainer}>
        {imageSource === null ? (
          <Image
            source={require('./Pic/boy.png')}
            style={STYLES.imageBox}
            resizeMode='contain'
          />
        ) : (
          <Image
            source={{ uri: imagesource }}
            style={STYLES.imageBox}
            resizeMode='contain'
          />
        )}
      </View>
      <TouchableOpacity
        onPress={selectImage}
        style={[
          STYLES.selectButtonContainer,
          { backgroundColor: COLORS.primaryLight }
        ]}
      >
        <Text style={STYLES.selectButtonTitle}>Pick an image</Text>
      </TouchableOpacity>
    </View>
  );
}
// Also, update the Styles.js file:

// export const STYLES = StyleSheet.create({
//   // rest of the styles remain same
//   // ADD BELOW
//   imageContainer: {
//     marginVertical: 20,
//     borderWidth: 5,
//     borderColor: '#ff5555'
//   },
//   imageBox: {
//     width: 256,
//     height: 256
//   }
// });