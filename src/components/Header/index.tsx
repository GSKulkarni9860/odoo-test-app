import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyle} from '../../utilities/globalStyle';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  onSearchPress?: () => void;
  onCartPress?: () => void;
}

const Header = ({
  title,
  showBackButton = true,
  onBackPress,
  onSearchPress,
  onCartPress,
}: HeaderProps) => (
  <View style={[styles.container, globalStyle.row]}>
    <View style={globalStyle.row}>
      {showBackButton && (
        <TouchableOpacity onPress={onBackPress}>
          <Icon name="arrow-left" size={20} color={PRIMARY_COLOR} />
        </TouchableOpacity>
      )}
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
    <View style={globalStyle.row}>
      <TouchableOpacity onPress={onSearchPress}>
        <Icon name="magnify" size={20} color={PRIMARY_COLOR} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onCartPress}>
        <Icon name="cart" size={20} color={PRIMARY_COLOR} />
      </TouchableOpacity>
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
