import React from "react";
import { WebView } from 'react-native-webview';

const Solitaire = () => {
  return (
    <WebView source={{ uri: 'https://solitaired.com/' }} />
  );
}

export default Solitaire;