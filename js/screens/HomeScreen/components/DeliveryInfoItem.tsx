import React, {useMemo, useCallback} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {CText} from '../../../components';
import {ArrowDownIcon} from '../../../assets/Icons';
import {COLORS} from '../../../../themes/colors';
import {InterfaceDeliveryInfoItemProps} from '../../types/HomeScreen';

const areEqual = (
  prevProps: InterfaceDeliveryInfoItemProps,
  nextProps: InterfaceDeliveryInfoItemProps,
) => {
  return (
    prevProps.label === nextProps.label && prevProps.value === nextProps.value
  );
};

const DeliveryInfoItem: React.FC<InterfaceDeliveryInfoItemProps> = React.memo(
  ({label, value, textStyle, containerStyle, onPress}) => {
    const memoizedTextStyle = useMemo(
      () => [styles.deliveryToTxt, textStyle],
      [textStyle],
    );
    const memoizedContainerStyle = useMemo(
      () => [styles.container, containerStyle],
      [containerStyle],
    );

    const handleArrowPress = useCallback(
      (event: GestureResponderEvent) => {
        if (onPress) {
          onPress(event);
        }
      },
      [onPress],
    );

    return (
      <TouchableOpacity
        onPress={handleArrowPress}
        style={memoizedContainerStyle}>
        {/* @ts-ignore */}
        <CText heading="Label" weight="Bold" style={memoizedTextStyle}>
          {label}
        </CText>
        <View style={styles.addressContainer}>
          <CText heading="Body2" weight="Medium" style={styles.addressTxt}>
            {value}
          </CText>
          <ArrowDownIcon />
        </View>
      </TouchableOpacity>
    );
  },
  areEqual,
);

const styles = StyleSheet.create({
  container: {},
  text: {
    // Add common text styles here
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

export default React.memo(DeliveryInfoItem);
