import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {COLORS} from '../../themes/colors';
import SearchIcon from '../assets/Icons/SearchIcon';

interface SearchableComponentProps {
  placeholder: string;
  handleSearchChange: (query: string) => void;
  searchValue: string;
}

const CSearchBar: React.FC<SearchableComponentProps> = ({
  placeholder,
  handleSearchChange,
  searchValue,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <SearchIcon />
        <TextInput
          style={styles.input}
          value={searchValue}
          onChangeText={handleSearchChange}
          placeholder={placeholder}
          placeholderTextColor="lightgray"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: '5%',
  },
  inputContainer: {
    backgroundColor: COLORS.PRIMARY_100,
    width: 335,
    height: 56,
    borderRadius: 28,
    paddingHorizontal: '8%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: COLORS.BLACK_3,
    fontFamily: 'Manrope',
    marginLeft: '5%',
  },
  clearIcon: {
    marginLeft: 10,
  },
});

export default CSearchBar;
