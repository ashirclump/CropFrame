
import { Text, View ,ImageBackground,TouchableOpacity,Modal,Pressable} from 'react-native'
import React, { Component ,useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import * as ImagePicker from 'react-native-image-picker';
import ImagePicker, { openPicker } from 'react-native-image-crop-picker';
// import { openCamera } from 'react-native-image-crop-picker';





export default function Info({ route, navigation }) {
    // const [modalVisible, setModalVisible] = useState(false);

    const Uploadimage = ({ navigation }) => {
    const [profilePicture, setprofilePicture] = useState('');
    const openPicker = () => 
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: false,
            includeBase64: true
        }).then(image => {
            // console.log("hello");
            navigation.navigate("Profile", { profile: profilePicture })
            // } else { });
        })
            .catch((e) => console.log(e))
    }
    // const pickImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         // mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //         // allowsEditing: true,
    //         aspect: [1, 1],
    //         quality: 1,
    //     });

    //     if (!result.cancelled) {
    //         setprofilePicture(result.uri);
    //         setModalVisible(false);
    //     }
    // }
    // const openCamera = async () => {
    //     const permissionResult = await ImagePicker.requestCameraPermissionsAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //         allowsEditing: true,
    //         aspect: [1, 1],
    //         quality: 1,
    //     });
    //     if (permissionResult.granted === false) {
    //         alert("You've refused to allow this appp to access your camera!");
    //         return;
    //     }
    //     const result = await ImagePicker.launchCameraAsync();
    //     // console.log(result);
    //     if (!result.cancelled) {
    //         setprofilePicture(result.uri);
    //         setModalVisible(false);
    //     }
    // }
    
    // if (profilePicture = '') {
    //     nextbtn = <NextBtn txt={"Next"} onPress={() => { navigation.navigate('Profile', { profile: profilePicture }) }} />
    // } else {
    //     nextbtn = <Text></Text>
    // }
    // var bg = ''
    // if (profilePicture != '') {
    //     bg = { backgroundColor: 'transparent' }
    // }

    return (
        <View style={{ flex: 1,margin:20 }}>
            <View style={[ {paddingTop: 64}]}>
                {/* {nextbtn} */}
                <Text style={[]}>Your Info</Text>
                <Text style={[]}>Enter your name and add a profile picture.</Text>
                <ImageBackground
                    // source={{ uri: profilePicture }}
                    // resizeMode="cover"
                    style={{ marginTop: 18 }}
                    imageStyle={{ borderRadius: 100 }}
                >
                    <TouchableOpacity
                        style={[]}
                        onPress={() => {openPicker}}
                    >
                         <AntDesign name="pluscircle" size={90} color="#5E17EB" />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            {/* <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                statusBarTranslucent={true}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={[  {margin:50} ]}>
                    <View style={ {} }>
                        <Text style={{}  }>Choose Info Picture</Text>
                        <View style={[  {flexDirection: 'row'}]}>
                            <TouchableOpacity
                                style={[ {color:'red'} ]}
                                onPress={openCamera}
                            >
                                 <AntDesign name="circle" size={30} color="#5E17EB" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[  ]}
                                onPress={pickImage}
                            >
                                 <AntDesign name="pluscircle" size={30} color="#5E17EB" />
                            </TouchableOpacity>
                        </View>
                        <Pressable
                            style={[ { minWidth: 260 }]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={[  ]}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal> */}
        </View >
    )

}


// import { Text, View } from 'react-native'
// import React, { Component } from 'react'

// export class info extends Component {
//   render() {
//     return (
//       <View>
//         <Text>info</Text>
//       </View>
//     )
//   }
// }

// export default info;