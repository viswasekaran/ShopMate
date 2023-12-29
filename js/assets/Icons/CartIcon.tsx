import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {Path, Svg, SvgProps} from 'react-native-svg';
import {COLORS} from '../../../themes/colors';
import {CText} from '../../components';
import {SCREEN_NAME} from '../../constants/screenName';
import {useAppSelector} from '../../hooks/hook';

const CartIcon = (props: SvgProps) => {
  const navigation = useNavigation();
  const {cartItems} = useAppSelector(state => state.cartSlice);

  const handleCartNavigation = () => {
    navigation.navigate(SCREEN_NAME.CART_SCREEN as never);
  };

  return (
    <>
      <Svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        {...props}
        onPress={handleCartNavigation}>
        <Path
          d="M13.4485 5.9995C10.2931 6.51124 7.63269 6.49623 4.56871 5.99535C2.47793 5.65356 0.597986 7.484 1.09451 9.53958L2.86182 16.8562C3.16559 18.1138 4.29303 19 5.58921 19H12.4423C13.7385 19 14.8659 18.1138 15.1697 16.8562L16.9336 9.55363C17.4309 7.49478 15.5431 5.65982 13.4485 5.9995Z"
          stroke="white"
          stroke-width="1.5"
          {...props}
        />
        <Path
          d="M5 8.83231L5.00001 4.49999C5.00001 2.567 6.56701 1 8.50001 1H9.5C11.433 1 13 2.567 13 4.5V9"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          {...props}
        />
        <Pressable style={styles.indicator} onPress={handleCartNavigation}>
          <CText heading="Button2" weight="Bold" style={styles.cartLengthText}>
            {cartItems.length}
          </CText>
        </Pressable>
      </Svg>
    </>
  );
};
const styles = StyleSheet.create({
  indicator: {
    width: 18,
    height: 18,
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 10,
    position: 'absolute',
    marginLeft: 8,
  },
  cartLengthText: {
    fontSize: 10,
    textAlign: 'center',
    color: 'white',
  },
});
export default CartIcon;
