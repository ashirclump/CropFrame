import React, {Component, useState,useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView
} from 'react-native';
import Header from './Header';
import LinearGradient from 'react-native-linear-gradient';
import {DynamicCollage, StaticCollage} from 'react-native-images-collage';

const Nocropbox = ({props, route, navigation}) => {
  let items = route.params;
  // console.log(items.img)
  const collageRef = useRef(null);
  const Ifont = 'Poplin';
  
  const [Mypic, setMypic] =useState ({uri: `data:${items.img.mime};base64,${items.img.data}`});
  
  return (
    <View
      style={{
        backgroundColor: '#EFE7FC',
        height: Dimensions.get('window').height,
      }}>
      <LinearGradient
        colors={['#fff', '#ECDCF7']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={style.card}>
          <Header navigation={navigation} title="9 Grid" />
        </View>
      </LinearGradient>

      
            <View style={{  width: '100%', height: '55%',margin:13, marginTop: '15%' ,flexDirection:'row',}}>
                <Image source={Mypic} style={{ height: "100%", width: "90%" ,}} />
            </View>

      {/* <StaticCollage
        width={400}
        height={400}
        images={image}
        matrix={[1]}
      /> */}
{/* <ScrollView style={{width:320,top:10,margin:2}} horizontal={true}> */}
            {/* <View style={{width:5,top:10,margin:2,width:10,height:500,marginRight:1000}}> 
              <StaticCollage style={{width:50,top:10,margin:2,width:10,height:500,marginRight:1000}}
          width={320}
     height={300}
     images={Mypic}
     
 matrix={ [1,1,1] } /> 

       </View>
       <View style={{width:5,top:10,margin:2,width:10,height:500,marginRight:1000}}> 
              <StaticCollage style={{width:50,top:10,margin:2,width:10,height:500,marginRight:1000}}
          width={320}
     height={300}
     images={Mypi}
     
 matrix={ [1,1,1] } /> 

       </View> */}
       {/* </ScrollView> */}

{/* <DynamicCollage
    width={400}
    height={400}
    images={ photos }
    matrix={ [ 1, 1, 1, 1 ] } /> */}

{/* <View >
        <Text>boggypp</Text>
        <DynamicCollage
          ref={collageRef}
          // containerStyle={borderColor='red'}
          width={340}
          height={350}
          images={image}
          usenatidriver={true}
          // replaceImage={set}
          matrix={[1,1,1]}
          onPress={( m,i) => {
            collageRef.current.replaceImage(`require('./Pic/boy.png')${(150 + Math.random() + 100).toFixed(
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
      
      
      
      
      <LinearGradient
        colors={['#fff', '#ECDCF7']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View
          style={{
            top: 110,
            height: '100%',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Sample');
            }}
            style={{
              alignItems: 'center',
              borderRadius: 15,
              backgroundColor: '#3672E9',
              width: '70%',
              height: 59,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: `${Ifont}`,
                color: '#FFF',
                fontSize: 18,
                fontWeight: '500',
              }}>
              Crop It
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
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

export default Nocropbox;
