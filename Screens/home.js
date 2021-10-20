import React from 'react';
import { StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
import { default as theme } from '../custom-theme.json';

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  colContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    width: '40%',
    height: '50%',
    margin: '5%',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: '20%',
  },
  outerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = ({ navigation }) => {
    return (
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <Layout>
            <Text style={styles.header}>CareYaya Entertain</Text>
        </Layout>

        <Layout style={styles.colContainer}>
          <Layout style={styles.rowContainer}>
                <Button 
                  style={styles.button} 
                  onPress={() => navigation.navigate('Connect')}>
                      Connect  
                </Button>
                <Button style={styles.button}>    Laugh    </Button>
          </Layout>

          <Layout style={styles.rowContainer}>
                <Button 
                  style={styles.button}
                  onPress={() => navigation.navigate('Play')}>
                          Play      
                </Button>
                <Button 
                  style={styles.button}
                  onPress={() => navigation.navigate('Reminisce')}>
                  Reminisce
                </Button>
          </Layout>
        </Layout>
      </ApplicationProvider>
    )
}

export default HomeScreen;