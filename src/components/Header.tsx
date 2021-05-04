import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import userImg from '../assets/avatar.jpeg';


export function Header(){
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.greating}>Ola,</Text>
        <Text style={styles.userName}>Gabriel</Text>
      </View>
      <Image source={userImg} style={styles.image}/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:20,
    marginTop:getStatusBarHeight(),
  },
  greating:{
    fontSize:32,
    color:colors.heading,
    fontFamily:fonts.text
  },
  userName:{
    fontSize:32,
    color:colors.heading,
    fontFamily:fonts.heading,
    lineHeight:40
  },
  image:{
    width:70,
    height:70,
    borderRadius:40
  }
})