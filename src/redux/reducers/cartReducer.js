import * as actionTypes from "../constants/cartConstants";
export const cartReducer = (state = { cartItems: [] }, action) => {
  console.log("in line 6 of cart reducer");
      console.log(state);
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      
      const existItem = state.cartItems.find((x) => x.productBarcode === item.productBarcode);
      console.log("in line 7 of cart reducer");
      console.log(state);
      if (existItem) {
        console.log("in line 8 of cart reducer");
       
        console.log(state);
        console.log("IN LINE 16 REDUCER "+item.qty);
        item.qty+= existItem.qty;
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.productBarcode === existItem.productBarcode ? item : x
          ),
        };
      } else {
        console.log("in line 9 of cart reducer");
      console.log(state);
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
       
      }
     
    case actionTypes.REMOVE_FROM_CART:
      console.log("in delete item");
    console.log(state.cartItems[0]);
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.productBarcode !== action.payload.productBarcode),
      };
    default:
      return state;
  }
  
};
