import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../../../themes/colors';
import {CButton, CText} from '../../../components';
import {TEXTS} from '../../../constants/texts';
import {useAppSelector} from '../../../hooks/hook';
import {getCartCheckoutTotal} from '../../../helpers/cartscreen.utils';

const CartCheckoutDetails = () => {
  const {cartItems} = useAppSelector(state => state.cartSlice);

  const deliveryFee = cartItems.length > 0 ? 10 : 0;

  const {finalTotal, total} = useMemo(() => {
    const totalValue = getCartCheckoutTotal({cartItems});
    const finalTotalValue = (parseFloat(totalValue) + deliveryFee).toFixed(2);
    return {total: totalValue, finalTotal: finalTotalValue};
  }, [cartItems, deliveryFee]);

  const checkoutData = [
    {question: 'Subtotal', answer: total},
    {question: 'Delivery', answer: deliveryFee.toFixed(2)},
    {question: 'Total', answer: finalTotal},
  ];

  return (
    <View style={styles.container}>
      {checkoutData.map((item, i) => (
        <View key={i} style={styles.infoContainer}>
          <CText heading="Body1" style={styles.questionTxt}>
            {item.question}
          </CText>
          <CText heading="Body1" weight="Medium" style={styles.answerTxt}>
            $ {item.answer}
          </CText>
        </View>
      ))}
      <CButton variant="filled" title={TEXTS.PROCEED_TO_CHECKOUT} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 20,
    marginHorizontal: 15,
    paddingVertical: 10,
    marginTop: 'auto',
    backgroundColor: COLORS.BLACK_1,
    gap: 13,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  questionTxt: {
    color: COLORS.GREY_400,
  },
  answerTxt: {
    color: COLORS.BLACK_70,
  },
});

export default React.memo(CartCheckoutDetails);
