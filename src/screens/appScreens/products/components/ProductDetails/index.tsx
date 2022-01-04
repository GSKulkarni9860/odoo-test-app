import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../../../../components/Header';
import {
  GRAY,
  PRIMARY_COLOR,
  WHITE,
} from '../../../../../constants/colors';
import {
  ProductDetailsRouteProps,
  ProductDetailsScreenProps,
} from '../../../../../navigation/types';
import {getImageUri} from '../../../../../utilities';
import {globalStyle} from '../../../../../utilities/globalStyle';
import {fetchProductDetails} from '../../utils/productsApiCalls';

const ProductDetails = ({navigation}: ProductDetailsScreenProps) => {
  const {params} = useRoute<ProductDetailsRouteProps>();
  const [productDetails, setProductDetails] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchProductDetails(params.productId)
      .then(res => {
        // console.log({res});
        setLoading(false);
        setProductDetails(res.data);
      })
      .catch(err => {
        console.log({err});
        setLoading(false);
      });
  }, [params.productId]);

  return (
    <View style={[globalStyle.container, {backgroundColor: WHITE}]}>
      <Header onBackPress={() => navigation.navigate('Products')} />
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={PRIMARY_COLOR} />
        </View>
      ) : (
        <>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: getImageUri(params.productId)}}
              style={styles.image}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.title}>{productDetails.name}</Text>
            <Text style={{color: GRAY}}>
              {productDetails.l10n_in_hsn_description}
            </Text>
            <Text style={styles.price}>{`₹ ${parseFloat(
              productDetails.list_price,
            ).toFixed(2)}`}</Text>
            <TouchableOpacity style={styles.button}>
              <Text>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default ProductDetails;
const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: WHITE,
    marginTop: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  details: {
    flex: 1,
    margin: 8,
    padding: 8,
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    color: PRIMARY_COLOR,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    padding: 8,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
