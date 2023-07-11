import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import LoginForm from '../../base/login_form/LoginForm';

const {width} = Dimensions.get('window');
const LoginPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={require('./user.png')} />
          <Text style={styles.title}>Login</Text>
        </View>
        <LoginForm />
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
    backgroundColor: '#2d416c',
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: (width * 0.5),
  },
  title: {
    fontSize: 50,
    color: '#fff',
    marginBottom: 20,
    marginTop: 20,
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
