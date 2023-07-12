import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import Input from '../input/Input';

const SignUpForm: React.FC = ({}) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const getUsername = (username: string) => {
    setUsername(username);
  };
  const getPassword = (password: string) => {
    setPassword(password);
  };
  const getEmail = (email: string) => {
    setEmail(email);
  };
  const CreateAccount = () => {
    Alert.alert('display', `${username + ' ' + password + ' ' + email}`);
  };

  return (
    <View style={styles.form}>
      <Input
        placeholder={'Username'}
        placeholderTextColor={'#fff'}
        onData={getUsername}
      />
      <Input
        placeholder={'Email'}
        placeholderTextColor={'#fff'}
        onData={getEmail}
      />

      <Input
        placeholder={'Password'}
        placeholderTextColor={'#fff'}
        onData={getPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={() => CreateAccount()}>
        <Text style={styles.buttonText}>Create</Text>
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
});
export default SignUpForm;
