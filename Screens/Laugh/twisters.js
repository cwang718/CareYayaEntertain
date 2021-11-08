import React from "react";
import { WebView } from 'react-native-webview';

const Twisters = () => {
  return (
    <WebView source={{ uri: 'https://www.everythingmom.com/activities/50-tongue-twisters-for-family-fun' }} />
  );
}

export default Twisters;