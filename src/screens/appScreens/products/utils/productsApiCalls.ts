import axios from 'axios';
import {PRODUCT_LIST_URL} from '../../../../constants/urls';

const fetchProductList = () => {
  return axios.get(PRODUCT_LIST_URL);
};
export default fetchProductList;
