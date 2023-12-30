import React from 'react';
import {FlatList, View} from 'react-native';
import {COLORS} from '../../../../themes/colors';
import AdsItem from './AdsItem';

const Ads = () => {
  const adsData = [
    {
      imgLink: '',
      actionText: 'Get',
      offerText: '50% Off',
      offerCondition: 'On first 03 order',
      bg_color: COLORS.SECONDARY,
    },
    {
      imgLink: '',
      actionText: 'Get',
      offerText: '30% Off',
      offerCondition: 'On first 1 order',
      bg_color: COLORS.SECONDARY_100,
    },
  ];
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={adsData}
        renderItem={({item}) => <AdsItem item={item} />}
      />
    </View>
  );
};

export default React.memo(Ads);
