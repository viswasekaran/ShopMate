import React from 'react';
import {StyleSheet, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {CText} from '.';
import {COLORS} from '../../themes/colors';

const CCircularButton = ({
  color = COLORS.PRIMARY,
  text,
  textStyle = {},
  Icon,
  style,
  onPress,
}: {
  color?: string;
  text?: string;
  textStyle?: TextStyle;
  Icon?: any;
  style?: ViewStyle;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: color}, style]}
      onPress={onPress}>
      {/* @ts-ignore */}
      {Icon ? <Icon /> : <CText style={[styles.text, textStyle]}>{text}</CText>}
    </TouchableOpacity>
  );
};

export default CCircularButton;

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
