import React, { FunctionComponent } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import  { colors } from "../components/colors";
import { Container } from "../components/shared";
import BigText from "../components/texts/BigText";
import SmallText from "../components/texts/SmallText";

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
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen: FunctionComponent = () => {
    const { t } = useTranslation();
    const navigate = useNavigation();
    return (
        <>
            <StatusBar translucent
                backgroundColor="transparent"
                barStyle="dark-content"/>
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={background}/>
                </TopSection>
                <BottomSection>
                    <BigText textStyles = {{width:"70%", marginBottom: 25 }}>
                        EASY NFT
                    </BigText>
                    <SmallText textStyles = {{width:"70%", marginBottom: 25 }}>
                        The Best NFT MarketPlace!
                    </SmallText>
                    <RegularButton btnStyles={{padding: 10}} onPress={() => {navigate.navigate('Home')}}>
                        Get Started
                    </RegularButton>
                </BottomSection>
            </WelcomeContainer>
        </>
    );  
}

export default WelcomeScreen;