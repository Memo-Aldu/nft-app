import { NFTState } from "./type.d";
import mutantape from "./../assets/nft-collections/mutantape.png";
import coolcats from "./../assets/nft-collections/coolcats.png";

import  { colors } from "../components/colors";
import bored_ape1 from "./../assets/nft/1.jpg";
import bored_ape2 from "./../assets/nft/2.jpg";
import bored_ape3 from "./../assets/nft/3.jpg";
import bored_ape4 from "./../assets/nft/4.jpg";

import * as actionTypes from "./actionTypes"
import { NFTAction, DispatchType } from "./type.d"
import {INFT} from "../components/NFTCard/types"




const initialState: NFTState = {
    cart: [
      {
        id: 1,
        name: "Bored ape",
        image: bored_ape1,
        data: {
            price: 5.5,
            likes: 20,
            comments: 10
        },
        comments: [],
        description: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
        creator: {
            id: 4,
            name: "Danielle",
            background: colors.orange,
            pfp: mutantape,
        },
        collection: "collection 1"
      },
      {
        id: 2,
        name: "Bored ape2",
        image: bored_ape2,
        data: {
            price: 4.2,
            likes: 32,
            comments: 12
        },
        comments: [],
        description: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
        creator: {
            id: 5,
            name: "Tom",
            background: colors.orange,
            pfp: coolcats,
        },
        collection: "collection 2"
      },
    ],
  }

  const reducer = (
    state: NFTState = initialState,
    action: NFTAction
  ): NFTState => {
    switch (action.type) {
      case actionTypes.ADD_NFT:
        const newNFT: INFT = {
          id: Math.random(), // not really unique
          name: action.nft.name,
          image: action.nft.image,
          data: action.nft.data,
          comments: action.nft.comments,
          description: action.nft.description,
          creator: action.nft.creator,
          collection: action.nft.collection
        }
        console.log(state.cart)
        return {
          ...state,
          cart: state.cart.concat(newNFT),
        }
      case actionTypes.REMOVE_NFT:
        const updatedArticles: INFT[] = state.cart.filter(
          nft => nft.id !== action.nft.id
        )
        return {
          ...state,
          cart: updatedArticles,
        }
    }
    return state
  }
  
  export default reducer


