import React from "react";
import { WebView } from 'react-native-webview';

// Screen with view of list of feel-good movies to watch
const FeelGoodMovies = () => {
  return (
    <WebView source={{ uri: 'https://www.goldencarers.com/100-movie-recommendations-for-seniors/3902/' }} />
  );
}

export default FeelGoodMovies;