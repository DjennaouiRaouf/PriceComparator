import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

import Input from '../input/Input';
import SelectOption from '../select_option/SelectOption';

const SignUpForm: React.FC = ({}) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [auth, setAuth] = useState<string>();

  const getUsername = (username: string) => {
    setUsername(username);
  };
  const getPassword = (password: string) => {
    setPassword(password);
  };
  const getEmail = (email: string) => {
    setEmail(email);
  };
  const getPhone = (phone: string) => {
    setPhone(phone);
  };

  const getAuth = (auth: string) => {
    setAuth(auth);
  };
  const CreateAccount = () => {
    Alert.alert(
      'display',
      `${username + ' ' + password + ' ' + email + ' ' + auth}`,
    );
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
      <Input
        placeholder={'Phone Number'}
        placeholderTextColor={'#fff'}
        onData={getPhone}
      />
      <SelectOption
        datas={[
          {label: 'Disable 2FA', value: 'false'},
          {label: 'Enable 2FA', value: 'true'},
        ]}
        onData={getAuth}
      />
      <SelectOption
        datas={[
          {label: 'Disable 2FA', value: 'false'},
          {label: 'Enable 2FA', value: 'true'},
        ]}
        onData={getAuth}
      />
      <SelectOption
        datas={[
          {label: 'Disable 2FA', value: 'false'},
          {label: 'Enable 2FA', value: 'true'},
        ]}
        onData={getAuth}
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
