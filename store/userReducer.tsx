import { userAction, UserState } from "./type.d";

import * as actionTypes from "./actionTypes"
import { CartAction, DispatchType } from "./type.d"
import {INFT} from "../components/NFTCard/types"
import avatar from '../assets/portraits/2.jpg'
import bored_ape3 from "./../assets/nft/3.jpg";



const initialState: UserState = {
    user: {
        id: 0,
        firstName: "Natalie",
        lastName: "Diaz",
        email: "natalie_diaz@gmail.com",
        password: "password",
        asperand: "@natalie_diaz",
        backgroundImage: bored_ape3,
        avatar: avatar,
        hobby: 'Game Artist',
        collections: [],
        likedNfts: [],
        wallet: "0x0",
        balance: 50.2
    }
  }

  const userReducer = (
    state: UserState = initialState,
    action: userAction
  ): UserState => {
    switch (action.type) {
      case actionTypes.SET_COLLECTION:
        const newCollection: INFT[] = action.payload!.concat(state.user.collections);
        const pricePayed = action.payload!.reduce((acc, curr) => acc + curr.data.price, 0);
        return {
          ...state,
            user: {
                id: state.user.id,
                firstName: state.user.firstName,
                lastName: state.user.lastName,
                email: state.user.email,
                password: state.user.password,
                asperand: state.user.asperand,
                backgroundImage: state.user.backgroundImage,
                avatar: state.user.avatar,
                hobby: state.user.hobby,
                collections: newCollection,
                likedNfts: state.user.likedNfts,
                wallet: state.user.wallet,
                balance: Math.round((state.user.balance - pricePayed) * 100) / 100
            }
        }
      case actionTypes.SET_LIKES:
        const newLikedNFTCollection: INFT[] = action.payload!.concat(state.user.likedNfts);
        return {
          ...state,
            user: {
                id: state.user.id,
                firstName: state.user.firstName,
                lastName: state.user.lastName,
                email: state.user.email,
                password: state.user.password,
                asperand: state.user.asperand,
                backgroundImage: state.user.backgroundImage,
                avatar: state.user.avatar,
                hobby: state.user.hobby,
                collections: state.user.collections,
                likedNfts: newLikedNFTCollection,
                wallet: state.user.wallet,
                balance: state.user.balance
            }
        }
      case actionTypes.REMOVE_LIKES:
        const newLikedNFTCollection2: INFT[] = state.user.likedNfts.filter(nft => nft.id !== action.payload![0].id);
        return {
          ...state,
            user: {
                id: state.user.id,
                firstName: state.user.firstName,
                lastName: state.user.lastName,
                email: state.user.email,
                password: state.user.password,
                asperand: state.user.asperand,
                backgroundImage: state.user.backgroundImage,
                avatar: state.user.avatar,
                hobby: state.user.hobby,
                collections: state.user.collections,
                likedNfts: newLikedNFTCollection2,
                wallet: state.user.wallet,
                balance: state.user.balance
            }
        }
    }
    return state;
  }
  
export default userReducer

