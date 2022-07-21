import react, { FunctionComponent } from "react";
import styled from "styled-components/native"
import { INFT } from "./types";
import { useNavigation } from "@react-navigation/native";

const CardBackground = styled.ImageBackground`
    height: 150px;
    width: 150px;
    resize-mode: cover;
    border-radius: 25px;
    margin-right: 25px;
    margin-bottom: 25px;
    overflow: hidden;
`;

const CardCreatorTouchable = styled.TouchableOpacity`
    position: absolute;
    width: 40px;
    height: 40px;
    top: 5px;
    left: 5px;
    border-radius: 25px;
`;

const TouchableView = styled.TouchableOpacity`
    justify-content: space-between;
    align-items: center;
`;


const Logo = styled.Image`
    width: 100%;
    height: 80%;
    resize-mode: contain;
    flex: 1;
`;


const SearchCardItem: FunctionComponent<INFT> = (props) => {
    const handleProfilePress = () => {};
    const navigation = useNavigation();
    const handlePress = () => {navigation.navigate("NFTDetails" as never, {"nft" : props} as never)};

    return (
        <TouchableView onPress={handlePress}>
            <CardBackground  source={props.image}>
                <CardCreatorTouchable onPress={handleProfilePress}>
                <Logo source={props.creator?.pfp} style={{borderRadius:25}}  />
                </CardCreatorTouchable>
            </CardBackground>
        </TouchableView>
    );
};

export default SearchCardItem;