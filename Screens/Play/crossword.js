import React from "react";
import { WebView } from 'react-native-webview';

const Crossword = () => {
  return (
    <WebView source={{ uri: 'https://downforacross.com/' }} />
  );
}

export default Crossword;