import react, { FunctionComponent } from "react";
import styled from "styled-components/native"
import { CardSectionProps } from "./types";
import SearchCardItem from "./SearchCardItem";
import RegularText from "../texts/RegularText";
import SmallText from "../texts/SmallText";
import { colors } from "../colors";
import { Ionicons } from '@expo/vector-icons';
const SearchView = styled.View`
    width: 100%;
    padding-horizontal: 10px;
    padding-top: 5px;
    flex: 2;
`;

const SearchRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const SearchList = styled.FlatList`
    width: 100%;
    padding-horizontal: 25px;
    padding-bottom: 15px;
`;

const SearchCardSection: FunctionComponent<CardSectionProps> = (props) => {
    return (
                <SearchView>
                <SearchRow style={{marginBottom:25}}>
                    <RegularText textStyles={{fontSize: 19, color: colors.secondary, marginHorizontal:20}}>
                        Results
                    </RegularText>
                    <SmallText textStyles={{color: colors.secondary, marginHorizontal:20}}>
                        Price
                        <Ionicons name="caret-down" size={13} color={colors.darkGrey}/>
                    </SmallText>
                </SearchRow>
    
                <SearchList 
                    data={props.data}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 25,
                    }}
                    keyExtractor={({id}: any) => id.toString()}
                    renderItem={({item}: any) => <SearchCardItem {...item}/>}
                    numColumns={2}
                />
            </SearchView>
    );
};

export default SearchCardSection;