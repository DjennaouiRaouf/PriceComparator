import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import LoginForm from '../../base/login_form/LoginForm';
import Orientation from 'react-native-orientation-locker';

Orientation.lockToPortrait();
const LoginPage: React.FC = () => {
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
      <View style={styles.avatarContainer}>
        <Animated.Image
          style={[styles.avatar, {transform: [{scale}], opacity}]}
          source={require('./login.png')}
        />
        <Text style={styles.title}>Login</Text>
      </View>
      <LoginForm />
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
export default LoginPage;
