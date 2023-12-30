import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {COLORS} from '../../../../themes/colors';
import ImageSkeleton from '../../../assets/Icons/ImageSkeleton';
import {CText} from '../../../components';
import {InterfaceAdsItemProps} from '../../types/HomeScreen';

const AdsItem = ({item}: InterfaceAdsItemProps) => {
  const {bg_color, imgLink, actionText, offerCondition, offerText} = item;
  //@ts-ignore
  const ImageData = imgLink ? <Image source={imgLink} /> : <ImageSkeleton />;

  return (
    <View style={[styles.container, {backgroundColor: bg_color}]}>
      {ImageData}
      <View style={styles.offerDetailContainer}>
        <CText style={styles.actionText}>{actionText}</CText>
        <CText heading="H2" weight="Bold" style={styles.offerText}>
          {offerText}
        </CText>
        <CText heading="Label" style={styles.offerText}>
          {offerCondition}
        </CText>
      </View>
    </View>
  );
};

export default React.memo(AdsItem);

const styles = StyleSheet.create({
  container: {
    width: 269,
    height: 123,
    borderRadius: 15,
    marginVertical: 28,
    marginHorizontal: 10,
    padding: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  offerDetailContainer: {},
  actionText: {
    color: COLORS.BLACK_1,
  },
  offerText: {
    color: COLORS.BLACK_1,
  },
});
