import React from 'react';
import { StyleSheet, Text, Linking } from 'react-native';
import { Button } from '@ui-kitten/components';
import { FlatGrid } from 'react-native-super-grid';
import { playlists } from './playlists';
import { gridStyles } from '../../Utils/styling';

const Music = ({ navigation }) => {
  return (
    <FlatGrid
      itemDimension={130}
      data={playlists}
      style={gridStyles.gridView}
      spacing={10}
      renderItem={({ item }) => (
        <Button 
            style={[gridStyles.itemContainer, { backgroundColor: item.code }]}
            size='giant'
            onPress={() => navigation.navigate('Youtube', {playlistId: item.id})}>
          <Text>{item.name}</Text>
        </Button>
      )}
    />
  );
}

export default Music;