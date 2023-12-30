import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {COLORS} from '../../../../themes/colors';
import {TEXTS} from '../../../constants/texts';
import DeliveryInfoItem from './DeliveryInfoItem';

const {width} = Dimensions.get('screen');

const DeliveryInfo = () => {
  const ADDRESS = 'Green Way 3000, Sylhet';
  const HOURS_MINITUS_AWAY = '1 Hour';

  return (
    <View style={styles.container}>
      <DeliveryInfoItem label={TEXTS.DELIVERY_TO} value={ADDRESS} />
      <DeliveryInfoItem label={TEXTS.TIME} value={HOURS_MINITUS_AWAY} />
    </View>
  );
};

export default React.memo(DeliveryInfo);

const styles = StyleSheet.create({
  container: {
    width,
    backgroundColor: COLORS.PRIMARY,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  deliveryToTxt: {
    color: COLORS.BLACK_1,
    opacity: 0.5,
  },
  addressTxt: {
    color: COLORS.BLACK_1,
    marginRight: 8,
  },
  addressContainer: {flexDirection: 'row', alignItems: 'center'},
});
