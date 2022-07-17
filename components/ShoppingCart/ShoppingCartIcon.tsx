import react, { FunctionComponent } from "react";
import styled from "styled-components/native"
import { StyleProp, TextStyle} from "react-native"
import SmallText from "../texts/SmallText";
import RegularText from "../texts/RegularText";
import { colors } from '../colors';
import { Ionicons } from '@expo/vector-icons';

const IconView = styled.View`
    padding: 5px;

`;

const IconTextView = styled.View`
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 15px;
    backgroundColor: ${colors.orange};
    left: 20px;
    bottom: 20px;
    align-items: center;
    justify-content: center;
    z-index: 100;

`;



const ShoppingCartIcon: FunctionComponent = (props) => {
    return (
    <IconView>
        <IconTextView>
            <RegularText textStyles={{color: colors.white, fontWeight: 'bold'}}>0</RegularText>
        </IconTextView>
        <Ionicons name="cart-outline" size={30}></Ionicons>
    </IconView>);
};

export default ShoppingCartIcon;
