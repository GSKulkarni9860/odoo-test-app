import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../../../components/Header';
import {PRIMARY_COLOR} from '../../../constants/colors';
import {globalStyle} from '../../../utilities/globalStyle';
import ProductCard from './components/ProductCard';
import fetchProductList from './utils/productsApiCalls';

const Products = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchProductList()
      .then(res => {
        console.log({res});
        setLoading(false);
        setList(res.data.result);
      })
      .catch(err => {
        console.log({err});
        setLoading(false);
      });
  }, []);
  console.log({loading});

  return (
    <View style={globalStyle.container}>
      <Header title="Products" />
      <View style={styles.screen}>
        {loading ? (
          <ActivityIndicator size={'large'} color={PRIMARY_COLOR} />
        ) : (
          <FlatList
            data={list}
            keyExtractor={(item: any) => JSON.stringify(item.id)}
            numColumns={2}
            renderItem={({item}: any) => (
              <ProductCard
                productName={item.name}
                price={parseFloat(item.list_price).toFixed(2)}
                qty={parseFloat(item.qty_available).toFixed(2)}
                type={item.default_code}
                id={item.id}
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

export default Products;
const styles = StyleSheet.create({
  screen: {
    // width: '100%',
    flexDirection: 'row',
    flex: 1,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
