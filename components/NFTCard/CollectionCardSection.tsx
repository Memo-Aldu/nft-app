import react, { FunctionComponent } from "react";
import styled from "styled-components/native"
import { CardSectionProps } from "./types";
import CollectionItem from "./CollectionItem";
import RegularText from "../texts/RegularText";
import SmallText from "../texts/SmallText";
import { colors } from "../colors";
import { Ionicons } from '@expo/vector-icons';
const SearchView = styled.View`
    width: 100%;
    padding-horizontal: 10px;
    padding-top: 5px;
    flex: 1;
`;

const SearchRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const SearchList = styled.FlatList`
    width: 100%;
    padding-bottom: 15px;
`;

const CollectionCardSection: FunctionComponent<CardSectionProps> = (props) => {
    return (
            <SearchView>
                <SearchList 
                    data={props.data}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={true}
                    contentContainerStyle={{
                        paddingBottom: 25,
                    }}
                    keyExtractor={({id}: any) => id.toString()}
                    renderItem={({item}: any) => <CollectionItem {...item}/>}
                    numColumns={3}
                />
            </SearchView>
    );
};

export default CollectionCardSection;