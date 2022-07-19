import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { INFT, CardSectionProps } from "../NFTCard/types"; 
import RegularText from '../texts/RegularText';
import { ScreenHeight } from '../shared';
import { colors } from '../colors';
import { Ionicons } from '@expo/vector-icons';
import CartItem from './CartItems';
import RegularButton from '../buttons/RegularButton';

const CartBackground = styled.View`
    width: 100%;
    padding-horizontal: 25px;
    padding-top: 5px;
    flex: 2;
`;

const CartRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const CartList = styled.FlatList`
    height: ${ScreenHeight * 0.5}px;
    flexGrow: 0
    width: 100%;

`;

const CartSection: React.FC<CardSectionProps> = (props: CardSectionProps) => {


    return (
        <CartBackground>
            <CartRow style={{marginBottom:25}}>
                {props.data.length > 0 && <RegularText textStyles={{fontSize: 19, color: colors.secondary}}>Verify your cart</RegularText>}
                {props.data.length === 0 && <RegularText textStyles={{fontSize: 19, color: colors.secondary}}>Your cart is empty</RegularText>}
            </CartRow>

            <CartList 
                data={props.data}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 25,
            
                }}
                keyExtractor={({id}: any) => id.toString()}
                renderItem={({item}: any) => <CartItem nft={item}/>}
            
            />
            <CartRow style={{justifyContent: "space-between", width: "100%", marginTop: 40}}>
                <RegularButton onPress={() => {console.log("p")}} textStyles={{fontSize: 15, fontWeight: 'bold'}} btnStyles={{width:150, height:40, justifyContent: 'center', borderRadius: 8, padding: 0}}>Checkout</RegularButton>
                <RegularButton onPress={() => {console.log("p")}} textStyles={{fontSize: 15, fontWeight: 'bold'}} btnStyles={{width:150, height:40, justifyContent: 'center', borderRadius: 8, padding: 0}}>Remove All</RegularButton>
            </CartRow>
        </CartBackground>
    );
};

export default CartSection;