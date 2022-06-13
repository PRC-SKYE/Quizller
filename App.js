import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import Home from './screens/home'
import Quiz from './screens/quiz'
import Result from './screens/result'
import MyStack from './navigation'
import { NavigationContainer } from '@react-navigation/native'


const App = () => {
  return (
    <View styles={styles.conatiner}>
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
      
  
    </View>
  );
};

export default App

const styles = StyleSheet.create({

  conatiner:{
    paddingTop: 10,
  },
});