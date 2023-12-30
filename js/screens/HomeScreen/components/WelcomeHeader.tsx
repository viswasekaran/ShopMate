import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CartIcon} from '../../../assets/Icons';
import {COLORS} from '../../../../themes/colors';
import {CText} from '../../../components';

const WelcomeHeader = () => {
  return (
    <View style={styles.container}>
      <CText heading="H3" style={styles.welcomeNote}>
        Hey, Viswa
      </CText>
      <CartIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  welcomeNote: {
    color: 'white',
  },
});

export default React.memo(WelcomeHeader);
