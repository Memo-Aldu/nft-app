import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { colors } from "../components/colors";
import SearchCardSection from "../components/NFTCard/SearchCardSection";
import { Container } from "../components/shared";
import MySearchbar from "../components/SearchBar";

//assets
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
import { INFT } from "../components/NFTCard/types";

const SearchContainer = styled(Container)`
    background-color: ${colors.lightGrey};
    width: 100%;
    flex: 1;
`;

import SmallText from "../components/texts/SmallText";
import CardSection from "../components/NFTCard/CardSection";
import TransactionSection from "../components/Ranking/RankingSection";


const SearchCardsData: INFT[] = [
  {
    id: 1,
    nftName: "bored apes",
    nftDescription: "lorem fjkfjsekfengn afmkwfawkf akfmkfmwf",
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
    },
    {
        id: 5,
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
        id: 6,
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
        id: 7,
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

const ListView = styled.View`
    width: 100%;
    height: 100%;
    align-self: center;
    padding-left: 20px;
`;


const Search: FunctionComponent = () => {
    return (
        <SearchContainer>
            <StatusBar translucent
                backgroundColor="transparent"
                barStyle="dark-content"/>
            <MySearchbar/>
            <ListView>
                <SearchCardSection data={SearchCardsData} />
            </ListView>
        </SearchContainer>
    );
};

export default Search;