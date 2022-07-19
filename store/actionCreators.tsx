import * as actionTypes from "./actionTypes"
import {NFTAction, DispatchType } from "./type.d"
import {INFT} from "../components/NFTCard/types"

export function addToCart(nft: INFT) {
    const action: NFTAction = {
      type: actionTypes.ADD_NFT,
      nft,
    }
    return (dispatch: DispatchType) => {
        dispatch(action)
      }
  }
  
  export function removeNFT(nft: INFT) {
    const action: NFTAction = {
      type: actionTypes.REMOVE_NFT,
      nft,
    }
    return simulateHttpRequest(action)
  }
  
  export function simulateHttpRequest(action: NFTAction) {
    return (dispatch: DispatchType) => {
      setTimeout(() => {
        dispatch(action)
      }, 50)
    }
  }