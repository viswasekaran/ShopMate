import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {CText} from '.';
import {COLORS} from '../../themes/colors';
import {InterfaceCCircularBtnProps} from './types';

const CCircularButton = ({
  color = COLORS.PRIMARY,
  text,
  textStyle = {},
  Icon,
  style,
  onPress,
}: InterfaceCCircularBtnProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: color}, style]}
      onPress={onPress}>
      {/* @ts-ignore */}
      {Icon ? <Icon /> : <CText style={[styles.text, textStyle]}>{text}</CText>}
    </TouchableOpacity>
  );
};

export default React.memo(CCircularButton);

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
  textStyle: {},
});
