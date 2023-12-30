import {GestureResponderEvent} from 'react-native';

export interface InterfaceDeliveryInfoItemProps {
  label: string;
  value: string;
  textStyle?: any;
  containerStyle?: any;
  onPress?: (event: GestureResponderEvent) => void;
}
