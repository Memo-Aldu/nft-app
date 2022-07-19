import React, { FunctionComponent } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import DropDown from "../components/buttons/DropDown";
import { colors } from "../components/colors";
import RankingSection from "../components/Ranking/RankingSection";
import { Container } from "../components/shared";


const RankingContainer = styled(Container)`
    background-color: ${colors.lightGrey};
    width: 100%;
    flex: 1;
`;

const RankingRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 25px;
`;

import bayc from "./../assets/nft-collections/bayc-1.png";
import coolcats from "./../assets/nft-collections/coolcats.png";
import cryptopunks from "./../assets/nft-collections/Cryptopunks.png";
import meebits from "./../assets/nft-collections/meebits.png";
import mutantape from "./../assets/nft-collections/mutantape.png";
const RankingData = [
    {
        id: 1,
        name: "Meebits",
        rank: "1",
        volume: "8.31B",
        trades: "12,808",
        sales: "29,931",
        MKTCap: "107.2M",
        art: {
            background: colors.primary,
            icon: meebits,
        },
    },
    {
        id: 2,
        name: "Cryptopunks",
        rank: "2",
        volume: "2.85B",
        trades: "6,758",
        sales: "21,834",
        MKTCap: "724.1M",
        art: {
            icon: cryptopunks,
            background: colors.tertiary,
        },
    },
    {
        id: 3,
        name: "Bored Apes",
        rank: "3",
        volume: "2.05B",
        trades: "13,648",
        sales: "27,144",
        MKTCap: "1B",
        art: {
            background: colors.accent,
            icon: bayc,
        },
    },
    {
        id: 4,
        name: "Mutant Ape",
        rank: "4",
        volume: "1.45B",
        trades: "25,343",
        sales: "34,454",
        MKTCap: "378.83M",
        art: {
            background: colors.accent,
            icon: mutantape,
        },
    },
    {
        id: 5,
        name: "Cool Cats",
        rank: "5",
        volume: "1.23B",
        trades: "33,478",
        sales: "28,258",
        MKTCap: "707.2M",
        art: {
            background: colors.accent,
            icon: coolcats,
        },
    }
];

const Ranking: FunctionComponent = () => {
    return (
        <RankingContainer>
            <StatusBar translucent
                backgroundColor="transparent"
                barStyle="dark-content"/>
            <RankingSection data={RankingData}></RankingSection>
        </RankingContainer>
    );
};

export default Ranking;