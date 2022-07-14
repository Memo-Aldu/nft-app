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

const Greeting: FunctionComponent<GreetingProps> = (props) => {
    return (
        <StyledView>
            <RegularText
                textStyles={[
                    {
                        color: colors.secondary,
                        fontSize: 22,
                    },
                    props.mainTextStyles,
                ]}
            >
                {props.mainText}
            </RegularText>
            <SmallText
                textStyles={[
                    {
                        color: colors.darkGrey,

                    },
                    props.subTextStyles,
                ]}
            >
                {props.subText}
            </SmallText>
        </StyledView>
    );
};

export default Greeting;