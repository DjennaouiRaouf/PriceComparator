import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
interface SelectOptionProps {
  options: string[];
  onData: (data: string) => void;
}

const SelectOption: React.FC<SelectOptionProps> = ({options,onData}) => {
  const [option, setOption] = useState('');

  const handleValueChange = (option: string) => {
    setOption(option);
    onData(option);
  };
  return (
    <Picker style={styles.picker} onValueChange={handleValueChange}>
        {

        }
      <Picker.Item label="Enable 2FA auth" value="true" />
      <Picker.Item label="Disable 2FA auth" value="false" />
    </Picker>
  );
};

const styles = StyleSheet.create({
  picker: {
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
export default SelectOption;
