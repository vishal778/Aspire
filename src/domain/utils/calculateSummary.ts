import {CartItem} from '../models/Cart';

export const calculateOrderSummary = (cart: CartItem[]) => {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;
  return {subtotal, tax, total};
};
