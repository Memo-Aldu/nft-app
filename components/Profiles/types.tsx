import { GestureResponderEvent, ImageStyle, StyleProp, TextStyle } from 'react-native';

export interface ProfileProps {
    id: number;
    name: string;
    pfp: any;
    background?: string;
    profileStyles?: StyleProp<ImageStyle>;
    textStyles?: StyleProp<TextStyle>;
    onPress?: (event: GestureResponderEvent) => void | undefined;
}
export interface ProfileSectionProps {
    data: Array<ProfileProps>;
    sectionName?: string;
    
}