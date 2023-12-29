import {fetchWrapper} from '../../network/fetchWrapper';
import {Product} from './product.type';

export const getAllProducts = async (): Promise<{
  isError?: boolean;
  errorMsg?: string;
  products?: Product[];
}> => {
  const resp = await fetchWrapper({url: 'https://dummyjson.com/products'});

  if (resp.status !== 200) {
    return {isError: true, errorMsg: 'Something went Wrong'};
  }
  const products = resp.products;
  if (resp.products) {
    return {products};
  }
  return {isError: true, errorMsg: 'Something went Wrong'};
};
