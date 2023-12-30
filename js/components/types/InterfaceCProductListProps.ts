import {Product} from '../../api/products/product.type';

export interface InterfaceCProductListProps {
  item: Product;
  RightIcon?: any;
  rightIconPress?: (item: Product) => void;
}
