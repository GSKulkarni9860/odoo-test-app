import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  GRAY,
  PRIMARY_COLOR,
  WHITE,
} from '../../../../../constants/colors';
import {getImageUri} from '../../../../../utilities';

interface ProductCardProps {
  productName: string;
  price: string;
  qty: string;
  type: string;
  id: number;
  pressCard?: () => void;
}

const ProductCard = ({
  productName,
  price,
  qty,
  type,
  id,
  pressCard,
}: ProductCardProps) => {
  const uri = getImageUri(id);
  // console.log({uri});
  return (
    <TouchableOpacity style={styles.container} onPress={pressCard}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
      <View>
        <Text style={styles.productName} numberOfLines={2}>
          {productName}
        </Text>
        {type && <Text style={styles.otherText}>{`[${type}]`}</Text>}
        <Text style={styles.otherText}>{`Price : ₹ ${price}`}</Text>
        <Text
          style={styles.otherText}>{`On hand : ${qty} Units`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,
    padding: 8,
    margin: 4,
  },
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    marginVertical: 4,
  },
  otherText: {
    fontSize: 14,
    color: GRAY,
  },
  imageContainer: {
    width: '100%',
    flex: 1,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
