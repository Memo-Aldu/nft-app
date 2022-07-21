import { ImageSourcePropType } from 'react-native';
import { ProfileProps } from '../components/Profiles/types';
import {INFT} from "../components/NFTCard/types"
import { store } from './store';


  
export type CartState = {
    cart: INFT[],
    total: number,
}

  
export type UserState = {
  user: {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    asperand: string,
    avatar: any,
    backgroundImage: any,
    hobby: string,
    collections: INFT[],
    likedNfts: INFT[],
    wallet: string,
    balance: number, 
  }
}

export type Payment = {
  amount: number,
  id: string,
}

export type ModalState = {
  open: boolean,
  data: {
    payment?: Payment,
    nft?: INFT,
  },
  modalType: number,
}
  
 export type CartAction = {
    type: string
    nft?: INFT
  }

  export type userAction = {
    type: string
    user?: UserState
    payload?: INFT[]
  }

  export type ModalAction = {
    type: string
    open: boolean
    data: any
    modalType: number
  }

  export type NFTAction = {
    type: string
    nft: INFT
  }


export type DispatchType = (action: CartAction | userAction | ModalAction) => void
  
export type AppState = {
  cartReducer: CartState,
  userReducer: UserState,
  modalReducer: ModalState,
  nftReducer: INFT

  // add future state slices here
}
