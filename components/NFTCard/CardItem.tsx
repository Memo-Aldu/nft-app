import react, { FunctionComponent } from "react";
import styled from "styled-components/native"
import { colors } from "../colors";
import { ScreenWidth, ScreenHeight } from "../shared";
import { INFT } from "./types";
import { Image, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import RegularButton from "../buttons/RegularButton";

const CardView = styled.View`
    height: 100%;
    resize-mode: cover;
    margin-right: 20px;
    overflow: hidden;
    justify-content: center;
`;

const CardDetailsView = styled.View`
    height: 70px; 
    width: 100%;
    position: absolute;
    background-color: rgba(0,0,0,0.4);
    bottom: 0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-horizontal: 20px;
`;

const CardDetailsSubView = styled.View`
    flex-direction: row;
    align-items: center;
`;

const Style = StyleSheet.create({
    card: {
        height: 300,
        width: ScreenWidth * 0.55,
        backgroundColor: colors.white,
        marginLeft: 20,
        shadowColor: colors.darkGrey,
        shadowRadius: 10, 
        shadowOpacity: 0.3,
        shadowOffset: {height: 10, width: 0},
        elevation: 10,
        borderRadius: 20,
        borderWidth: 7,
        borderColor: colors.white,
    },
    cardDetails: {
        height: 70, 
        width:"100%",
        position: "absolute",
        background: "rgba(0,0,0,0.4)"
    }
});


const CardBackground = styled.ImageBackground`
    height: 100%;
    width: 100%;
    resize-mode: cover;
    background-color: ${colors.accent};
    border-radius: 20px;
    margin-right: 25px;
    overflow: hidden;
`;

const CardTouchable = styled.TouchableOpacity`
    height: 100%;
    border-radius: 25px;
    activeOpacity: 0.7px;
`;

import card_bg from "./../../assets/bgs/background_transparent.png";
import bayc from "./../../assets/nft-collections/bayc-1.png";
import SmallText from "../texts/SmallText";
import { useNavigation } from "@react-navigation/native";

const CardItem: FunctionComponent<INFT> = (props) => {
    const navigation = useNavigation();
    const handlePress = () => {navigation.navigate("NFTDetails" as never, {"nft" : props} as never)};
    const handleNFTPress = () => {console.log("NFT BUY Pressed")};
    console.log(props.image)
    return (
        <CardView>
            <CardTouchable style={Style.card} onPress={handlePress}>
                <Ionicons 
                name="heart-outline" 
                size={28} 
                color={colors.white}
                style={{position: "absolute", zIndex: 1, right: 10, top: 20}} />
                <CardBackground source={props.image}  />
                <CardDetailsView>
                    <CardDetailsSubView>
                        <Image source={require('./../../assets/eth.jpg')} style={{width: 25, height: 25, borderRadius: 25}} />
                        <SmallText textStyles={{fontWeight: 'bold', marginLeft: 4, color: colors.white}}>{props.data.price}</SmallText>
                    </CardDetailsSubView>
                    <RegularButton onPress={handleNFTPress} textStyles={{fontSize: 15, fontWeight: 'bold'}} btnStyles={{width:70, height:30, justifyContent: 'center', borderRadius: 8, padding: 0}}>Buy</RegularButton>
                </CardDetailsView>
            </CardTouchable>
        </CardView>
    );
};

export default CardItem;