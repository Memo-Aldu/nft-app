import react, { FunctionComponent } from "react";
import styled from "styled-components/native"
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

const TouchableView = styled.TouchableOpacity`
    justify-content: space-between;
    align-items: center;
`;


const CollectionItem: FunctionComponent<INFT> = (props) => {

    return (
        <TouchableView>
            <CardBackground  source={props.image}/>
        </TouchableView>
    );
};

export default CollectionItem;