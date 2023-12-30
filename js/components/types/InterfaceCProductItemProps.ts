import {Product} from '../../api/products/product.type';

export interface InterfaceCProductItemProps {
  data: Product;
  onPress: () => void;
}
