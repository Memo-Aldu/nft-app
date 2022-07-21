import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { RankingAviProps } from './types';
import {Image } from "react-native";

const StyledView = styled.View`
    height: 55px;
    width: 55px;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
`;

const TransactionAvi: FunctionComponent<RankingAviProps> = (props) => {
    return(
        <StyledView style={{backgroundColor: props.background}}>
            <Image source={props.icon} style={{width:50, height:50, borderRadius:25}}/>
        </StyledView>
    );
};

export default TransactionAvi;