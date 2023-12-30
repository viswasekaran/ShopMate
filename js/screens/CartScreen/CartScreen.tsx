import React, {useMemo} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CHeader from '../../components/CHeader';
import {getCartScreenHeaderText} from '../../helpers/cartscreen.utils';
import {useAppSelector} from '../../hooks/hook';
import {CartCheckoutDetails, CartList} from './components';

const CartScreen = () => {
  const {cartItems} = useAppSelector(state => state.cartSlice);

  const getHeaderText = useMemo(() => {
    return getCartScreenHeaderText({cartItems: cartItems});
  }, [cartItems]);

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
