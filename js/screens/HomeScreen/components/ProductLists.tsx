import React, {useCallback, useEffect, useMemo} from 'react';
import {Alert, StyleSheet, View, FlatList, Dimensions} from 'react-native';
import ProductItem from '../../../components/CProductItem';
import {CText} from '../../../components';
import {TEXTS} from '../../../constants/texts';
import {COLORS} from '../../../../themes/colors';
import {getAllProducts} from '../../../api/products/products';
import {useAppDispatch, useAppSelector} from '../../../hooks/hook';
import {setProducts} from '../../../redux/features/productSlice';
import {Product} from '../../../api/products/product.type';
import {Ads} from '.';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAME} from '../../../constants/screenName';

const {height} = Dimensions.get('screen');

const ProductLists = () => {
  const dispatch = useAppDispatch();
  const naviagtion = useNavigation();
  const {products} = useAppSelector(state => state.productSlice);

  const fetchProducts = useCallback(async () => {
    const {products: productsData, isError, errorMsg} = await getAllProducts();
    dispatch(setProducts(productsData));
    if (isError) {
      Alert.alert(errorMsg as string);
    }
  }, [dispatch]);

  useEffect(() => {
    naviagtion.addListener('focus', () => {
      fetchProducts();
    });
  }, [fetchProducts, naviagtion]);

  const handleOnProductPress = useCallback(
    (item: Product) => {
      //@ts-ignore
      naviagtion.navigate(SCREEN_NAME.PRODUCT_DETAILS, {
        productData: item,
      });
    },
    [naviagtion],
  );

  const renderProductItem = useCallback(
    ({item}: {item: Product}) => (
      <ProductItem
        data={item}
        onPress={handleOnProductPress.bind(null, item)}
        key={item.id}
      />
    ),
    [handleOnProductPress],
  );

  const HeaderComponent = () =>
    useMemo(() => {
      return (
        <>
          <Ads />
          <CText heading="H1" style={styles.heading}>
            {TEXTS.RECOMMENDED}
          </CText>
        </>
      );
    }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        ListHeaderComponent={HeaderComponent}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
        initialNumToRender={10}
        windowSize={5}
        numColumns={2}
      />
    </View>
  );
};

export default React.memo(ProductLists);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: height * 0.265,
  },

  heading: {
    color: COLORS.BLACK_70,
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  flatListContainer: {
    width: '100%',
    flexDirection: 'column',
    // height: height,
    // flexWrap: 'wrap',
    // marginTop: 10, // Adjust the margin as needed
    justifyContent: 'center',
    // marginBottom: 690,
  },
});
