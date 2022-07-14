import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../components/colors";
import { Container, ScreenWidth, ScreenHeight } from "../components/shared";
import { StatusBar, SafeAreaView, ImageBackground, Image, View } from "react-native";
import TransactionAvi from '../components/Ranking/RankingAvi';
import { Ionicons } from '@expo/vector-icons';
import ProfileView from "./../components/Profiles/ProfileItem";
import RegularText from "../components/texts/RegularText";
import SmallText from "../components/texts/SmallText";
import RegularButton from "../components/buttons/RegularButton";

const DetailsContainer = styled(Container)`
    background-color: ${colors.lightGrey};
    width: 100%;
    height: 100%;
`;

const NFTImageBackground = styled(ImageBackground)`
    position: relative;
    height: ${ScreenHeight * 0.45}px;
    width: 100%;
`;

// for nav back button
const NFTImageView = styled.View`
    padding: 20px;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    justify-content: space-between;
`;


const NFTTextView = styled.View`
    padding-horizontal: 20px;
    padding-vertical: 15px;
    z-index: 1;
    width: 100%;

`;

const NFTRowView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const NFTIconView = styled.View`
    flex-direction: row;
    align-items: center;
    padding-right: 30px;
`;

interface NFTDetailsScreenProps {
    route: any;
    navigation: any;
    children: any;
}

const NFTDetailsScreen: FunctionComponent<NFTDetailsScreenProps> = (props) => {                  
    const {nft}: any = props.route.params;
    console.log(nft);
    return (
        <DetailsContainer>
            <StatusBar translucent
            backgroundColor="transparent"
            barStyle="light-content"/>
            <NFTImageBackground source={nft.image}>
                <NFTImageView>
                    <Ionicons onPress={props.navigation.goBack} name="chevron-back-outline" size={30} color={colors.black} />
                </NFTImageView>
            </NFTImageBackground>
            <NFTRowView>
                <NFTTextView>
                    <RegularText textStyles={{fontSize: 24, color: colors.orange, fontWeight:"bold"}}>
                        {nft.nftName}
                    </RegularText>
                    <RegularText textStyles={{fontSize: 15, color: colors.black, fontWeight:'normal', paddingTop:10}}>
                        {nft.nftDescription}
                    </RegularText>
                </NFTTextView>
            </NFTRowView>

            <NFTRowView style={{justifyContent: "flex-start", width:"100%", paddingLeft: 20}}>
                <TransactionAvi
                        background={nft.nftCreator.background}
                        icon={nft.nftCreator.pfp}
                    />
                    <View style={{marginLeft: 10}}>
                        <RegularText textStyles={{textAlign: "left", color: colors.secondary, marginBottom: 5}}>
                            {nft.nftCreator.name}
                        </RegularText>
                        <SmallText textStyles={{textAlign: "left", color: colors.darkGrey}}>
                            Art stuido by nat
                        </SmallText>
                    </View>
            </NFTRowView>

            <NFTRowView style={{justifyContent: "flex-start", width:"100%", padding: 20}}>
                <NFTIconView>
                    <Image source={require('./../assets/eth.jpg')} style={{width: 30, height: 30, borderRadius: 30}} />
                    <SmallText textStyles={{fontWeight: 'bold', marginLeft: 4, color: colors.black}}>{nft.price}</SmallText>
                </NFTIconView>
                <NFTIconView>
                    <Ionicons name="chatbubble" size={25} color={colors.orange}
                        style={{position: "relative", zIndex: 1}}/>
                    <SmallText textStyles={{fontWeight: 'bold', marginLeft: 4, color: colors.black}}>{nft.price}</SmallText>
                </NFTIconView>
                <NFTIconView>
                    <Ionicons name="heart" size={25} color={colors.orange}
                            style={{position: "relative", zIndex: 1}}/>
                    <SmallText textStyles={{fontWeight: 'bold', marginLeft: 4, color: colors.black}}>{nft.price}</SmallText>
                </NFTIconView>
            </NFTRowView>
            <NFTRowView style={{justifyContent: "space-evenly", width: "100%"}}>
            <RegularButton onPress={() => {console.log("g")}} textStyles={{fontSize: 15, fontWeight: 'bold'}} btnStyles={{width:150, height:40, justifyContent: 'center', borderRadius: 8, padding: 0}}>Add To Cart</RegularButton>
            <RegularButton onPress={() => {console.log("g")}} textStyles={{fontSize: 15, fontWeight: 'bold'}} btnStyles={{width:150, height:40, justifyContent: 'center', borderRadius: 8, padding: 0}}>Buy</RegularButton>
            </NFTRowView>
            
        </DetailsContainer>
    );
};
export default NFTDetailsScreen;