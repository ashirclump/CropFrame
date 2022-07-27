// import React, {useRef, useState} from 'react';
// import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
// import {DynamicCollage} from 'react-native-images-collage';

// const NoCropBox = ({ navigation}) => {
//   // const  img  = route.params};
//   const collageRef = useRef(null);

//   // const [Mypic, setMypic] = useState({uri: `data:${img.mime};base64,${img.data}`});
//   const set = [
//     require('./Pic/boy.png'),
//     require('./Pic/boy.png'),
//     require('./Pic/boy.png'),
//     require('./Pic/boy.png'),
//     require('./Pic/boy.png'),
//     require('./Pic/boy.png'),
//     require('./Pic/boy.png'),
//     require('./Pic/boy.png'),
//     require('./Pic/boy.png'),
//   ];

//   function NoCropBox() {

//     return (
//       <>
//         <StatusBar barStyle="dark-content" />
//         <SafeAreaView>
//           <View style={styles.sectionContainer}>
//             <DynamicCollage
//               ref={collageRef}
//               // containerStyle={borderColor='red'}
//               width={'100%'}
//               height={500}
//               images={set}
//               matrix={[3, 3, 3]}
//               onEditButtonPress={(m, i, j) => {
//                 collageRef.current.replaceImage(`require('./Pic/boy.png')${(150 + Math.random() + 10).toFixed(10)}`,
//                   m,
//                   i,
//                   j
//                 );
//               } }

//               // collageRef.current.replaceImage("https://picsum.photos/200", m, i);

//               EditButtonComponent={() => {
//                 return <View style={styles.button} />;
//               } }
//               editButtonPosition={'bottom-right'}
//               isEditButtonVisible={true} />
//           </View>
//           <View style={{ width: '100%', height: '55%', margin: 13, marginTop: '15%', flexDirection: 'row', }}>
//             <Image source={Mypic} style={{ height: "100%", width: "90%" }} />
//           </View>
//         </SafeAreaView>
//       </>
//     );

//   };
// }

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: 'blue',
//     // top:100,
//     width: 25,
//     height: 25,
//     // alignContent:'center',
//     // borderRadius:15
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//     borderColor: 'red',
//   },
// });

// export default NoCropBox;

import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {DynamicCollage, StaticCollage} from 'react-native-images-collage';

// const Sample= ({props, route, navigation}) => {


const Sample = ({props, route}) => {
  
  const collageRef = useRef(null);
  const photos = [
    require('./Pic/boy.png'),
    // require('./Pic/boy.png'),
    // require('./Pic/boy.png'),
    // require('./Pic/boy.png'),
    // require('./Pic/boy.png'),
    // require('./Pic/boy.png'),
    // require('./Pic/boy.png'),
    // require('./Pic/boy.png'),
    // require('./Pic/boy.png'),
  ];
  
  return (
    <View>
      <ScrollView style={{width:320,top:10,margin:2}} horizontal={true}>
            <View style={{width:5,top:10,margin:2,width:10,height:500,marginRight:1000}}> 
              <StaticCollage style={{width:50,top:10,margin:2,width:10,height:500,marginRight:1000}}
          width={320}
     height={300}
     images={photos}
     
 matrix={ [1,1,9] } /> 

       </View>
       </ScrollView>
      {/* <View style={style.sectionContainer}>
        <Text>boggypp</Text>
        <DynamicCollage
          ref={collageRef}
          // containerStyle={borderColor='red'}
          width={400}
          height={400}
          images={photos}
          // replaceImage={set}
          matrix={[3, 3, 3]}
          onPress={(m, i) => {
            collageRef.current.replaceImage(
              `require('./Pic/boy.png')${(150 + Math.random() + 100).toFixed(
                10,
              )}`,
              m,
              i,
            );
          }}
          EditButtonComponent={() => {
            return <View style={style.button} />;
          }}
          editButtonPosition={'bottom-right'}
          isEditButtonVisible={true}
        />
      </View> */}

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('');
        }}
        style={{
          alignItems: 'center',
          borderRadius: 15,
          backgroundColor: '#3672E9',
          width: '70%',
          height: 59,
          top: 800,
          margin: 55,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#FFF',
            fontSize: 18,
            fontWeight: '500',
          }}>
          Crop It
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    // top:100,
    width: 25,
    height: 25,
    // alignContent:'center',
    borderRadius: 15,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 4,
    borderColor: 'black',
  },
});
export default Sample;
