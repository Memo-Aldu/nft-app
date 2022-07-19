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

const Row = styled.View`
    flex-direction: row;
    justify-content: flex-start;
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
            <Row>
                <RegularText
                    textStyles={[
                        {
                            color: colors.secondary,
                            fontSize: 23,
                        },
                        props.mainTextStyles,
                    ]}
                >
                    {props.mainText}
                </RegularText>
            </Row>
            <Row>
                <SmallText
                    textStyles={[
                        {
                            color: colors.darkGrey,
                            fontSize: 15,
                        },
                        props.subTextStyles,
                    ]}
                >
                    {props.subText}
                </SmallText>
            </Row>
        </StyledView>
    );
};

export default Greeting;