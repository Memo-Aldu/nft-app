import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../components/colors";
import { Container, ScreenHeight } from "../components/shared";
import { StatusBar, ImageBackground, Image, View, TouchableOpacity } from "react-native";
import TransactionAvi from '../components/Ranking/RankingAvi';
import { Ionicons } from '@expo/vector-icons';
import RegularText from "../components/texts/RegularText";
import SmallText from "../components/texts/SmallText";
import RegularButton from "../components/buttons/RegularButton";
import ShoppingCartIcon from "../components/Cart/ShoppingCartIcon";
import {connect, useDispatch } from "react-redux";
import {openCommentModal} from "../store/actionCreators";
import { INFT } from "../components/NFTCard/types";
import { DispatchType, ModalAction } from "../store/type.d";
import MyBottomSheet from "../components/BottomSheet/MyBottomSheet";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

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
    width: 100%;

`;

const NFTRowView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const NFTIconView = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    padding-right: 30px;
`;

interface NFTDetailsScreenProps {
    route: any;
    navigation: any;
    children: any;
    addToCart: (nft: INFT) => void;
    openComment: (nft: INFT) => void;
}

const NFTDetailsScreen: FunctionComponent<NFTDetailsScreenProps> = (props) => {    
    const { t } = useTranslation();              
    const {nft}: any = props.route.params;
    const dispatch: DispatchType = useDispatch();
    const navigation = useNavigation();

    const handleNFTPress = () => {
        dispatch({type: "ADD_NFT", nft: nft});
        navigation.navigate("Cart" as never)
    };

    return (
        <DetailsContainer>
            <StatusBar translucent
            backgroundColor="transparent"
            barStyle="light-content"/>
                <NFTImageBackground source={nft.image}>
                    <NFTImageView>
                        <Ionicons onPress={props.navigation.goBack} name="chevron-back-outline" size={30} color={colors.black} />
                        <ShoppingCartIcon></ShoppingCartIcon>
                    </NFTImageView>
                </NFTImageBackground>
                <NFTRowView>
                    <NFTTextView>
                        <RegularText textStyles={{fontSize: 24, color: colors.orange, fontWeight:"bold"}}>
                            {nft.name}
                        </RegularText>
                        <RegularText textStyles={{fontSize: 15, color: colors.black, fontWeight:'normal', paddingTop:10}}>
                            {nft.description}
                        </RegularText>
                    </NFTTextView>
                </NFTRowView>

                <NFTRowView style={{justifyContent: "flex-start", width:"100%", paddingLeft: 20}}>
                    <TouchableOpacity onPress={() => {}}>
                    <TransactionAvi
                            background={nft.creator.background}
                            icon={nft.creator.pfp}
                        />
                    </TouchableOpacity>

                        <View style={{marginLeft: 10}}>
                            <RegularText textStyles={{textAlign: "left", color: colors.secondary, marginBottom: 5}}>
                                {nft.creator.name}
                            </RegularText>
                            <SmallText textStyles={{textAlign: "left", color: colors.darkGrey}}>
                                {nft.creator.description}
                            </SmallText>
                        </View>
                </NFTRowView>

                <NFTRowView style={{justifyContent: "flex-start", width:"100%", padding: 20}}>
                    <NFTIconView>
                        <Image source={require('./../assets/eth.jpg')} style={{width: 30, height: 30, borderRadius: 30}} />
                        <SmallText textStyles={{fontWeight: 'bold', marginLeft: 4, color: colors.black}}>{nft.data.price}</SmallText>
                    </NFTIconView>
                    <NFTIconView>
                        <Ionicons name="chatbubble" size={25} color={colors.orange}
                            onPress={() => {dispatch(openCommentModal(true, {nft}))}}
                            style={{position: "relative", zIndex: 1}}/>
                        <SmallText textStyles={{fontWeight: 'bold', marginLeft: 4, color: colors.black}}>{nft.data.comments.length}</SmallText>
                    </NFTIconView>
                    <NFTIconView>
                        <Ionicons name="heart" size={25} color={colors.orange}
                                style={{position: "relative", zIndex: 1}}/>
                        <SmallText textStyles={{fontWeight: 'bold', marginLeft: 4, color: colors.black}}>{nft.data.likes}</SmallText>
                    </NFTIconView>
                </NFTRowView>
                <NFTRowView style={{justifyContent: "space-evenly", width: "100%"}}>
                <RegularButton onPress={() => {props.addToCart(nft)}} textStyles={{fontSize: 15, fontWeight: 'bold'}} 
                btnStyles={{width:150, height:40, justifyContent: 'center', borderRadius: 8, padding: 0}}>{t("Card.AddToCart")}</RegularButton>
                <RegularButton onPress={handleNFTPress} textStyles={{fontSize: 15, fontWeight: 'bold'}} 
                btnStyles={{width:150, height:40, justifyContent: 'center', borderRadius: 8, padding: 0}}>{t("Card.Buy")}</RegularButton>
                </NFTRowView>
            <MyBottomSheet/>
        </DetailsContainer>
    );
};

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addToCart: (nft: INFT) => {
            dispatch({type: 'ADD_NFT', nft: nft});
        },
    }
};

export default connect(null, mapDispatchToProps)(NFTDetailsScreen);