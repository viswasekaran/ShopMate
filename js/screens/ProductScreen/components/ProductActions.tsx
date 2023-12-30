import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CButton} from '../../../components';
import {TEXTS} from '../../../constants/texts';
import {Product} from '../../../api/products/product.type';
import {useAppDispatch} from '../../../hooks/hook';
import {addCart} from '../../../redux/features/cartSlice';

const ProductActions = ({product}: {product: Product}) => {
  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(addCart(product));
  };

  return (
    <View style={styles.container}>
      <CButton
        title={TEXTS.ADD_TO_CART}
        variant="secondary"
        onClick={addToCart}
      />
      <CButton title={TEXTS.BUY_NOW} variant="primary" />
    </View>
  );
};

export default React.memo(ProductActions);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 18,
  },
});
