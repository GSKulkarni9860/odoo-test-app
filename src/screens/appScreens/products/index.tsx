import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import Header from '../../../components/Header';
import {PRIMARY_COLOR} from '../../../constants/colors';
import {ProductsScreenProps} from '../../../navigation/types';
import {globalStyle} from '../../../utilities/globalStyle';
import CategoryList from './components/CategoryList';
import ProductCard from './components/ProductCard';
import {
  fetchProductCategory,
  fetchProductList,
} from './utils/productsApiCalls';

const Products = ({navigation}: ProductsScreenProps) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [activeCatId, setActiveCatId] = useState(1);

  useEffect(() => {
    fetchProductCategory()
      .then(res => {
        setCategoryList(res.data.result);
      })
      .catch(err => {
        console.log({err});
      });
  }, []);

  useEffect(() => {
    setLoading(true);

    fetchProductList(activeCatId)
      .then(res => {
        setLoading(false);
        setList(res.data.result);
      })
      .catch(err => {
        console.log({err});
        setLoading(false);
      });
  }, [activeCatId]);

  const handleCardPress = (id: number) => {
    navigation.navigate('ProductDetails', {
      productId: id,
    });
  };

  return (
    <View style={globalStyle.container}>
      <Header title="Flipkart" showBackButton={false} />
      <CategoryList
        list={categoryList}
        onChange={id => {
          setActiveCatId(id);
        }}
      />
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
                pressCard={() => handleCardPress(item.id)}
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
    flexDirection: 'row',
    flex: 1,
    padding: 4,
    justifyContent: 'center',
  },
});
