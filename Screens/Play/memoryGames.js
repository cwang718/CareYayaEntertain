import React from "react";
import { WebView } from 'react-native-webview';

const MemoryGames = () => {
  return (
    <WebView source={{ uri: 'https://www.improvememory.org/brain-games/memory-games/' }} />
  );
}

export default MemoryGames;