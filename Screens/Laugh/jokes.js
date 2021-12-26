import React from "react";
import { WebView } from 'react-native-webview';

// Screen with view of jokes to tell senior
const Jokes = () => {
  return (
    <WebView source={{ uri: 'https://www.weloveourgranny.com/clean-jokes-for-senior-citizens.html' }} />
  );
}

export default Jokes;