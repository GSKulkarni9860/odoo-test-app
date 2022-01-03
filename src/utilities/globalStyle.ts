import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR} from '../constants/colors';

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  row: {
    // width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
