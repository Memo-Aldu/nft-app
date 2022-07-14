import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import RegularText from "../components/texts/RegularText";
import {Image, Text, View} from "react-native";

import myVideo from "../assets/video.jpg";
const InfoContainer = styled(Container)`
    background-color: ${colors.lightGrey};
    width: 100%;
    flex: 1;
    justify-content: flex-start;
    padding-horizontal: 15px;
`;

const InfoRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-left: 15px;
`;

const Info: FunctionComponent = () => {
    return (
        <InfoContainer>
            <InfoRow>
                <RegularText textStyles={{fontSize: 19, color: colors.secondary}}>FAQ</RegularText>
            </InfoRow>
            <CollapsibleView title="What is an NFT?" titleStyle={{color: colors.orange}}>
                <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptates enim, ullam possimus nesciunt iusto. Velit iste reiciendis esse accusantium tenetur. Molestiae dignissimos quibusdam, ab rerum fuga error minus consequuntur.</Text>
            </CollapsibleView>
            <CollapsibleView title="How do I buy an NFT">
            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptates enim, ullam possimus nesciunt iusto. Velit iste reiciendis esse accusantium tenetur. Molestiae dignissimos quibusdam, ab rerum fuga error minus consequuntur.</Text>
            </CollapsibleView>
            <CollapsibleView title="How do I sell my NFT">
            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptates enim, ullam possimus nesciunt iusto. Velit iste reiciendis esse accusantium tenetur. Molestiae dignissimos quibusdam, ab rerum fuga error minus consequuntur.</Text>
            </CollapsibleView>
            <InfoRow style={{marginTop: 20, marginBottom: 5}}>
                <RegularText textStyles={{fontSize: 19, color: colors.secondary}}>How To Buy Your First NFT</RegularText>
            </InfoRow>
            <Image source={myVideo} width={500} height={500} style={{width: 330, height: 200}}/>
        </InfoContainer>
    );
};

export default Info;