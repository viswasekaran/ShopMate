import {useRoute} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {CartIconBlack} from '../../assets/Icons';
import CHeader from '../../components/CHeader';
import {
  PriceDetails,
  ProductActions,
  ProductDetailsInfo,
  ProductTitle,
} from './components';
import {CCarousel} from '../../components';
import {Product} from '../../api/products/product.type';

export const ProductDetails = () => {
  const {params} = useRoute();

  //@ts-ignore
  const {productData}: Product = params;

  const {images, price, discountPercentage, description} = productData;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CHeader RightIcon={CartIconBlack} />
        <ProductTitle data={productData} />
        <CCarousel items={images} enableFavBtn />
        <PriceDetails price={price} discount={discountPercentage} />
        <ProductActions product={productData} />
        <ProductDetailsInfo details={description} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
