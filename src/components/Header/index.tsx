import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyle} from '../../utilities/globalStyle';

interface HeaderProps {
  title: string;
}

const Header = ({title}: HeaderProps) => (
  <View style={[styles.container, globalStyle.row]}>
    <View style={globalStyle.row}>
      <Icon name="arrow-left" size={20} color={PRIMARY_COLOR} />
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={globalStyle.row}>
      <Icon name="magnify" size={20} color={PRIMARY_COLOR} />
      <Icon name="cart" size={20} color={PRIMARY_COLOR} />
    </View>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    backgroundColor: WHITE,
    padding: 8,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    marginLeft: 10,
  },
});
