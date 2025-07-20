import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reducers';
import {calculateOrderSummary} from '../../../domain/utils/calculateSummary';
import {CartItem} from '../../../domain/models/Cart';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigators/types';
import Header from '../../components/Header';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CartReview'
>;

const CartReviewScreen = () => {
  const cartItems = useSelector((state: RootState) => state.cartState);
  const {subtotal, tax, total} = calculateOrderSummary(cartItems);
  const navigation = useNavigation<NavigationProp>();

  const renderItem = ({item}: {item: CartItem}) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.product.name}</Text>
      <Text>Qty: {item.quantity}</Text>
      <Text>Price: ₹{item.product.price * item.quantity}</Text>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <Header title="Order Summary" showBack />
      <View style={styles.container}>
        <FlatList
          data={cartItems}
          keyExtractor={item => item.product.id}
          renderItem={renderItem}
          style={{marginBottom: 20}}
        />

        <View style={styles.summaryBox}>
          <Text>Subtotal: ₹{subtotal.toFixed(2)}</Text>
          <Text>Tax (10%): ₹{tax.toFixed(2)}</Text>
          <Text style={styles.total}>Total: ₹{total.toFixed(2)}</Text>
        </View>

        <TouchableOpacity
          style={styles.confirmBtn}
          onPress={() => navigation.navigate('Confirmation')}>
          <Text style={styles.confirmText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  title: {fontSize: 20, fontWeight: 'bold', marginBottom: 12},
  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 1,
  },
  summaryBox: {
    backgroundColor: '#f3f3f3',
    padding: 16,
    borderRadius: 8,
  },
  total: {marginTop: 10, fontWeight: 'bold', fontSize: 16},
  confirmBtn: {
    backgroundColor: 'green',
    padding: 14,
    marginTop: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmText: {color: '#fff', fontWeight: 'bold'},
  name: {fontWeight: 'bold', fontSize: 16, marginBottom: 4},
});

export default CartReviewScreen;
