import {TextStyle, ViewStyle} from 'react-native';

export interface InterfaceCCircularBtnProps {
  color?: string;
  text?: string;
  textStyle?: TextStyle;
  Icon?: any;
  style?: ViewStyle;
  onPress?: () => void;
}
