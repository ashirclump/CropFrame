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
  ScrollView,
  Dimensions
} from 'react-native';
import {DynamicCollage, StaticCollage} from 'react-native-images-collage';
import Header from './Header';
import LinearGradient from 'react-native-linear-gradient';
import { MatrixTransform } from 'react-native';
// const Sample= ({props, route, navigation}) => {
const Sample = ({props, route,navigation}) => {
  
//  const pic = (`data:${items.img.mime};base64,${items.img.data}`)
  //new
  let items = route.params;
    const source = [
      (`data:${items.img.mime};base64,${items.img.data}`),
      (`data:${items.img.mime};base64,${items.img.data}`),
      (`data:${items.img.mime};base64,${items.img.data}`),
    ];


  const collageRef = useRef(null);
  
  return (
    <View
      style={{
        backgroundColor: '#E4D9FB',
        height: Dimensions.get('window').height,
      }}>
      <LinearGradient
        colors={['#ffffff', '#E4D5F9']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={style.card}>
          <Header navigation={navigation} title="9 Grid" />
        </View>
      </LinearGradient>

      {/* <ScrollView> */}
        {/* <Header navigation={navigation} title="9 Grid" /> */}
         {/* <ScrollView style={{width:320,top:10,margin:2}}> */}
            <View style={{width:5,top:10,margin:2,width:10,height:500,marginRight:1000}}> 
              <StaticCollage style={{width:50,top:10,margin:2,width:10,height:500,marginRight:1000}}
          width={320}
     height={300}
     images={source}
     
 matrix={ [1,1,1] } /> 

       </View>
       {/* </ScrollView> */}
        {/* <View style={style.sectionContainer}>
          <DynamicCollage
            ref={collageRef}
            // containerStyle={borderColor='red'}
            width={340}
            height={340}
            images={source}
            replaceImage={source}
            matrix={[1,1,1]}
            const onEditButtonPress={(a, b) => {
              collageRef.current.replaceImage(
                `require('./Pic/boy.png')${(0 + Math.random(1) + 0).toFixed(
                  0,
                )}`,
                a,
                b,
              );
            }}
            EditButtonComponent={() => {
              return <View style={style.button} />;
            }}
            editButtonPosition={'bottom-right'}
            isEditButtonVisible={true}
          />
        </View> */}

       

        <View
          style={{
            backgroundColor: '#3672E9',
            width: 200,
            height: 59,
            // top: 50,
            margin: 20,
            left:50,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            // flex:1,
            // flexDirection:'column',
            // top:24,
            // margin:10}}
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              borderRadius: 15,
              // top:20,
            }}>
            <Text
              style={{
                color: '#FFF',
                fontSize: 18,
                // fontWeight: '500',
              }}>
              Crop It
            </Text>
          </TouchableOpacity>
        </View>
      {/* </ScrollView> */}
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    // top:300,
    width: 85,
    height: 25,
    // alignContent:'center',
    borderRadius: 15,
  },
  sectionContainer: {
    marginTop: 3,
    paddingHorizontal: 4,
    // borderColor: 'black',
  },
  
});
export default Sample;
