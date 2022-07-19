import react, { FunctionComponent } from "react";
import styled from "styled-components/native"
import { colors } from "../colors";
import { ScreenWidth, ScreenHeight } from "../shared";
import { INFT } from "./types";

const CardBackground = styled.ImageBackground`
    height: 100px;
    width: 100px;
    resize-mode: cover;
    border-radius: 25px;
    margin-right: 15px;
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

const CollectionItem: FunctionComponent<INFT> = (props) => {
    const handlePress = () => {};

    return (
        <TouchableView>
            <CardBackground  source={props.image}/>
        </TouchableView>
    );
};

export default CollectionItem;