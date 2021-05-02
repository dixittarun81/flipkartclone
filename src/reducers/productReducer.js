import { GET_PRODUCTS_BY_SLUG } from "../actions/types";

const INITIAL_STATE = {
  products: [],
  productsByPrice: {
    under5k: [],
    under10k: [],
    under15k: [],
    under20k: [],
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS_BY_SLUG:
      return (state = {
        ...state,
        products: action.payload.products,
        productsByPrice: {
          ...action.payload.productsByPrice,
        },
      });
    default:
      return state;
  }
};
