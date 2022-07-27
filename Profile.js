import { Text, View ,Image} from 'react-native'
import React, { Component } from 'react'



export default function Profile({ route, navigation }) {
    const { profile } = route.params;
    var profilePicture = JSON.stringify(profile);
    console.log(profilePicture)
return (
        <View style={{flex: 1}}>
            <View style={[ { paddingTop: 64 }]}>
                <Text style={[]}>Your Profile</Text>
                <Text style={[]}>Enter your name and add a profile picture.</Text>
                <Image source={profilePicture} style={{ width: 136, borderRadius: 100, height: 136, backgroundColor: '#fff' }} />
            </View>
        </View >
    )

}