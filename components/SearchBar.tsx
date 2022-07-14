import * as React from 'react';
import { Searchbar } from 'react-native-paper';


const MySearchbar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  return (
    <Searchbar
      style={{ marginHorizontal: 30 }}
      placeholder="Search for NFTs and Collections"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default MySearchbar;
