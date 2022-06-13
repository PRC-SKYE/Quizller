import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Title from '../components/title'

const Home = () => {
  return (
    <View>
      <Title/>
      <View style={styles.bannerContainer}>
        <Image source={{uri:'https://media.istockphoto.com/photos/quiz-time-concept-speech-bubble-with-pencil-on-yellow-background-picture-id1268465415?k=20&m=1268465415&s=612x612&w=0&h=dzRhC8EPw1bZTIDzxc0416FaL8IF71RCPNjBlYUgzQA='}}
        style={styles.banner}
        resizeMode="contain"
        />
        
      </View>
      <TouchableOpacity>
      <Text>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  banner:{
    height:300,
    width:300,
  },
  bannerContainer:{
    justifyContent:"center",
    alignItems:"center",
  },
});