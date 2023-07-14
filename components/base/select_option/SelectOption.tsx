import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
interface data {
  label: string;
  value: string;
}
interface SelectOptionProps {
  datas: data[];
  onData: (data: string) => void;
}

const SelectOption: React.FC<SelectOptionProps> = ({datas, onData}) => {
  const [option, setOption] = useState('');

  const handleValueChange = (option: string) => {
    setOption(option);
    onData(option);
  };
  return (
    <Picker
      style={styles.picker}
      onValueChange={handleValueChange}
      selectedValue={option}>
      {datas.map((item, index) => (
        <Picker.Item key={index} label={item.label} value={item.value} />
      ))}
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
