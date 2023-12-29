import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../../../themes/colors';
import {CText} from '../../../components';

const PriceDetails = ({price, discount}: {price: string; discount: string}) => {
  const BubbleText = useCallback(() => {
    return (
      <View style={styles.bubbleContainer}>
        <CText heading="Label" style={styles.discount}>
          {discount} % OFF
        </CText>
      </View>
    );
  }, [discount]);

  return (
    <View style={styles.container}>
      <CText heading="Body1" weight="Bold" style={styles.price}>
        $ {parseFloat(price).toFixed(2)}
      </CText>
      <BubbleText />
    </View>
  );
};

export default PriceDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  price: {color: COLORS.PRIMARY},
  discount: {
    color: 'white',
    textAlign: 'center',
  },
  bubbleContainer: {
    backgroundColor: COLORS.PRIMARY,
    width: 84,
    height: 26,
    borderRadius: 20,
    justifyContent: 'center',
  },
});
