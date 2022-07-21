import { ModalAction, ModalState } from "./type.d";
import mutantape from "./../assets/nft-collections/mutantape.png";
import coolcats from "./../assets/nft-collections/coolcats.png";

import  { colors } from "../components/colors";
import bored_ape1 from "./../assets/nft/1.jpg";
import bored_ape2 from "./../assets/nft/2.jpg";
import bored_ape3 from "./../assets/nft/3.jpg";
import bored_ape4 from "./../assets/nft/4.jpg";

import * as actionTypes from "./actionTypes"
import { CartAction, DispatchType } from "./type.d"
import {INFT} from "../components/NFTCard/types"




const initialState: ModalState = {
    open: false,
    data: {
      payment: {
        amount: 0,
        id: '',
      },
      nft: undefined,
    },
    modalType: -1,
  }

  const modalReducer = (
    state: ModalState = initialState,
    action: ModalAction
  ): ModalState => {
    switch (action.type) {
      case actionTypes.OPEN_PAYMENT_MODAL:
        return {
          ...state,
          open: action.open,
          data: action.data,
          modalType: action.modalType,
        }
      case actionTypes.OPEN_COMMENT_MODAL:
        return {
          ...state,
          open: action.open,
          data: action.data.comment,
          modalType: action.modalType,
        }
      case actionTypes.SET_COMMENTS:
        return {
          ...state,
          data: {
            ...state.data,
          }
        }
      case actionTypes.CLEAR_MODAL:
        return initialState;
      default:
        return state;
    }
  }
  
  export default modalReducer


