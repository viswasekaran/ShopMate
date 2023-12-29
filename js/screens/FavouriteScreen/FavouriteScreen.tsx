import React, {useMemo} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {CText} from '../../components';
import {TEXTS} from '../../constants/texts';
import CHeader from '../../components/CHeader';
import {useAppSelector} from '../../hooks/hook';
import {FavouriteLists} from './components';

export const FavouriteScreen = () => {
  const {favouriteItems} = useAppSelector(state => state.favouriteSlice);

  const getHeaderText = useMemo(() => {
    return `${TEXTS.FAVOURITE}s (${favouriteItems.length})`;
  }, [favouriteItems.length]);

  return (
    <SafeAreaView style={styles.container}>
      <CHeader title={getHeaderText} />
      <CText heading="H1" style={styles.favTxt}>
        {TEXTS.YOUR_FAVOURITES}
      </CText>
      <FavouriteLists data={favouriteItems} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  favTxt: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
});
