import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button, Icon } from '@ui-kitten/components';

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

const PeopleIcon = (props) => (
  <Icon name='people' {...props} />
);

const SunIcon = (props) => (
  <Icon name='sun' {...props} />
);

const CardIcon = (props) => (
  <Icon name='layers' {...props} />
);

const CameraIcon = (props) => (
  <Icon name='camera' {...props} />
);

const HomeScreen = ({ navigation }) => {
    return (
      <>
        <Layout>
            <Text style={styles.header}>CareYaya Entertain</Text>
        </Layout>

        <Layout style={styles.colContainer}>
          <Layout style={styles.rowContainer}>
                <Button 
                  style={styles.button} 
                  onPress={() => navigation.navigate('Connect')}
                  accessoryLeft={PeopleIcon}
                  size='giant'>
                  Connect
                </Button>

                <Button 
                  style={styles.button}
                  accessoryLeft={SunIcon}
                  size='giant'>
                  Laugh
                </Button>
          </Layout>

          <Layout style={styles.rowContainer}>
                <Button 
                  style={styles.button}
                  onPress={() => navigation.navigate('Play')}
                  accessoryLeft={CardIcon}
                  size='giant'>
                  Play
                </Button>

                <Button 
                  style={styles.button}
                  onPress={() => navigation.navigate('Reminisce')}
                  accessoryLeft={CameraIcon}
                  size='giant'>
                  Reminisce
                </Button>
          </Layout>
        </Layout>
      </>
    )
}

export default HomeScreen;