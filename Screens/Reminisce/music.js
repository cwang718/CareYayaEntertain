import React from 'react';
import { StyleSheet, Text, Linking } from 'react-native';
import { Button } from '@ui-kitten/components';
import { FlatGrid } from 'react-native-super-grid';
import { playlists } from './playlists';

const Music = ({ navigation }) => {
  return (
    <FlatGrid
      itemDimension={130}
      data={playlists}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <Button 
            style={[styles.itemContainer, { backgroundColor: item.code }]}
            onPress={() => navigation.navigate('Youtube', {playlistId: item.id})}>
          <Text style={styles.itemName}>{item.name}</Text>
        </Button>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
    backgroundColor: '#E0C0AE',
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
    borderColor: 'transparent',
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});

export default Music;