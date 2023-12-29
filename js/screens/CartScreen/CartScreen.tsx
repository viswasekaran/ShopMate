import React, {useMemo} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CHeader from '../../components/CHeader';
import {TEXTS} from '../../constants/texts';
import {useAppSelector} from '../../hooks/hook';
import {CartCheckoutDetails, CartList} from './components';

const CartScreen = () => {
  const {cartItems} = useAppSelector(state => state.cartSlice);

  const getHeaderText = useMemo(() => {
    const cartItemsLength = cartItems.length;
    return `${TEXTS.SHOPPING_CART} (${cartItemsLength})`;
  }, [cartItems.length]);

  return (
    <SafeAreaView style={styles.container}>
      <CHeader title={getHeaderText} />
      <CartList />
      <CartCheckoutDetails />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
