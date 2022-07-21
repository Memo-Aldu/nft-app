import * as React from 'react';
import { Searchbar } from 'react-native-paper';

interface SearchBarProps {
    onChangeSearch: (text: string) => void;
    searchQuery: string;
}
const MySearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  return (
    <Searchbar
      style={{width: '100%'}}
      placeholder="Search for NFTs and Collections"
      onChangeText={props.onChangeSearch}
      value={props.searchQuery}
    />
  );
};

export default MySearchBar;
