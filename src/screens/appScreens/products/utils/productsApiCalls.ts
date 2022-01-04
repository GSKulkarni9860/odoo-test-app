import axios from 'axios';
import {
  PRODUCT_CATEGORY_URL,
  PRODUCT_LIST_URL,
} from '../../../../constants/urls';

const fetchProductList = (catId: number) => {
  const url =
    catId === 1
      ? PRODUCT_LIST_URL
      : `${PRODUCT_LIST_URL}?filter=[["categ_id","=",${catId}]]`;
  return axios.get(url);
};

const fetchProductCategory = () => {
  return axios.get(PRODUCT_CATEGORY_URL);
};

const fetchProductDetails = (id: number) => {
  const url = `${PRODUCT_LIST_URL}${id}`;
  return axios.get(url);
};

export {fetchProductList, fetchProductCategory, fetchProductDetails};
