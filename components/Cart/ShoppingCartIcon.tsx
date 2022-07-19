import react, { FunctionComponent } from "react";
import styled from "styled-components/native"
import {connect, useSelector} from "react-redux";
import SmallText from "../texts/SmallText";
import RegularText from "../texts/RegularText";
import { colors } from '../colors';
import { Ionicons } from '@expo/vector-icons';
import {NFTState} from "../../store/type.d";
import { useNavigation } from "@react-navigation/native";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

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
    const cart = useSelector((state: NFTState) => state.cart);
    const navigation = useNavigation();
    return (
    <IconView onPress={() => {navigation.navigate('Cart' as never)}}>
        <IconTextView>
            <RegularText textStyles={{color: colors.black, fontWeight: 'bold'}}>{cart.length}</RegularText>
        </IconTextView>
        <Ionicons name="cart" size={30} color={colors.white}></Ionicons>
    </IconView>);
};

const mapStateToProps = (state: NFTState) => {
    return {
        cart: state.cart,
    }
};

export default connect(mapStateToProps)(ShoppingCartIcon);
