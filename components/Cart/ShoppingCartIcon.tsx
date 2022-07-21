import { FunctionComponent } from "react";
import styled from "styled-components/native"
import {connect, useSelector} from "react-redux";
import RegularText from "../texts/RegularText";
import { colors } from '../colors';
import { Ionicons } from '@expo/vector-icons';
import {AppState} from "../../store/type.d";
import { useNavigation } from "@react-navigation/native";

const IconView = styled.TouchableOpacity`
    padding: 5px;

`;

const IconTextView = styled.View`
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 15px;
    backgroundColor: transparent;
    left: 22px;
    bottom: 22px;
    align-items: center;
    justify-content: center;
    z-index: 100;

`;


const ShoppingCartIcon: FunctionComponent = (props) => {
    const cart = useSelector((state: AppState) => state.cartReducer.cart);
    const navigation = useNavigation();
    return (
    <IconView onPress={() => {navigation.navigate('Cart' as never)}}>
        <IconTextView>
            <RegularText textStyles={{color: colors.black, fontWeight: 'bold'}}>{cart.length}</RegularText>
        </IconTextView>
        <Ionicons name="cart" size={30} color={colors.white}></Ionicons>
    </IconView>);
};

const mapStateToProps = (state: AppState) => {
    return {
        cart: state.cartReducer.cart,
    }
};

export default connect(mapStateToProps)(ShoppingCartIcon);
