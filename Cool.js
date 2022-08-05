
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