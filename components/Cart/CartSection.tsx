import React from 'react';
import styled from 'styled-components/native';
import { INFT } from "../NFTCard/types"; 
import RegularText from '../texts/RegularText';
import { ScreenHeight } from '../shared';
import { colors } from '../colors';
import CartItem from './CartItems';
import RegularButton from '../buttons/RegularButton';
import SmallText from '../texts/SmallText';
import { View } from 'react-native';

const CartBackground = styled.View`
    width: 100%;
    padding-horizontal: 25px;
    padding-top: 5px;
    flex: 2;
    align-items: center;
`;

const CartRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const CartList = styled.FlatList`
    height: ${ScreenHeight * 0.37}px;
    flexGrow: 0
    width: 100%;

`;

type CartProps = {
    cart: INFT[];
    total: number;
    onRemoveAll: () => void;
    onCheckout: () => void;
}

const CartSection: React.FC<CartProps> = (props: CartProps) => {


    return (
        <CartBackground>
            <CartRow style={{marginBottom:25}}>
                {props.cart.length > 0 && <RegularText textStyles={{fontSize: 19, color: colors.secondary}}>Verify your cart</RegularText>}
                {props.cart.length === 0 && <RegularText textStyles={{fontSize: 19, color: colors.secondary}}>Your cart is empty</RegularText>}
            </CartRow>

            <CartList 
                data={props.cart}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 25,
            
                }}
                keyExtractor={({id}: any) => id.toString()}
                renderItem={({item}: any) => <CartItem nft={item}/>}
            
            />
            <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%', marginTop: 10}}>
                <RegularText textStyles={{fontSize: 19, color: colors.secondary}} >Summary</RegularText>
                <CartRow style={{marginTop: 10}}>
                    <SmallText textStyles={{fontSize: 15, color: colors.secondary}}>Items</SmallText>
                    <SmallText textStyles={{fontSize: 15, color: colors.secondary}}>
                        { Math.round((props.total) * 100)/100} ETH
                    </SmallText>
                </CartRow>
                <CartRow style={{marginTop: 10}}>
                    <SmallText textStyles={{fontSize: 15, color: colors.secondary}}>Network fee</SmallText>
                    <SmallText textStyles={{fontSize: 15, color: colors.secondary}}>
                        { ((props.total) * 0.02).toFixed(3)} ETH
                    </SmallText>
                </CartRow>
                <CartRow style={{marginTop: 10}}>
                    <RegularText textStyles={{fontSize: 15, color: colors.secondary}}>Total</RegularText>
                    <RegularText textStyles={{fontSize: 15, color: colors.secondary}}>
                        { ((props.total) * 1.02).toFixed(3)} ETH / ${Math.round((props.total) * 1.02 * 1523.64 *100)/100}
                    </RegularText>
                </CartRow>
            </View>
            <CartRow style={{justifyContent: "space-between", width: "100%", marginTop: 20}}>
                <RegularButton onPress={props.onCheckout} textStyles={{fontSize: 15, fontWeight: 'bold'}} btnStyles={{width:150, height:40, justifyContent: 'center', borderRadius: 8, padding: 0}}>Pay</RegularButton>
                <RegularButton onPress={props.onRemoveAll} textStyles={{fontSize: 15, fontWeight: 'bold'}} btnStyles={{width:150, height:40, justifyContent: 'center', borderRadius: 8, padding: 0}}>Remove All</RegularButton>
            </CartRow>
        </CartBackground>
    );
};

export default CartSection;