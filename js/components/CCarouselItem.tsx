import React, {memo} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {CCircularButton} from '.';
import {FavouriteIcon} from '../assets/Icons';
import {COLORS} from '../../themes/colors';
const {width} = Dimensions.get('screen');

export const MemoizedCarouselItem = memo(
  ({
    item,
    index,
    enableFavBtn,
  }: {
    item: string;
    index: number;
    enableFavBtn: boolean;
  }) => (
    <View key={index}>
      <Image
        resizeMode="contain"
        source={{uri: item}}
        style={styles.carouselImage}
      />
      {enableFavBtn && (
        <CCircularButton Icon={FavouriteIcon} style={styles.addFavBtn} />
      )}
    </View>
  ),
);
export const CarouselIndicator = memo(({active}: {active: boolean}) => (
  <View style={[styles.indicator, active && styles.indicatorActive]} />
));

const styles = StyleSheet.create({
  carouselImage: {width, height: 210},
  addFavBtn: {
    width: 45,
    height: 45,
    backgroundColor: 'white',
    position: 'absolute',
    alignSelf: 'flex-end',
    marginVertical: 16,
    right: 19,
  },
  indicator: {
    width: 12,
    height: 3,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: COLORS.GREY_300,
  },
  indicatorActive: {
    backgroundColor: COLORS.SECONDARY,
  },
});
