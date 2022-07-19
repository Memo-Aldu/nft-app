import React, { FunctionComponent } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import CartSection from "../components/Cart/CartSection";
import  { colors } from "../components/colors";
import { Container } from "../components/shared";
import { connect, useSelector } from "react-redux";
import { NFTState } from "../store/type.d";

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



const Cart: FunctionComponent = () => {
    const cart = useSelector((state: NFTState) => state.cart);
    console.log(cart.length);
    return (
        <CartContainer>
            <StatusBar translucent
                backgroundColor="transparent"
                barStyle="dark-content"/>
            <CartSection data={cart}/>
        </CartContainer>
    );
};


const mapStateToProps = (state: NFTState) => {
    return {
        cart: state.cart,
    }
};

export default connect(mapStateToProps)(Cart);