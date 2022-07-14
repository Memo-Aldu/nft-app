import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { RankingProps } from './types';
import RegularText from '../texts/RegularText';
import SmallText from '../texts/SmallText';
import { colors } from '../colors';
import TransactionAvi from './RankingAvi';
import { View } from 'react-native';


const RankingRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;
`;

const LeftView = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
    align-items: center;
    flex: 2;
`;

const RightView = styled.View`
    flex: 1;
`;

const TransactionItem: FunctionComponent<RankingProps> = (props) => {
    return (
        <RankingRow>
            <LeftView>
                <TransactionAvi
                    background={props.art.background}
                    icon={props.art.icon}
                />
                <View style={{marginLeft: 10}}>
                    <RegularText textStyles={{textAlign: "left", color: colors.secondary, marginBottom: 5}}>
                        {props.name}
                    </RegularText>
                    <SmallText textStyles={{textAlign: "left", color: colors.darkGrey}}>
                        #{props.rank}
                    </SmallText>
                </View>
            </LeftView>
            <RightView>
            <RegularText textStyles={{textAlign: "right", color: colors.secondary, marginBottom: 5}}>
                        Volume {props.volume}
                    </RegularText>
                    <SmallText textStyles={{textAlign: "right", color: colors.darkGrey}}>
                        MarketCap {props.MKTCap}
                    </SmallText>
            </RightView>
        </RankingRow>
    );
};

export default TransactionItem;