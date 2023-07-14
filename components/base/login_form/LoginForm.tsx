import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import Input from '../input/Input';

interface LoginFormProps {
  onPress: () => void;
}
const LoginForm: React.FC<LoginFormProps> = ({onPress}) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const getUsername = (username: string) => {
    setUsername(username);
  };
  const getPassword = (password: string) => {
    setPassword(password);
  };
  const login = () => {
    Alert.alert('display', `${username + ' ' + password}`);
  };

  return (
    <View style={styles.form}>
      <Input
        placeholder={'Username'}
        placeholderTextColor={'#fff'}
        onData={getUsername}
      />
      <Input
        placeholder={'Password'}
        placeholderTextColor={'#fff'}
        onData={getPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={() => login()}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={onPress}>
        <Text style={styles.buttonText}>Sign-Up !</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: '80%',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  link: {
    marginTop: 20,
  },
});
export default LoginForm;
