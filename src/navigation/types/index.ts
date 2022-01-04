import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type AppRoutesProps = {
  Products: undefined;
  ProductDetails: {
    productId: number;
  };
};

export type ProductsScreenProps = {
  navigation: StackNavigationProp<AppRoutesProps, 'Products'>;
};

export type ProductDetailsRouteProps = RouteProp<
  AppRoutesProps,
  'ProductDetails'
>;

export type ProductDetailsScreenProps = {
  navigation: StackNavigationProp<AppRoutesProps, 'ProductDetails'>;
};
