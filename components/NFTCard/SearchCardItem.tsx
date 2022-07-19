import react, { FunctionComponent } from "react";
import styled from "styled-components/native"
import { colors } from "../colors";
import { INFT } from "./types";

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
import card_bg from "./../../assets/bgs/background_transparent.png";
import bayc from "./../../assets/nft-collections/bayc-1.png";

const SearchCardItem: FunctionComponent<INFT> = (props) => {
    const handlePress = () => {};

    return (
        <TouchableView>
            <CardBackground  source={props.image}>
                <CardCreatorTouchable onPress={handlePress}>
                <Logo source={props.creator?.pfp} style={{borderRadius:25}}  />
                </CardCreatorTouchable>
            </CardBackground>
        </TouchableView>
    );
};

export default SearchCardItem;