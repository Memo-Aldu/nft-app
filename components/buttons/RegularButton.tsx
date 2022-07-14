import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { colors } from "../colors";
import RegularText from '../texts/RegularText';
import {
    GestureResponderEvent,
    StyleProp,
    TextStyle,
    ViewStyle,
} from 'react-native';

const ButtonView = styled.TouchableOpacity`
    align-items: center;
    background-color: ${colors.primary};
    border-radius: 10px;
`;

interface ButtonProps {
    btnStyles?: StyleProp<ViewStyle>;
    onPress: (event: GestureResponderEvent) => void | undefined;
    textStyles?: StyleProp<TextStyle>;
    children: React.ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
    return (
        <ButtonView onPress={props.onPress} style={props.btnStyles}>
            <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
        </ButtonView>
    );
}

export default RegularButton;