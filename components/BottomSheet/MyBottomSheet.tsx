import React, {useEffect } from 'react';
import styled from "styled-components/native"
import RegularText from '../texts/RegularText';
import SmallText from '../texts/SmallText';
import { colors } from '../colors';
import { Ionicons } from '@expo/vector-icons';
import { connect, useDispatch, useSelector } from "react-redux";
import {Payment } from "../../store/type.d";
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import RegularButton from '../buttons/RegularButton';
import { AppState } from '../../store/type.d';
import { clearModal } from '../../store/actionCreators';
import { ScreenHeight } from '../shared';
import CommentSection from '../Comment/CommentSection';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PanelHeader = styled.View`
    height: 30px;
`;


const Panel = styled.View`
    padding: 20px;
    background-color: ${colors.white};
    padding-top: 20px;
    height: 100%;
`;

const PanelRow = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 100%;
`;

const PanelInfo = styled.View`

`;

const Style = StyleSheet.create({
    header: {
        backgroundColor: colors.white,
        shadowColor: '#333333',
        shadowOpacity: 0.4,
        shadowRadius: 2,
        shadowOffset: { height: -1, width: -3 },
        paddingTop: 20,
        borderTopLeftRadius : 20,
        borderTopRightRadius : 20,

    },
});


const MyBottomSheet: React.FC = (props) => {
    const navigation = useNavigation();
    const bs = React.useRef<BottomSheet>(null);
    const fall = new Animated.Value(1);
    const {modal} = useSelector(mapStateToProps);
    const dispatch = useDispatch();


    useEffect(() => {
        if(modal.open && bs.current) {
            bs.current!.snapTo(0);
        }
        else if(!modal.open && bs.current) {
            bs.current!.snapTo(1);
        }
    }, [modal]);
    
    const renderPayment = (payment: Payment) => (
        <Panel>
            <Ionicons name='checkmark-circle-outline' size={110} style={{color: '#03fc9d', alignSelf: 'center'}}/>
            <RegularText textStyles={{fontSize: 19,alignSelf: 'center',color: colors.darkGrey}} >Success</RegularText>

            <PanelInfo>
                <PanelRow>
                    <RegularText textStyles={{textAlign: "left", color: colors.darkGrey}} >Amount Payed: </RegularText>
                    <SmallText textStyles={{color: colors.darkGrey}} >{((payment.amount) * 1.02).toFixed(3)}</SmallText>
                </PanelRow>
                <PanelRow>
                    <RegularText textStyles={{textAlign: "left", color: colors.darkGrey}} >Order Number: </RegularText>
                    <SmallText textStyles={{color: colors.darkGrey}} >{payment.id}</SmallText>
                </PanelRow>
                <PanelRow style={{paddingTop: 15}}>
                    <RegularButton onPress={() => navigation.navigate('Profile' as never)} textStyles={{fontSize: 15, fontWeight: 'bold'}} btnStyles={{width:'100%', height:40, justifyContent: 'center', borderRadius: 8, padding: 0}}>View Collection</RegularButton>
                </PanelRow>
            </PanelInfo>

        </Panel>
    ); 

    const renderContent = () => {
        switch (modal.modalType) {
            case 0:
                return renderPayment(modal.data.payment!);
            case 1:
                return (
                    <Panel>
                    <CommentSection/>
                    </Panel>
                );
        }
    }

    const renderHeader = () => (
            <View style={Style.header}>
                <PanelHeader>
                    <TouchableOpacity style={{marginRight: 20, alignItems: 'flex-end'}} onPress={() => bs.current!.snapTo(1)}>
                        <Ionicons name='ios-close' size={30} style={{color: colors.darkGrey}}/>
                    </TouchableOpacity>
                </PanelHeader>
            </View>
    );

    const onClose = () => {
        dispatch(clearModal());
    }

    return (
        <BottomSheet
        snapPoints={[ScreenHeight * 0.55, 0]}
        initialSnap={1}
        onCloseEnd={onClose}
        renderContent={renderContent}
        renderHeader={renderHeader}
        enabledGestureInteraction={true}
        enabledInnerScrolling={true}
        enabledContentGestureInteraction={false}
        ref={bs}
        callbackNode={fall}>
        </BottomSheet>
    );
};

export const mapStateToProps = (state: AppState) => {
    return {
        modal: state.modalReducer
    }
} 

export default connect(mapStateToProps)(MyBottomSheet);
