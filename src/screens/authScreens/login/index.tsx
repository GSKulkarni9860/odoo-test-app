import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TextField from '../../../components/TextField';
import {REGEX} from '../../../constants';
import {PRIMARY_COLOR, WHITE} from '../../../constants/colors';
import {authApiCall} from '../utils/authApiCall';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  // const navigation = useNavigation();

  // useEffect(() => {
  //   AsyncStorage.getItem('token').then(res => {
  //     if (res) {
  //       navigation.navigate('App');
  //     }
  //   });
  // }, []);

  const setAsyncData = async (res: any) => {
    const tokenString = res.headers['set-cookie']
      ? res.headers['set-cookie'][0]
      : null;

    const splitToken = tokenString?.split(';');
    const token = splitToken ? splitToken[0].split('=') : null;

    try {
      await AsyncStorage.setItem('token', token[1]);
    } catch (error) {
      console.log({error});
    }
  };

  const handleLogin = () => {
    authApiCall({userName, password})
      .then(res => {
        setAsyncData(res);
      })
      .catch(err => {
        console.log({err});
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Login</Text>
      </View>

      <TextField
        placeholder="Enter username"
        onTextChange={text => setUserName(text)}
        validationTest={text => {
          return REGEX.EMAIL.test(text);
        }}
        errorMessage={'Enter valid username'}
        containerStyle={{width: '90%'}}
      />
      <TextField
        placeholder="Enter password"
        onTextChange={text => setPassword(text)}
        containerStyle={{width: '90%'}}
        validationTest={text => {
          return text.length !== 0;
        }}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={{color: WHITE}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    height: '30%',
    justifyContent: 'center',
  },
  button: {
    width: '60%',
    backgroundColor: PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 8,
    margin: 8,
  },
});
