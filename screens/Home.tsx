import React, { FunctionComponent } from "react";
import { ScrollView, StatusBar} from "react-native";
import styled from "styled-components/native";
import  { colors } from "../components/colors";
import CardSection from "../components/NFTCard/CardSection";
import TransactionSection from "../components/Ranking/RankingSection";
import {Container} from "../components/shared";
import {ProfileProps} from "../components/Profiles/types";
import {INFT} from "../components/NFTCard/types";
import {data} from "../nft.data";

// assets
import bored_ape1 from "./../assets/nft/1.jpg";
import bored_ape2 from "./../assets/nft/2.jpg";
import bored_ape3 from "./../assets/nft/3.jpg";
import bored_ape4 from "./../assets/nft/4.jpg";

import bayc from "./../assets/nft-collections/bayc-1.png";
import coolcats from "./../assets/nft-collections/coolcats.png";
import cryptopunks from "./../assets/nft-collections/Cryptopunks.png";
import meebits from "./../assets/nft-collections/meebits.png";
import mutantape from "./../assets/nft-collections/mutantape.png";
import ProfileSection from "../components/Profiles/ProfileSection";

const HomeContainer = styled(Container)`
    background-color: ${colors.lightGrey};
    width: 100%;
    height: 100%;
`;



const Home: FunctionComponent = () => {

    const profileData: ProfileProps[] = [
        {
            id: 1,
            name: "Anthoney",
            background: colors.orange,
            pfp: bayc,
        },
        {
            id: 2,
            name: "Austin",
            background: colors.orange,
            pfp: coolcats,
        },
        {
            id: 3,
            name: "Allisson",
            background: colors.orange,
            pfp: cryptopunks,
        },
        {
            id: 4,
            name: "Danielle",
            background: colors.orange,
            pfp: mutantape,
        },
        {
            id: 5,
            name: "Tom",
            background: colors.orange,
            pfp: coolcats,
        },
    ];

    const profileData2 = [
        {
            id: 1,
            name: "Anthoney",
            background: colors.orange,
            pfp: meebits,
        },
        {
            id: 2,
            name: "Augustin",
            background: colors.orange,
            pfp: cryptopunks,
        },
        {
            id: 3,
            name: "Allisson",
            background: colors.orange,
            pfp: mutantape,
        },
        {
            id: 4,
            name: "Danielle",
            background: colors.orange,
            pfp: coolcats,
        },
        {
            id: 5,
            name: "Danielle",
            background: colors.orange,
            pfp: coolcats,
        },
    ];

    return (
        <HomeContainer>
            <StatusBar translucent
                backgroundColor="transparent"
                barStyle="dark-content"/>
            <ScrollView nestedScrollEnabled={true} style={{ width: "100%", height: "100%"}} >

                    <CardSection data={data[0]} />

                    <ProfileSection data={profileData} sectionName={"Trending Collections"}/>

                    <CardSection data={data[0]} />

                    <ProfileSection data={profileData2} sectionName={"Top Collections"}/>

                    <CardSection data={data[0]} />

                    <ProfileSection data={profileData2} sectionName={"Picked For You"}/>
           </ScrollView>
        </HomeContainer>
    );
};

export default Home;