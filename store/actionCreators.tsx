import * as actionTypes from "./actionTypes"
import {CartAction, DispatchType, ModalAction } from "./type.d"
import {INFT} from "../components/NFTCard/types"

export function addToCart(nft: INFT) {
    const action: CartAction = {
      type: actionTypes.ADD_NFT,
      nft,
    }
    return (dispatch: DispatchType) => {
        dispatch(action)
      }
  }
  
  export function removeNFT(nft: INFT) {
    const action: CartAction = {
      type: actionTypes.REMOVE_NFT,
      nft,
    }
    return simulateHttpRequest(action)
  }

  export function removeAllNFT() {
    const action: CartAction = {
      type: actionTypes.REMOVE_ALL_NFT,
    }
    return simulateHttpRequest(action)
  }

export const openPaymentModal = (open: boolean , data: any) => {
    const action: ModalAction = {
      type: actionTypes.OPEN_PAYMENT_MODAL,
      open: open,
      data: data,
      modalType: 0,
    }
    return (dispatch: DispatchType) => {
        dispatch(action)
      }
}

export const openCommentModal = (open: boolean , data: any) => {
  const action: ModalAction = {
    type: actionTypes.OPEN_COMMENT_MODAL,
    open: open,
    data: data,
    modalType: 1,
  }
  return (dispatch: DispatchType) => {
      dispatch(action)
    }
}

export const clearModal = () => (dispatch: DispatchType) => {
  return dispatch({
    type: actionTypes.CLEAR_MODAL,
  })
}

export const setComments = (data: any) => (dispatch: DispatchType) => {
  const action: ModalAction = {
    type: actionTypes.OPEN_COMMENT_MODAL,
    open: true,
    data: data,
    modalType: 1,
  }
  return dispatch(action)
}
  
  export function simulateHttpRequest(action: CartAction) {
    return (dispatch: DispatchType) => {
      setTimeout(() => {
        dispatch(action)
      }, 50)
    }
  }