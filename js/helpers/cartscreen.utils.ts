import {Product} from '../api/products/product.type';
import {TEXTS} from '../constants/texts';

export const getCartScreenHeaderText = ({
  cartItems,
}: {
  cartItems: Product[];
}) => {
  const cartItemsLength = cartItems.length;
  return `${TEXTS.SHOPPING_CART} (${cartItemsLength})`;
};

export const getCartCheckoutTotal = ({cartItems}: {cartItems: Product[]}) => {
  return cartItems
    .reduce((prev, current) => {
      const itemCost = current.price * current.count;
      return prev + itemCost;
    }, 0)
    .toFixed(2);
};
