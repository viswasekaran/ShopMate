import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useMemo, useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {CCircularButton, CText} from '.';
import {COLORS} from '../../themes/colors';
import {FavouriteIcon} from '../assets/Icons';
import ImageSkeleton from '../assets/Icons/ImageSkeleton';
import {getFavIconStyle} from '../helpers/product.utils';
import {useAppDispatch, useAppSelector} from '../hooks/hook';
import {addCart} from '../redux/features/cartSlice';
import {addFavourite, removeFavourite} from '../redux/features/favouriteSlice';
import {InterfaceCProductItemProps} from './types';

const ProductItem: FC<InterfaceCProductItemProps> = ({data, onPress}) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const {favouriteItems} = useAppSelector(state => state.favouriteSlice);
  const [isFavourite, setIsFavourite] = useState(false);

  const {thumbnail: image, title: name, price} = data;

  useEffect(() => {
    navigation.addListener('focus', () => {
      setIsFavourite(favouriteItems.some(el => el.id === data.id));
    });
  }, [data.id, favouriteItems, navigation]);

  const getImageComponent = useMemo(() => {
    if (image && image !== '') {
      return <Image source={{uri: image}} style={styles.image} />;
    }
    return <ImageSkeleton stroke={COLORS.GREY_100} />;
  }, [image]);

  const getFavIconStyles = useMemo(
    () => getFavIconStyle({isFavourite}),
    [isFavourite],
  );

  const handleOnPressFavIcon = () => {
    setIsFavourite(!isFavourite);
    if (isFavourite) {
      dispatch(removeFavourite(data));
    } else {
      dispatch(addFavourite(data));
    }
  };

  const handleAddToCart = () => {
    dispatch(addCart(data));
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <FavouriteIcon
          style={styles.favIcon}
          height={20}
          width={20}
          {...getFavIconStyles}
          onPress={handleOnPressFavIcon}
        />
        {getImageComponent}
      </View>
      <View style={styles.infoContainer}>
        <View>
          <CText heading="Body1" weight="Bold" style={styles.price}>
            ${price}
          </CText>
          <CText heading="Label" style={styles.name}>
            {name}
          </CText>
        </View>
        <CCircularButton text={'+'} onPress={handleAddToCart} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: COLORS.BLACK_1,
    borderRadius: 8,
    padding: 10,
    margin: 5,
    width: 160,
    height: 190,
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  favIcon: {marginRight: 'auto'},
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  infoContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
  },
  name: {
    color: '#222',
  },
  number: {
    fontSize: 14,
    color: '#777',
  },
  price: {
    color: COLORS.BLACK_70,
  },
});
export default React.memo(ProductItem);
