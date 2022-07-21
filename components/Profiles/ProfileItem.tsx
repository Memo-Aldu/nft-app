import react, { FunctionComponent } from "react";
import styled from "styled-components/native"
import { ProfileProps } from "./types";
import SmallText from "../texts/SmallText";
import {Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileView = styled.TouchableOpacity`
    height: 100%;
    resize-mode: cover;
    margin-right: 16px;
    overflow: hidden;
`;


const StyledView = styled.View`
    height: 55px;
    width: 55px;
    border-radius: 35px;
    justify-content: center;
    align-items: center;
`;

const ProfileItem: FunctionComponent<ProfileProps> = (props) => {
    const navigation = useNavigation();
    return(
        <ProfileView onPress={() => {navigation.navigate("Collection" as never, {"nftCollection" : props} as never)}}>
            <StyledView style={{backgroundColor: props.background}}>
                <Image source={props.pfp} style={[{width: 50, height: 50, borderRadius:25}, props.profileStyles]} />
            </StyledView>
            <SmallText textStyles={props.textStyles}>{props.name}</SmallText>
        </ProfileView>
    );
}

export default ProfileItem;