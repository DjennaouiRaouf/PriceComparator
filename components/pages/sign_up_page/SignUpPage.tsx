import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  ScrollView,
  Dimensions,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import SignUpForm from '../../base/sign_up_form/SignUpForm';

Orientation.lockToPortrait();

interface SignUpPageProps {
  navigation: any;
}
const screenWidth = Dimensions.get('screen').width;
const screenheight = Dimensions.get('screen').height;

const SignUpPage: React.FC<SignUpPageProps> = ({navigation}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, []);

  const scale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.5],
  });
  const opacity = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.5, 1],
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={styles.avatarContainer}>
          <Animated.Image
            style={[styles.avatar, {transform: [{scale}], opacity}]}
            source={require('./signup.png')}
          />
          <Text style={styles.title}>Sign Up</Text>
        </View>
        <SignUpForm />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2d2c38',
  },
  scrollview: {
    flexGrow: 1,
    width: screenWidth,
    height: screenheight * 1.03,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 50,
    color: '#fff',
    marginBottom: 20,
    marginTop: 20,
    textShadowOffset: {width: 2, height: 2}, // Shadow offset
    textShadowRadius: 4, // Shadow radius
  },
  avatarContainer: {
    marginTop: 10,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  avatar: {
    width: 150,
    height: 150,
  },
});
export default SignUpPage;
