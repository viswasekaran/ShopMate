import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../../../themes/colors';
import {CText} from '../../../components';
import {TEXTS} from '../../../constants/texts';

const ProductDetailsInfo = ({details}: {details: string}) => {
  return (
    <View style={styles.container}>
      <CText heading="Body1" style={styles.title}>
        {TEXTS.DETAILS}
      </CText>
      <CText heading="Body1" style={styles.body}>
        {details}
      </CText>
    </View>
  );
};

export default ProductDetailsInfo;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 16,
    gap: 6,
  },
  title: {
    color: COLORS.BLACK_70,
  },
  body: {
    color: COLORS.BLACK_3,
  },
});
