import SHOP_DATA from './shop.data';
import ShopActionTypes from './shop.types';
import {addItem,removeItem,editItem} from './shop.utils';
const INITIAL_STATE = {
  collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case ShopActionTypes.ADD_ITEM:
      return{
          collections :addItem(state.collections,action.payload)
       }
       case ShopActionTypes.REMOVE_ITEM:
        return{
          ...state,
          collections:removeItem(state.collections,action.payload)
        }
        case ShopActionTypes.EDIT_ITEM:
          return{
            ...state,
            collections:editItem(state.collections,action.payload)
          }
    default:
      return state;
  }
};

export default shopReducer;