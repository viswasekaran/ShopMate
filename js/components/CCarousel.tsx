import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {COLORS} from '../../themes/colors';
import {CarouselIndicator, MemoizedCarouselItem} from './CCarouselItem';
import {InterfaceCCaurouselProps} from './types';

const CCarousel = ({items, enableFavBtn = false}: InterfaceCCaurouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({item, index}: {item: string; index: number}) => (
    <MemoizedCarouselItem
      item={item}
      index={index}
      enableFavBtn={enableFavBtn}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={event =>
          setActiveIndex(
            Math.floor(
              event.nativeEvent.contentOffset.x /
                event.nativeEvent.layoutMeasurement.width,
            ),
          )
        }
        contentContainerStyle={styles.contentContainer}
      />
      <View style={styles.indicatorContainer}>
        {items.map((_, index) => (
          <CarouselIndicator key={index} active={activeIndex === index} />
        ))}
      </View>
    </View>
  );
};

export default React.memo(CCarousel);

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
  indicatorActive: {
    backgroundColor: COLORS.SECONDARY,
  },
  contentContainer: {marginVertical: 12},
});
