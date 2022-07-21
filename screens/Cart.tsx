import React, { FunctionComponent } from "react";
import { StatusBar, View } from "react-native";
import styled from "styled-components/native";
import CartSection from "../components/Cart/CartSection";
import  { colors } from "../components/colors";
import { Container } from "../components/shared";
import { connect, useDispatch, useSelector } from "react-redux";
import { DispatchType, AppState } from "../store/type.d";
import MyBottomSheet from "../components/BottomSheet/MyBottomSheet";
import {INFT} from "../components/NFTCard/types";
import { openPaymentModal } from "../store/actionCreators";
import Toast from 'react-native-root-toast';

const CartContainer = styled(Container)`
    background-color: ${colors.lightGrey};
    width: 100%;
    flex: 1;
`;

const RankingRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 25px;
`;

type payment ={
    amount: number,
    id: string,

}
interface CartScreenProps {
    removeAllNFT: () => void;
    grantCollectibles: (items: INFT[]) => void;
}

const Cart: FunctionComponent<CartScreenProps> = (props: CartScreenProps) => {
    const {cart, total, user} = useSelector(mapStateToProps);

    const dispatch = useDispatch();

    const onPaymentMade = () => {
        if(user.balance >= total && cart.length > 0) {
            let payedAmount = total;
            props.removeAllNFT();
            props.grantCollectibles(cart);
            const payment: payment = {
                amount: payedAmount,
                id: Math.random().toString(36).slice(-6),
            };
            dispatch(openPaymentModal(true, {payment}));
        }
        else if(user.balance < total) {
            Toast.show("You don't have enough balance to pay for this purchase!");
        }
        else if(cart.length === 0) {
            Toast.show("You don't have any items to pay for!");
        }
    }
    
    return (
        <CartContainer>
            <StatusBar translucent
                backgroundColor="transparent"
                barStyle="dark-content"/>
                <CartSection cart={cart} total={total} onRemoveAll={() => {props.removeAllNFT()}} 
                onCheckout={onPaymentMade}/>
            <MyBottomSheet/>
        </CartContainer>
    );
};


const mapStateToProps = (state: AppState) => {
    return {
        cart: state.cartReducer.cart,
        total: state.cartReducer.total,
        user: state.userReducer.user,
    }
};

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        removeAllNFT: () => {
            dispatch({type: "REMOVE_ALL_NFT"});
        },
        grantCollectibles: (items: INFT[]) => {
            dispatch({type: "SET_COLLECTION", payload: items});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);