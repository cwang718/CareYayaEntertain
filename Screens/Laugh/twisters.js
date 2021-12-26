import React from "react";
import { WebView } from 'react-native-webview';

// Screen with view of twisters for caretakers and seniors to try together
const Twisters = () => {
  return (
    <WebView source={{ uri: 'https://www.everythingmom.com/activities/50-tongue-twisters-for-family-fun' }} />
  );
}

export default Twisters;