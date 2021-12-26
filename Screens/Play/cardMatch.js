import React from "react";
import { WebView } from 'react-native-webview';

// Screen with view of card matching games website
const CardMatch = () => {
  return (
    <WebView source={{ uri: 'https://www.memozor.com/memory-games/for-seniors-or-elderly' }} />
  );
}

export default CardMatch;