import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
import { default as theme } from '../../custom-theme.json';

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
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '30%',
    padding: '10%',
    paddingBottom: '30%',
  },
  outerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '40%',
  },
  button: {
    borderRadius: 20,
    width: '40%',
    margin: '5%',
  },
  uniqueButton: {
    justifyContent: 'center',
    textAlign: 'center',
    width: '35%',
    height: '150%',
    borderRadius: 100,
    padding: '20%',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: '10%',
  },
  sectionHeader: {
    fontSize: 20,
    padding: '10%',
    textAlign: 'center',
  },
});

const Photos = ({ navigation }) => {
    return (
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <ScrollView>
          <Layout>
              <Text style={styles.header}>CareYaya Entertain</Text>
          </Layout>

          <Layout>
            <Text style={styles.sectionHeader}>Ask if they can walk through a photo album with you!</Text>
          </Layout>
          <Layout style={styles.bottomContainer}>
              <Button 
                style={styles.uniqueButton}>
                Record
              </Button>
          </Layout>
        </ScrollView>
      </ApplicationProvider>
    )
}

export default Photos;