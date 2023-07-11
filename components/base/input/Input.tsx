import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

interface InputProps {
  placeholder?: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  onData: (data: string) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  onData,
}) => {
  const [text, setText] = useState('');

  const handleTextChange = (inputText: string) => {
    setText(inputText);
    onData(inputText);
  };
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      value={text}
      onChangeText={handleTextChange}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 0,
    padding: 10,
    fontSize: 18,
    marginTop: 10,
    color: '#fff',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
});
export default Input;
