import * as actionTypes from "../constants/cartConstants";
import axios from "axios";
import config from "../../Config/config";
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const result = await axios.get(
    config.apiURL + `/products/productByBarcode?productBarcode=${id}`
  );
  console.log(result);
  const data = result["data"]["data"];
  console.log(data.productBarcode);
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      productBarcode: data.productBarcode,
      name: data.productName,
      category: data.category.categoryName,
      image: data.productImg,
      price: data.productPrice,
      countInStock: data.stockStatus,
      description: data.productShortDesc,
      qty,
    },
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
