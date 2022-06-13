import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Result = () => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/photos/quiz-time-concept-speech-bubble-with-pencil-on-yellow-background-picture-id1268465415?k=20&m=1268465415&s=612x612&w=0&h=dzRhC8EPw1bZTIDzxc0416FaL8IF71RCPNjBlYUgzQA=',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>

      <View>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
