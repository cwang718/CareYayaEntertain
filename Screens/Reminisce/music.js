import React from 'react';
import { StyleSheet, Text, Linking } from 'react-native';
import { Button } from '@ui-kitten/components';
import { FlatGrid } from 'react-native-super-grid';

const Music = ({ navigation }) => {
  const [items, setItems] = React.useState([
    { name: '1920s', code: '#1abc9c', link: "https://www.youtube.com/watch?v=sYhFFgqmH4c&list=PL_jarfhtY-pWDUMidG3lDRtviJl6r8eUK"},
    { name: '1930s', code: '#2ecc71', link: "https://www.youtube.com/playlist?playnext=1&list=PL-KExsBdL-XGgV7_1jRUgrCrat4jVDVT1&feature=gws_kp_artist"},
    { name: '1940s', code: '#3498db', link: "https://www.youtube.com/watch?v=Bc9WiV2iVjc&list=PLsAk8xGZSOZY0rX0L2XFMDwwxIF2Wk1_x&index=2"},
    { name: '1950s', code: '#9b59b6', link: "https://www.youtube.com/watch?v=LlU7sj-p5Ao&list=RDLlU7sj-p5Ao&start_radio=1&rv=LlU7sj-p5Ao&t=1"},
    { name: '1960s', code: '#34495e', link: "https://www.youtube.com/watch?v=WStvRDdxdWY&list=RDWStvRDdxdWY&start_radio=1&rv=WStvRDdxdWY&t=2"},
    { name: '1970s', code: '#16a085', link: "https://www.youtube.com/watch?v=fj3nitUMKa4&list=PLrrnXlNJhKtvdywcJfazmwHpEpDWylCSB&index=2"},
    { name: '1980s', code: '#27ae60', link: "https://music.youtube.com/watch?v=Kzb2dLI_U1s&list=OLAK5uy_n1lOhCVWYM7EtLMYWvrbV5JuOWW1HGlx8"},
    { name: '1990s', code: '#2980b9', link: "https://music.youtube.com/watch?v=xwtdhWltSIg&list=OLAK5uy_liRaUpTkBlLUkbL6T_wizZr5FHB74kaXc"},
    { name: '2000s', code: '#8e44ad', link: "https://music.youtube.com/watch?v=y5p1vylPTU8&list=OLAK5uy_mcxYHN05am68H2kU7uTrJpfExc5ALBjgo"},
    { name: '2010s', code: '#2c3e50', link: "https://open.spotify.com/playlist/3ckau7CzXJzdTbR2ngbia3"},
    { name: 'Modern', code: '#c0392b', link: ""},
    // { name: 'CARROT', code: '#e67e22' },
    // { name: 'ALIZARIN', code: '#e74c3c' },
    // { name: 'CLOUDS', code: '#ecf0f1' },
    // { name: 'CONCRETE', code: '#95a5a6' },
    // { name: 'ORANGE', code: '#f39c12' },
    // { name: 'PUMPKIN', code: '#d35400' },
    // { name: 'POMEGRANATE', code: '#c0392b' },
    // { name: 'SILVER', code: '#bdc3c7' },
    // { name: 'ASBESTOS', code: '#7f8c8d' },
  ]);

  return (
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <Button 
            style={[styles.itemContainer, { backgroundColor: item.code }]}
            // onPress={()=>{ Linking.openURL(item.link)}}
            onPress={() => navigation.navigate('Youtube')}>
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