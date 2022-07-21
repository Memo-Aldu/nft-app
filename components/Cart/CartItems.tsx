import React from 'react';
import styled from 'styled-components/native';
import { INFT } from "../NFTCard/types"; 
import RegularText from '../texts/RegularText';
import SmallText from '../texts/SmallText';
import { colors } from '../colors';
import { Ionicons } from '@expo/vector-icons';
import { connect } from "react-redux";
import { DispatchType } from "./../../store/type.d";
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const CartRow = styled.View`
    flex-direction: row;
    width: 100%;
    margin-bottom: 20px;
`;

const CardBackground = styled.ImageBackground`
    height: 125px;
    width: 125px;
    resize-mode: cover;
    border-radius: 25px;
    margin-right: 15px;
    overflow: hidden;
`;

const TouchableView = styled.TouchableOpacity`
    justify-content: space-between;
    align-items: center;
`;

const IconTouchableView = styled.TouchableOpacity`
    margin-bottom: 30px;
`;

const LeftView = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex: 2;
`;

const RightView = styled.View`
    flex-direction: row;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 25px;
    
`;

interface CartItemProps {
    nft: INFT;
    removeFromCart: (nft: INFT) => void;
}

const CartItem: React.FC<CartItemProps> = (props: CartItemProps) => {
    const {nft} = props;
    const navigation = useNavigation();
    const { t, i18n } = useTranslation();
    const handlePress = () => {
        navigation.navigate("NFTDetails" as never, {"nft" : nft} as never)
    };
    return (
        <CartRow>
            <LeftView>
                <TouchableView onPress={handlePress}>
                    <CardBackground source={nft.image}/>
                </TouchableView>
                <View style={{marginBottom: 40}}>
                    <RegularText textStyles={{textAlign: "left", color: colors.secondary, marginBottom: 5}}>
                        {nft.name}
                    </RegularText>
                    <SmallText textStyles={{textAlign: "left", color: colors.darkGrey}}>
                        {nft.data.price} ETH / { Math.round((nft.data.price * 1523.64) * 100) / 100} USD
                    </SmallText>
                </View>
            </LeftView>
            
            <RightView>
                <IconTouchableView onPress={() => {props.removeFromCart(nft)}}>
                    <Ionicons style={{textAlign: "right", color: colors.secondary}} name='trash-outline' size={20}/>
                </IconTouchableView>
            </RightView>
    </CartRow>
    )
}


const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        removeFromCart: (nft: INFT) => {
            dispatch({type: 'REMOVE_NFT', nft: nft});
        }
    }
};

export default connect(null,mapDispatchToProps)(CartItem);