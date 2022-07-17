import react, { FunctionComponent } from "react";
import styled from "styled-components/native"
import { StyleProp, TextStyle} from "react-native"
import SmallText from "../texts/SmallText";
import RegularText from "../texts/RegularText";
import {colors} from "../colors";

const StyledView = styled.View`
    flex-direction: column;
    flex: 1;
    justify-content: center; 
`;

interface GreetingProps {
    mainText: string;
    subText: string;
    mainTextStyles?: StyleProp<TextStyle>;
    subTextStyles?: StyleProp<TextStyle>;
}

const ShoppingCart: FunctionComponent<GreetingProps> = (props) => {
    return (<></>);
};

export default ShoppingCart;

