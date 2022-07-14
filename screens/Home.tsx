import React, { FunctionComponent } from "react";
import { ScrollView, StyleSheet, View} from "react-native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import  { colors } from "../components/colors";
import CardSection from "../components/NFTCard/CardSection";
import TransactionSection from "../components/Ranking/RankingSection";
import {Container} from "../components/shared";
import {ProfileProps} from "../components/Profiles/types";
import {CardProps} from "../components/NFTCard/types";

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

    const cardsData: CardProps[] = [
        {
          id: 1,
          nftName: "Bored Ape",
          nftDescription: "Aliqua pariatur esse commodo proident Lorem dolore. Officia eu et minim incididunt pariatur Lorem est laborum consectetur .",
          price: "0.8",
          image: bored_ape1,
          nftCreator: {
            id: 4,
            name: "Danielle",
            background: colors.orange,
            pfp: mutantape,
        }
        },
        {
            id: 2,
            nftName: "bored apes",
            nftDescription: "lorem fjkfjsekfengn afmkwfawkf akfmkfmwf",
            price: "2.1",
            image: bored_ape3,
            nftCreator: {
                id: 3,
                name: "Allisson",
                background: colors.orange,
                pfp: cryptopunks,
            }
          },
          {
            id: 3,
            nftName: "bored apes",
            nftDescription: "lorem fjkfjsekfengn afmkwfawkf akfmkfmwf",
            price: "6.4",
            image: bored_ape4,
            nftCreator: {
                id: 2,
                name: "Augustin",
                background: colors.orange,
                pfp: coolcats,
            }
          },
          {
            id: 4,
            nftName: "bored apes",
            nftDescription: "lorem fjkfjsekfengn afmkwfawkf akfmkfmwf",
            price: "1.2",
            image: bored_ape2,
            nftCreator: {
                id: 1,
                name: "Anthoney",
                background: colors.orange,
                pfp: bayc,
            },
          }
    ];

    const profileData: ProfileProps[] = [
        {
            id: 1,
            name: "Anthoney",
            background: colors.orange,
            pfp: bayc,
        },
        {
            id: 2,
            name: "Augustin",
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
            <StatusBar style="light"/>
            <ScrollView nestedScrollEnabled={true} style={{ width: "100%", height: "100%"}} >

                    <CardSection data={cardsData} />

                    <ProfileSection data={profileData} sectionName={"Trending Collections"}/>

                    <CardSection data={cardsData} />

                    <ProfileSection data={profileData2} sectionName={"Top Collections"}/>

                    <CardSection data={cardsData} />

                    <ProfileSection data={profileData2} sectionName={"Picked For You"}/>
           </ScrollView>
        </HomeContainer>
    );
};

export default Home;