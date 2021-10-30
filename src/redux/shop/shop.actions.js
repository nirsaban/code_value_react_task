import ShopActionTypes from './shop.types';



export const addItem = item => ({
  type:ShopActionTypes.ADD_ITEM,
  payload:item,
})

export const removeItem = item => ({
  type : ShopActionTypes.REMOVE_ITEM,
  payload:item
})
export const editItem = item => ({
  type : ShopActionTypes.EDIT_ITEM,
  payload:item
})