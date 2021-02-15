import {
  ADD_TO_CART,
  CLEAR_ALL_CART,
  CLEAR_ONE_ITEM,
  ITEM_UP_ONE,
  ITEM_DOWN_ONE,
  CALC_TOTALS,
} from "../actions/types";

const reducer = (state, action) => {
  switch (action.type) {
    //
    case ADD_TO_CART:
      const { color, count, product } = action.payload;
      const { id, name, price, images, stock } = product;

      let checkCartItem = state.cartItems.find(
        (item) => item.id === id && item.color === color
      );

      if (checkCartItem) {
        const newCartItems = state.cartItems.map((item) => {
          if (item.id === id && item.color === color) {
            return { ...item, count: item.count + count };
          } else {
            return item;
          }
        });
        return { ...state, cartItems: newCartItems };
        //
      } else {
        const newCartItem = {
          id,
          color,
          count,
          name,
          price,
          img: images[0].url,
          stock,
        };
        return { ...state, cartItems: [...state.cartItems, newCartItem] };
      }

    case CLEAR_ALL_CART:
      return { ...state, cartItems: [] };

    case CLEAR_ONE_ITEM:
      const newCart = state.cartItems.filter((item) => {
        return (
          item.id !== action.payload.id || item.color !== action.payload.color
        );
      });

      return { ...state, cartItems: newCart };

    case ITEM_DOWN_ONE:
      const tempCart = state.cartItems.map((item) => {
        if (
          item.id === action.payload.id &&
          item.color === action.payload.color
        ) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });
      return { ...state, cartItems: tempCart };

    case ITEM_UP_ONE:
      const { id: itemId, color: itemColor } = action.payload;

      let itemCount = 0;
      state.cartItems.map((item) => {
        if (item.id === itemId) {
          itemCount = itemCount + item.count;
        }
        return item;
      });

      const tempItemCart = state.cartItems.map((item) => {
        if (item.id === itemId && item.color === itemColor) {
          return itemCount < item.stock
            ? { ...item, count: item.count + 1 }
            : { ...item };
        }
        return item;
      });

      return { ...state, cartItems: tempItemCart };

    case CALC_TOTALS:
      let totalItems = 0;
      let totalAmount = 0;

      state.cartItems.map((item) => {
        totalItems = totalItems + item.count;
        totalAmount = totalAmount + (item.count * item.price) / 100;
        return item;
      });

      return { ...state, totalAmount, totalItems };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default reducer;
