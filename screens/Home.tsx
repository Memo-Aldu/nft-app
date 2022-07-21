import React, { FunctionComponent } from "react";
import { ScrollView, StatusBar} from "react-native";
import styled from "styled-components/native";
import  { colors } from "../components/colors";
import CardSection from "../components/NFTCard/CardSection";
import {Container} from "../components/shared";
import {ProfileProps} from "../components/Profiles/types";
import {data} from "../nft.data";

import bayc from "./../assets/nft-collections/bayc-1.png";
import coolcats from "./../assets/nft-collections/coolcats.png";
import cryptopunks from "./../assets/nft-collections/Cryptopunks.png";
import meebits from "./../assets/nft-collections/meebits.png";
import mutantape from "./../assets/nft-collections/mutantape.png";
import ProfileSection from "../components/Profiles/ProfileSection";
import { useTranslation } from "react-i18next";

const HomeContainer = styled(Container)`
    background-color: ${colors.lightGrey};
    width: 100%;
    height: 100%;
`;



const Home: FunctionComponent = () => {
    const { t, i18n } = useTranslation();

    const profileData: ProfileProps[] = [
        {
            id: 1,
            name: "Anthoney",
            background: colors.orange,
            pfp: bayc,
            collection: data[0],

        },
        {
            id: 2,
            name: "Austin",
            background: colors.orange,
            pfp: coolcats,
            collection: data[2],
        },
        {
            id: 3,
            name: "Allisson",
            background: colors.orange,
            pfp: cryptopunks,
            collection: data[3],
        },
        {
            id: 4,
            name: "Mutant Ape",
            background: colors.orange,
            pfp: mutantape,
            collection: data[4],
        },
        {
            id: 5,
            name: "Tom",
            background: colors.orange,
            pfp: coolcats,
            collection: data[2],
        },
    ];

    const profileData2 = [
        {
            id: 1,
            name: "Meebits",
            description: "Art studio Anthoney",
            background: colors.orange,
            pfp: meebits,
            collection: data[4],
        },
        {
            id: 2,
            name: "Punks",
            description: "Art studio Augustin",
            background: colors.orange,
            pfp: cryptopunks,
            collection: data[3],
        },

        {
            id: 4,
            name: "Bayc",
            description: "Art studio Danielle",
            background: colors.orange,
            pfp: bayc,
            collection: data[0],
        },
        {
            id: 5,
            name: "Coolcats",
            description: "Art studio Danielle",
            background: colors.orange,
            pfp: coolcats,
            collection: data[2],
        },
    ];

    return (
        <HomeContainer>
            <StatusBar translucent
                backgroundColor="transparent"
                barStyle="dark-content"/>
            <ScrollView nestedScrollEnabled={true} style={{ width: "100%", height: "100%", marginBottom: 70}} >

                    <CardSection data={data[0]} />

                    <ProfileSection data={profileData} sectionName={t("Home.TrendingCollection")}/>

                    <CardSection data={data[1]} />

                    <ProfileSection data={profileData2} sectionName={t("Home.TopCollection")}/>

                    <CardSection data={data[4]} />

                    <ProfileSection data={profileData2} sectionName={t("Home.PickedForYou")}/>

                    <CardSection data={data[3]} />
           </ScrollView>
        </HomeContainer>
    );
};

export default Home;