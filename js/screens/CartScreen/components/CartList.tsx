import React from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {Product} from '../../../api/products/product.type';
import {useAppSelector} from '../../../hooks/hook';
import {COLORS} from '../../../../themes/colors';
import {CProductListItem, CText} from '../../../components';
import {TEXTS} from '../../../constants/texts';

const {height} = Dimensions.get('screen');
const CartList = () => {
  const {cartItems} = useAppSelector(state => state.cartSlice);

  const renderItem = ({item}: {item: Product}) => (
    <CProductListItem item={item} />
  );
  const renderItemSeperaterComp = () => <View style={styles.separator} />;
  const renderFooterComp = () => (
    <>
      {cartItems.length > 0 && (
        <CText heading="Button2" style={styles.edit}>
          {TEXTS.EDIT}
        </CText>
      )}
    </>
  );

  const renderListEmptyComp = () => {
    return (
      <View>
        <CText heading="Button2" style={styles.noItemTxt}>
          {TEXTS.NO_CART_ITEMS_FOUND}
        </CText>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
        initialNumToRender={10}
        windowSize={10}
        ItemSeparatorComponent={renderItemSeperaterComp}
        ListFooterComponent={renderFooterComp}
        ListEmptyComponent={renderListEmptyComp}
      />
    </View>
  );
};

export default React.memo(CartList);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 20,
    marginBottom: height * 0.34,
  },
  flatListContainer: {},
  edit: {textAlign: 'right', color: COLORS.PRIMARY},
  noItemTxt: {textAlign: 'center', color: COLORS.PRIMARY},
  separator: {
    height: 0.5,
    backgroundColor: COLORS.GREY_500,
  },
});
