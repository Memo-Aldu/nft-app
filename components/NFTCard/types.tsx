import { ImageSourcePropType } from 'react-native';
import { ProfileProps } from '../Profiles/types';

export interface INFT {
    id: number
    name: string;
    image: ImageSourcePropType;
    data : {
        price: number;
        likes: number
        comments: Comments[]
    }
    description?: string;
    creator?: ProfileProps ;
    collection?: string;
}

export interface Comments { // move to its component when it's ready
    id: number;
    text?: string;
    author: ProfileProps;
};

export interface CardSectionProps {
    data: Array<INFT>;
    sectionName?: string;
    
}