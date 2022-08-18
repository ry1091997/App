import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {GlobalStyles} from '../../Assets/constants/styles';
import {getFormattedDate} from '../../Utils.js/date';

function ExpenseItem({id, description, date, amount}) {
  const navigation = useNavigation();
  
  function expensePressHandler() {
    navigation.navigate('ManageExpenses', {expenseId: id});
  }

  return (
    // <View style={styles.rootContainer}>
    <Pressable
      style={({pressed}) => pressed && styles.pressed}
      onPress={expensePressHandler}>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
    // </View>
  );
}

const styles = StyleSheet.create({
  //   rootContainer: {
  //     overflow: 'hidden',
  //     marginVertical: 8,
  //     backgroundColor: GlobalStyles.colors.primary500,
  //     borderRadius: 6,
  //     elevation: 3,
  //     shadowColor: GlobalStyles.colors.gray500,
  //     shadowOffset: {width: 1, height: 1},
  //     shadowOpacity: 0.4,
  // },
  expenseItem: {
    overflow: 'hidden',
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default ExpenseItem;

// android_ripple={{color: GlobalStyles.colors.primary50}}
