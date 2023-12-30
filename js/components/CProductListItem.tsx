import React, {useRef} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {Easing} from 'react-native-reanimated';
import {CCircularButton, CText} from '.';
import {COLORS} from '../../themes/colors';
import {useAppDispatch} from '../hooks/hook';
import {
  decrementCartItem,
  incrementCartItem,
} from '../redux/features/cartSlice';
import {InterfaceCProductListProps} from './types';

const {width} = Dimensions.get('screen');
const CProductListItem = ({
  item,
  RightIcon,
  rightIconPress,
}: InterfaceCProductListProps) => {
  const dispatch = useAppDispatch();
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const {thumbnail, title, price, count} = item;

  const handleIncrementItem = () => {
    dispatch(incrementCartItem(item));
  };

  const handleDecrementItem = () => {
    if (count === 1) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        dispatch(decrementCartItem(item));
        fadeAnim.setValue(1);
      });
    } else {
      dispatch(decrementCartItem(item));
    }
  };
  const handleRightIconPress = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      rightIconPress?.(item);
      fadeAnim.setValue(1);
    });
  };
  return (
    <Animated.View style={{opacity: fadeAnim}}>
      <View style={styles.container}>
        <View style={styles.bodyContainer}>
          <Image source={{uri: thumbnail}} style={styles.img} />
          <View style={styles.details}>
            <CText heading="Body2" style={styles.txt}>
              {title}
            </CText>
            <CText heading="Body2" style={styles.txt}>
              $ {price.toFixed(2)}
            </CText>
          </View>
        </View>
        <View style={styles.incDecContainer}>
          {RightIcon ? (
            <Pressable onPress={handleRightIconPress}>
              <RightIcon />
            </Pressable>
          ) : (
            <>
              <CCircularButton
                text="+"
                style={styles.circularBtn}
                textStyle={styles.circularBtnTxt}
                onPress={handleIncrementItem}
              />
              <CText heading="Body2" style={{color: COLORS.BLACK_70}}>
                {count}
              </CText>
              <CCircularButton
                text="-"
                style={styles.circularBtn}
                textStyle={styles.circularBtnTxt}
                onPress={handleDecrementItem}
              />
            </>
          )}
        </View>
      </View>
    </Animated.View>
  );
};

export default React.memo(CProductListItem);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  bodyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 26,
  },
  incDecContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },
  details: {gap: 3},
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  txt: {
    color: COLORS.BLACK_70,
    width: width * 0.35,
  },
  circularBtn: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: COLORS.BLACK_1,
  },
  circularBtnTxt: {
    color: 'black',
  },
});
