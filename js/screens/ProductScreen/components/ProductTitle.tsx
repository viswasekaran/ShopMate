import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import {COLORS} from '../../../../themes/colors';
import {CText} from '../../../components';
import {Product} from '../../../api/products/product.type';

const ProductTitle = ({data}: {data: Product}) => {
  const reviews = Math.round(Math.random() * 1000);
  const {title = 'Title', brand = 'Brand', rating = 3} = data;
  return (
    <View style={styles.container}>
      <CText heading="H1" style={styles.title}>
        {title}
      </CText>
      <CText heading="H1" weight="Bold" style={styles.brand}>
        {brand}
      </CText>
      <View style={styles.ratingConatiner}>
        <Rating
          type="custom"
          ratingBackgroundColor="#000"
          ratingCount={5}
          startingValue={rating}
          fractions={1}
          imageSize={15}
          onFinishRating={() => {}}
          style={{paddingVertical: 10, borderWidth: 0, alignSelf: 'flex-start'}}
        />
        <CText heading="Body2" style={styles.reviewText}>
          {reviews} Reviews
        </CText>
      </View>
    </View>
  );
};

export default ProductTitle;

const styles = StyleSheet.create({
  container: {paddingHorizontal: 20},
  title: {
    color: COLORS.BLACK_70,
    fontSize: 40,
  },
  brand: {
    color: COLORS.BLACK_70,
    fontSize: 40,
  },
  ratingConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  reviewText: {
    marginLeft: 8,
    color: COLORS.GREY_200,
  },
});
