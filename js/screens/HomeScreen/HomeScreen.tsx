import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {COLORS} from '../../../themes/colors';
import {CSearchBar} from '../../components';
import {TEXTS} from '../../constants/texts';
import {DeliveryInfo, ProductLists, WelcomeHeader} from './components';
import {useAppSelector} from '../../hooks/hook';
TextInput.defaultProps = {...TextInput.defaultProps, allowFontScaling: false};

const HomeScreen = () => {
  const {products} = useAppSelector(state => state.productSlice);

  const [listedProducts, SetListedProducts] = useState(products);

  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchInput(query);
    const filterdItems = products.filter(el =>
      el.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
    );
    SetListedProducts(filterdItems);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.PRIMARY} />
      <WelcomeHeader />
      <CSearchBar
        placeholder={TEXTS.SEARCH_PRODUCTS_STORE}
        handleSearchChange={handleSearchChange}
        searchValue={searchInput}
      />
      <DeliveryInfo />
      <ProductLists products={listedProducts} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});
