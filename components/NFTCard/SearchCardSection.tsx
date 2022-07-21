import react, { FunctionComponent, useState, useEffect } from "react";
import styled from "styled-components/native"
import { CardSectionProps, INFT } from "./types";
import SearchCardItem from "./SearchCardItem";
import RegularText from "../texts/RegularText";
import { colors } from "../colors";
import MySearchBar from "../SearchBar";
import DropDown from "../buttons/DropDown";
import React from "react";
const SearchView = styled.View`
    width: 100%;
    padding-horizontal: 30px;
    padding-top: 5px;
    flex: 2;
    align-items: center;
    justify-content: center;
`;

const SearchHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const SearchList = styled.FlatList`
    width: 100%;
    padding-bottom: 15px;
`;

const SearchRow = styled.View`
    flex-direction: row;
    width: 120px;
    height: 30px;

`;

const SearchCardSection: FunctionComponent<CardSectionProps> = (props) => {
    const [filteredData, setfilteredData] = useState(props.data);
    const [masterData, setMasterData] = useState(props.data);
    const [searchText, setSearchText] = useState("");
    const [sortFilter, setsortFilter] = useState("");
    
    const sortDataWithFilter = () => {
        if(sortFilter === "price"){
            filteredData.sort((a, b) => {
                return b.data.price - a.data.price;
            });
         }
         else if(sortFilter === "likes"){
            filteredData.sort((a, b) => {
                return a.data.likes - b.data.likes;
            })
         }
         else if(sortFilter === "popularity"){
            filteredData.sort((a, b) => {
                return a.data.comments.length - b.data.comments.length;
            });
         }
         return filteredData;
    };

    const onChangeText = (text: string) => {
        setSearchText(text);
        const newData = masterData.filter(item => {
            const itemData = `${item.name.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setfilteredData(newData);
    }
    return (
        <SearchView>
                <MySearchBar onChangeSearch={onChangeText} searchQuery={searchText}/>
                <SearchHeader style={{marginBottom:25, paddingTop: 20}}>
                    <RegularText textStyles={{fontSize: 19, color: colors.secondary}}>
                        Results
                    </RegularText>
                    <SearchRow>
                        <DropDown 
                        onChange={(value) => {setsortFilter(value)}}
                        data={[
                            {label: 'Price', value: 'price'},
                            {label: 'Likes', value: 'likes'},
                            {label: 'Popularity', value: 'popularity'},
                        ]} name='Sort by'/>
                    </SearchRow>
                </SearchHeader>
    
            <SearchList 
                    data={sortDataWithFilter()}
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