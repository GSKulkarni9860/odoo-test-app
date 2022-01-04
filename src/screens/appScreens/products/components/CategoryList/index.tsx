import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../../../../constants/colors';

interface CategoryListProps {
  list: Array<object>;
  onChange: (id: number) => void;
}

const CategoryList = ({list, onChange}: CategoryListProps) => {
  const [activeChip, setActiveChip] = useState(1);

  if (list?.length === 0) {
    return null;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={(item: any) => JSON.stringify(item.id)}
        horizontal
        renderItem={({item}: any) => (
          <TouchableOpacity
            style={[
              styles.chip,
              item.id === activeChip ? styles.activeChip : {},
            ]}
            onPress={() => {
              onChange(item.id);
              setActiveChip(item.id);
            }}>
            <Text
              style={[
                styles.chipText,
                item.id === activeChip ? styles.activeChipText : {},
              ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryList;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: PRIMARY_COLOR,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chip: {
    flex: 1,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipText: {
    color: WHITE,
    fontSize: 14,
  },
  activeChip: {
    backgroundColor: WHITE,
    padding: 4,
    borderRadius: 4,
  },
  activeChipText: {
    color: PRIMARY_COLOR,
    fontWeight: 'bold',
  },
});
