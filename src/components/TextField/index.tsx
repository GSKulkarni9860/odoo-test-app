import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {TextFieldProps} from '../../screens/authScreens/login/types';

const TextField = ({
  placeholder,
  onTextChange,
  keyboardType,
  containerStyle = {},
  inputStyle = {},
  validationTest,
  errorMessage = null,
  multiline = false,
}: TextFieldProps) => {
  const [isValid, setIsValid] = useState(true);
  const [textChanged, setTextChanged] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const onInputChange = (text: string) => {
    if (!textChanged) {
      setTextChanged(true);
    }
    onTextChange(text);
    if (validationTest) {
      setIsValid(validationTest(text));
    }
  };

  useEffect(() => {
    if (!textChanged) {
      return;
    }
    setShowErrorMessage(!isValid);
  }, [textChanged, isValid]);

  return (
    <View style={[styles.parent, containerStyle]}>
      <TextInput
        placeholder={placeholder}
        style={[
          styles.inputStyle,
          inputStyle,
          isValid ? {} : {borderColor: 'red'},
        ]}
        onChangeText={onInputChange}
        multiline={multiline}
        keyboardType={keyboardType}
      />
      {showErrorMessage && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  parent: {
    width: '100%',
  },
  inputStyle: {
    width: '100%',
    padding: 8,
    borderWidth: 0.7,
    borderColor: '#8a8a8a',
    marginVertical: 6,
  },
  errorText: {
    fontSize: 13,
    color: 'red',
    fontWeight: '300',
  },
});
