import { GestureResponderEvent, ImageStyle, StyleProp, TextStyle } from 'react-native';
import { INFT } from '../NFTCard/types';

export interface ProfileProps {
    id: number;
    name: string;
    pfp: any;
    background?: string;
    collection?: INFT[];
    profileStyles?: StyleProp<ImageStyle>;
    textStyles?: StyleProp<TextStyle>;
}
export interface ProfileSectionProps {
    data: Array<ProfileProps>;
    sectionName?: string;
    
}