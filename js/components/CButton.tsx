import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {CText} from '.';
import {COLORS} from '../../themes/colors';
import {InterfaceCButtonProps} from './types';

const CButton: React.FC<InterfaceCButtonProps> = ({
  title,
  variant = 'primary',
  onClick,
}) => {
  const getBtnStyle = useMemo(() => {
    switch (variant) {
      case 'primary':
        return styles.primaryBtn;
      case 'secondary':
        return styles.secondaryBtn;
      case 'filled':
        return styles.filledBtn;
    }
  }, [variant]);

  const getBtnTextStyle = useMemo(() => {
    switch (variant) {
      case 'primary':
        return styles.primaryBtnText;
      case 'secondary':
        return styles.secondaryBtnText;
      default:
        return styles.primaryBtnText;
    }
  }, [variant]);

  return (
    <TouchableOpacity style={getBtnStyle} onPress={onClick}>
      <CText heading="Body2" weight="Semibold" style={getBtnTextStyle}>
        {title}
      </CText>
    </TouchableOpacity>
  );
};

export default React.memo(CButton);

const styles = StyleSheet.create({
  primaryBtn: {
    width: 143,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    backgroundColor: COLORS.PRIMARY,
  },

  secondaryBtn: {
    width: 143,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
  },
  filledBtn: {
    width: '100%',
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    backgroundColor: COLORS.PRIMARY,
  },
  primaryBtnText: {
    textAlign: 'center',

    color: 'white',
  },
  secondaryBtnText: {
    textAlign: 'center',

    color: COLORS.PRIMARY,
  },
});
