import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
import {InterfaceCTextProps} from './types';

const CText: React.FC<InterfaceCTextProps> = ({
  style,
  font = 'Manrope',
  heading,
  weight,
  children,
  ...rest
}) => {
  // Define the font family based on the provided font
  let fontFamily = font;

  // Define the font size and weight based on heading and weight
  let fontSize;
  let fontWeight: any;

  switch (heading) {
    case 'H1':
      fontSize = 30;
      break;
    case 'H2':
      fontSize = 26;
      break;
    case 'H3':
      fontSize = 20;
      break;
    case 'H4':
      fontSize = 18;
      break;
    case 'Body1':
      fontSize = 16;
      break;
    case 'Body2':
      fontSize = 14;
      break;
    case 'Label':
      fontSize = 12;
      break;
    case 'Button1':
      fontSize = 14;
      break;
    case 'Button2':
      fontSize = 12;
      break;
    default:
      fontSize = 16;
  }

  switch (weight) {
    case 'Bold':
      fontFamily = 'ManropeBold';
      break;
    case 'Semibold':
      fontWeight = '600';
      fontFamily = 'ManropeSemiBold';
      break;
    case 'Medium':
      fontWeight = '500';
      fontFamily = 'ManropeMedium';
      break;
    case 'Regular':
    default:
      fontWeight = '400';
  }
  return (
    <RNText
      style={[styles.text, {fontFamily, fontSize, fontWeight}, style]}
      {...rest}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {},
});

export default React.memo(CText);
