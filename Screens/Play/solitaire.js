import React from "react";
import { WebView } from 'react-native-webview';

// Screen with view of solitaire game website
const Solitaire = () => {
  return (
    <WebView source={{ uri: 'https://solitaired.com/' }} />
  );
}

export default Solitaire;