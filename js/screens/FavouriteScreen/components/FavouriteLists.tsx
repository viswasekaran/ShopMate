import React, {useCallback, useMemo} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {COLORS} from '../../../../themes/colors';
import {Product} from '../../../api/products/product.type';
import {CProductListItem, CText} from '../../../components';
import {TEXTS} from '../../../constants/texts';
import {FavouriteIcon} from '../../../assets/Icons';
import {getFavIconStyle} from '../../../helpers/product.utils';
import {useAppDispatch} from '../../../hooks/hook';
import {removeFavourite} from '../../../redux/features/favouriteSlice';

const {height} = Dimensions.get('screen');

const FavouriteLists = ({data}: {data: Product[]}) => {
  const dispatch = useAppDispatch();

  const getFavIconStyles = useMemo(
    () => getFavIconStyle({isFavourite: true}),
    [],
  );

  const handleOnPressFavIcon = useCallback(
    (item: Product) => {
      dispatch(removeFavourite(item));
    },
    [dispatch],
  );

  const FavIconComp = useCallback(() => {
    return (
      <FavouriteIcon
        height={20}
        width={20}
        {...getFavIconStyles}
        // onPress={handleOnPressFavIcon.bind(null, item)}
      />
    );
  }, [getFavIconStyles]);

  const renderItem = ({item}: {item: Product}) => (
    <CProductListItem
      item={item}
      RightIcon={FavIconComp}
      rightIconPress={handleOnPressFavIcon}
    />
  );
  const renderItemSeperaterComp = () => <View style={styles.separator} />;
  const renderListEmptyComp = () => {
    return (
      <View>
        <CText heading="Button2" style={styles.noItemTxt}>
          {TEXTS.NO_FAV_ITEMS_FOUND}
        </CText>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
        initialNumToRender={10}
        windowSize={10}
        ItemSeparatorComponent={renderItemSeperaterComp}
        ListEmptyComponent={renderListEmptyComp}
      />
    </View>
  );
};

export default FavouriteLists;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 20,
    marginBottom: height * 0.34,
  },
  flatListContainer: {paddingHorizontal: 20},
  noItemTxt: {textAlign: 'center', color: COLORS.PRIMARY},
  separator: {
    height: 0.5,
    backgroundColor: COLORS.GREY_500,
  },
});
