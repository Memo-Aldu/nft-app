import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import  { colors } from "../components/colors";
import { Container } from "../components/shared";
import BigText from "../components/texts/BigText";
import SmallText from "../components/texts/SmallText";
import RegularText from "../components/texts/RegularText";

// custom component
const WelcomeContainer = styled(Container)`
    background-color: ${colors.secondary};
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;

const TopImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: stretch;
`;

const BottomSection = styled.View`
  width: 100%;
  flex: 1;
  padding: 25px;
  justify-content: flex-end;
`;

//image
import background from "./../assets/bgs/background_v1.png";
import RegularButton from "../components/buttons/RegularButton";
import { useTranslation } from "react-i18next";

const WelcomeScreen: FunctionComponent = () => {
    const { t } = useTranslation();
    return (
        <>
            <StatusBar style="light"/>
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={background}/>
                </TopSection>
                <BottomSection>
                    <BigText textStyles = {{width:"70%", marginBottom: 25 }}>
                        Welcome to my app
                    </BigText>
                    <SmallText textStyles = {{width:"70%", marginBottom: 25 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </SmallText>
                    <RegularButton btnStyles={{padding: 10}} onPress={() => {}}>
                        Get Started
                    </RegularButton>
                </BottomSection>
            </WelcomeContainer>
        </>
    );  
}

export default WelcomeScreen;