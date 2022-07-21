import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { colors } from "../components/colors";
import SearchCardSection from "../components/NFTCard/SearchCardSection";
import { Container } from "../components/shared";

import {data} from "../nft.data";
import { INFT } from "../components/NFTCard/types";

const SearchContainer = styled(Container)`
    background-color: ${colors.lightGrey};
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
`;



const SearchCardsData: INFT[] = data.reduce((accumulator, value) => accumulator.concat(value), []);

const ListView = styled.View`
    width: 100%;
    height: 100%;
`;


const Search: FunctionComponent = () => {
    return (
        <SearchContainer>
            <StatusBar translucent
                backgroundColor="transparent"
                barStyle="dark-content"/>
            <ListView>
                <SearchCardSection data={SearchCardsData} />
            </ListView>
        </SearchContainer>
    );
};

export default Search;