import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as theme } from './custom-theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as mapping } from './mapping.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Main Screen
import HomeScreen from './Screens/home';

// Connect Screen imports
import ConnectScreen from './Screens/connect';
import QuestionCardScreen from './Components/questionCard';

// Play Screen imports
import PlayScreen from './Screens/play';
import CardMatchScreen from './Screens/Play/cardMatch';
import CrosswordScreen from './Screens/Play/crossword';
import SolitaireScreen from './Screens/Play/solitaire';
import SudokuScreen from './Screens/Play/sudoku';
import MemoryGamesScreen from './Screens/Play/memoryGames';

// Reminisce Screen imports
import ReminisceScreen from './Screens/reminisce';
import MusicScreen from './Screens/Reminisce/music';
import YoutubeScreen from './Screens/Reminisce/youtube';
import PhotoScreen from './Screens/Reminisce/photos';

// Laugh Screen imports
import LaughScreen from './Screens/laugh';
import JokesScreen from './Screens/Laugh/jokes';
import FeelGoodMoviesScreen from './Screens/Laugh/feelGoodMovies';
import DanceScreen from './Screens/Laugh/dance';
import TwistersScreen from './Screens/Laugh/twisters';
import KaraokeScreen from './Screens/Laugh/karaoke';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider 
      {...eva} 
      theme={{ ...eva.light, ...theme }}
      customMapping={mapping}>
        
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
              name="Card Match" 
              component={CardMatchScreen} 
            />
            <Stack.Screen 
              name="Crossword" 
              component={CrosswordScreen} 
            />
            <Stack.Screen 
              name="Solitaire" 
              component={SolitaireScreen} 
            />
            <Stack.Screen 
              name="Sudoku" 
              component={SudokuScreen} 
            />
            <Stack.Screen 
              name="Memory Games" 
              component={MemoryGamesScreen} 
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
            <Stack.Screen 
              name="Laugh"
              component={LaughScreen}
            />
            <Stack.Screen 
              name="Jokes"
              component={JokesScreen}
            />
            <Stack.Screen 
              name="Feel-Good Movies"
              component={FeelGoodMoviesScreen}
            />
            <Stack.Screen 
              name="Dance"
              component={DanceScreen}
            />
            <Stack.Screen 
              name="Tongue Twisters"
              component={TwistersScreen}
            />
            <Stack.Screen 
              name="Karaoke"
              component={KaraokeScreen}
            />
          </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </ApplicationProvider>
  </>
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
