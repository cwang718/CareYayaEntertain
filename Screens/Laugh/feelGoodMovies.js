import React from "react";
import { WebView } from 'react-native-webview';

const FeelGoodMovies = () => {
  return (
    <WebView source={{ uri: 'https://www.goldencarers.com/100-movie-recommendations-for-seniors/3902/' }} />
  );
}

export default FeelGoodMovies;