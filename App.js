import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { default as theme } from './custom-theme.json';
import HomeScreen from './Screens/home';
import ConnectScreen from './Screens/connect';
import QuestionCardScreen from './Screens/questionCard';
import PlayScreen from './Screens/play';
import PlayMatchingScreen from './Screens/Play/playMatching';
import ReminisceScreen from './Screens/reminisce';
import MusicScreen from './Screens/Reminisce/music';
import YoutubeScreen from './Screens/Reminisce/youtube';
import PhotoScreen from './Screens/Reminisce/photos';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <NavigationContainer style={styles.container}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              // options={{ title: 'Welcome' }}
            />
            <Stack.Screen 
              name="Connect" 
              component={ConnectScreen} 
            />
            <Stack.Screen 
              name="Question Card" 
              component={QuestionCardScreen} 
            />
            <Stack.Screen 
              name="Play" 
              component={PlayScreen} 
            />
            <Stack.Screen 
              name="Play Matching" 
              component={PlayMatchingScreen} 
            />
            <Stack.Screen
              name="Reminisce"
              component={ReminisceScreen}
            />
            <Stack.Screen 
              name="Music"
              component={MusicScreen}
            />
            <Stack.Screen 
              name="Youtube"
              component={YoutubeScreen}
            />
            <Stack.Screen 
              name="Photos"
              component={PhotoScreen}
            />
          </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
