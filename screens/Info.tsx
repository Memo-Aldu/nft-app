import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import RegularText from "../components/texts/RegularText";
import {Image, StatusBar} from "react-native";


import myVideo from "../assets/video.jpg";
import SmallText from "../components/texts/SmallText";
import { useTranslation } from "react-i18next";
const InfoContainer = styled(Container)`
    background-color: ${colors.lightGrey};
    width: 100%;
    flex: 1;
    justify-content: flex-start;
    padding-horizontal: 15px;
`;

const InfoRow = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-left: 15px;
`;

const Info: FunctionComponent = () => {
    const [expanded, setExpanded] = React.useState(true);
    const {t} = useTranslation();
    const handlePress = () => setExpanded(!expanded);
    return (
        <InfoContainer>
            <StatusBar translucent
                backgroundColor="transparent"
                barStyle="dark-content"/>
            <InfoRow>
                <RegularText textStyles={{fontSize: 19, color: colors.secondary}}>{t('FAQ.Header')}</RegularText>
            </InfoRow>

            <CollapsibleView  titleStyle={{justifyContent: 'flex-start', alignSelf: 'flex-start', color: colors.orange}} style={{width:'100%', borderWidth: 0, }} title={t("FAQ.1.Question")}>
                <SmallText textStyles={{color: colors.darkGrey, paddingLeft: 20}}>
                    {t("FAQ.1.Answer")}
                </SmallText>
            </CollapsibleView>  


            <CollapsibleView  titleStyle={{justifyContent: 'flex-start', alignSelf: 'flex-start', color: colors.orange}} style={{width:'100%', borderWidth: 0, }} title={t("FAQ.2.Question")}>
                <SmallText textStyles={{color: colors.darkGrey, paddingLeft: 20}}>
                    {t("FAQ.2.Answer")}
                </SmallText>
            </CollapsibleView>  

            <CollapsibleView  titleStyle={{justifyContent: 'flex-start', alignSelf: 'flex-start', color: colors.orange}} style={{width:'100%', borderWidth: 0, }} title={t("FAQ.3.Question")}>
                <SmallText textStyles={{color: colors.darkGrey, paddingLeft: 20}}>
                    {t("FAQ.3.Answer")}
                </SmallText>
            </CollapsibleView>   
            <InfoRow style={{marginTop: 20, marginBottom: 5}}>
                <RegularText textStyles={{fontSize: 19, color: colors.secondary}}>{t('FAQ.Video.Header')}</RegularText>
            </InfoRow>
            <Image source={myVideo} width={500} height={500} style={{width: 330, height: 200}}/>
        </InfoContainer>
    );
};

export default Info;