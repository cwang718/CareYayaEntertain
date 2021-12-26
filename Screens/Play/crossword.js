import React from "react";
import { WebView } from 'react-native-webview';

// Screen with view of crossword puzzles website
const Crossword = () => {
  return (
    <WebView source={{ uri: 'https://downforacross.com/' }} />
  );
}

export default Crossword;