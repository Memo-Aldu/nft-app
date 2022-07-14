import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { RankingSectionProps } from './types';
import RegularText from '../texts/RegularText';
import SmallText from '../texts/SmallText';
import { colors } from '../colors';
import { Ionicons } from '@expo/vector-icons';
import TransactionItem from './RankingItem';

const RankingBackground = styled.View`
    width: 100%;
    padding-horizontal: 25px;
    padding-top: 5px;
    flex: 2;
`;

const RankingRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const RankingList = styled.FlatList`
    width: 100%;

`;

const TransactionSection: FunctionComponent<RankingSectionProps> = (props) => {
    return (
        <RankingBackground>
            <RankingRow style={{marginBottom:25}}>
                <RegularText textStyles={{fontSize: 19, color: colors.secondary}}>
                    Collections
                </RegularText>
                <SmallText textStyles={{color: colors.secondary}}>
                    Volume
                    <Ionicons name="caret-down" size={13} color={colors.darkGrey}/>
                </SmallText>
            </RankingRow>

            <RankingList 
                data={props.data}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 25,
            
                }}
                keyExtractor={({id}: any) => id.toString()}
                renderItem={({item}: any) => <TransactionItem {...item}/>}
            
            />
        </RankingBackground>
    );
};

export default TransactionSection;