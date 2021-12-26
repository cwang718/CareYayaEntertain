import React from 'react';
import { Layout, Button, Avatar } from '@ui-kitten/components';
import { PeopleIcon, SunIcon, CardIcon, CameraIcon } from '../Utils/icons';
import { homeStyles } from '../Utils/styling';

// Main screen with 4 types of things to do with senior—Connect, Laugh, Play, Reminisce
const HomeScreen = ({ navigation }) => {
    return (
      <>
        <Layout style={homeStyles.logoContainer}>
            <Avatar style={homeStyles.logo} source={require('../Images/logo.png')} />
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