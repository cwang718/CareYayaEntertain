import React from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';
import { PeopleIcon, SunIcon, CardIcon, CameraIcon } from '../Utils/icons';
import { homeStyles } from '../Utils/styling';

const HomeScreen = ({ navigation }) => {
    return (
      <>
        <Layout>
            <Text style={homeStyles.header}>CareYaya Entertain</Text>
        </Layout>

        <Layout style={homeStyles.colContainer}>
          <Layout style={homeStyles.rowContainer}>
                <Button 
                  style={homeStyles.button} 
                  onPress={() => navigation.navigate('Connect')}
                  accessoryLeft={PeopleIcon}
                  size='giant'>
                  Connect
                </Button>

                <Button 
                  style={homeStyles.button}
                  onPress={() => navigation.navigate('Laugh')}
                  accessoryLeft={SunIcon}
                  size='giant'>
                  Laugh
                </Button>
          </Layout>

          <Layout style={homeStyles.rowContainer}>
                <Button 
                  style={homeStyles.button}
                  onPress={() => navigation.navigate('Play')}
                  accessoryLeft={CardIcon}
                  size='giant'>
                  Play
                </Button>

                <Button 
                  style={homeStyles.button}
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