import React, {useState} from 'react';
import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';
import {COLORS} from '../../themes/colors';
import {CCircularButton} from '.';
import {FavouriteIcon} from '../assets/Icons';
const {width} = Dimensions.get('screen');
const CCarousel = ({
  items,
  enableFavBtn = false,
}: {
  items: string[];
  enableFavBtn?: boolean;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({item}: {item: string}) => {
    return (
      <View>
        <Image
          resizeMode="contain"
          source={{uri: item}}
          style={styles.carouselImage}
        />
        {enableFavBtn && (
          <CCircularButton Icon={FavouriteIcon} style={styles.addFavBtn} />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={event =>
          setActiveIndex(
            event.nativeEvent.contentOffset.x /
              event.nativeEvent.layoutMeasurement.width,
          )
        }
        contentContainerStyle={styles.contentContainer}
      />
      <View style={styles.indicatorContainer}>
        {items.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              activeIndex === index && styles.indicatorActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default CCarousel;

const styles = StyleSheet.create({
  container: {},
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '13%',
    marginLeft: 18,
  },
  indicator: {
    width: 12,
    height: 3,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: COLORS.GREY_300,
  },
  carouselImage: {width, height: 210},
  indicatorActive: {
    backgroundColor: COLORS.SECONDARY,
  },
  contentContainer: {marginVertical: 12},
  addFavBtn: {
    width: 45,
    height: 45,
    backgroundColor: 'white',
    position: 'absolute',
    alignSelf: 'flex-end',
    marginVertical: 16,
    right: 19,
  },
});
