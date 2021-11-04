import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Layout, Text, Button, Icon } from '@ui-kitten/components';
import { optionStyles } from '../../Utils/styling';

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
    fontSize: 30,
    padding: '10%',
    textAlign: 'center',
  },
});

const Photos = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={optionStyles.outerSmallContainer}>
          <Layout style={optionStyles.iconBiggerContainer}>
            <Icon name='book-open-outline' style={optionStyles.icon} />
          </Layout>

          <Layout>
            <Text style={optionStyles.subtitleHeader}>Ask if they can walk through a photo album with you!</Text>
          </Layout>
          <Layout style={styles.bottomContainer}>
              <Button 
                style={styles.uniqueButton}>
                Record
              </Button>
          </Layout>
        </ScrollView>
    )
}

export default Photos;