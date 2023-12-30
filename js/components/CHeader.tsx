import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {CCircularButton, CText} from '.';
import {ArrowLeftIcon} from '../assets/Icons';
import {COLORS} from '../../themes/colors';
import {useNavigation} from '@react-navigation/native';

const CHeader = ({title, RightIcon}: {title?: string; RightIcon?: any}) => {
  const navigation = useNavigation();

  const handleOnBackPress = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <Pressable onPress={handleOnBackPress}>
        <CCircularButton
          onPress={handleOnBackPress}
          color={COLORS.BLACK_10}
          style={styles.backBtn}
          Icon={ArrowLeftIcon}
        />
      </Pressable>
      <CText heading="Body1" weight="Medium" style={styles.title}>
        {title}
      </CText>
      <Pressable style={styles.rightIcon}>
        {RightIcon && (
          <>
            <RightIcon />
          </>
        )}
      </Pressable>
    </View>
  );
};

export default React.memo(CHeader);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 67,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  title: {
    color: COLORS.BLACK_70,
    marginLeft: 24,
  },
  rightIcon: {
    marginLeft: 'auto',
  },
});
