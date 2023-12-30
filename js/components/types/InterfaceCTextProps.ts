import {TextStyle} from 'react-native';

export interface InterfaceCTextProps {
  style?: TextStyle;
  font?: 'Manrope' | 'ManropeBold' | 'ManropeSemiBold' | 'ManropeMedium';
  heading?:
    | 'H1'
    | 'H2'
    | 'H3'
    | 'H4'
    | 'Body1'
    | 'Body2'
    | 'Label'
    | 'Button1'
    | 'Button2';
  weight?: 'Bold' | 'Semibold' | 'Medium' | 'Regular';
  children?: React.ReactNode;
}
