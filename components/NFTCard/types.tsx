import { ImageSourcePropType } from 'react-native';
import { ProfileProps } from '../Profiles/types';

export interface CardProps {
    id: number;
    nftName: string;
    nftDescription: string;
    price?: string;
    nftCreator?: ProfileProps ;
    image: ImageSourcePropType;
}

export interface CardSectionProps {
    data: Array<CardProps>;
    sectionName?: string;
    
}