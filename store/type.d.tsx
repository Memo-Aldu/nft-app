import { ImageSourcePropType } from 'react-native';
import { ProfileProps } from '../components/Profiles/types';
import {INFT} from "../components/NFTCard/types"


  
export type NFTState = {
    cart: INFT[]
  }
  
 export type NFTAction = {
    type: string
    nft: INFT
  }
  
export type DispatchType = (args: NFTAction) => NFTAction