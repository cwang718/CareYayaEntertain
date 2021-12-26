import React from "react";
import { WebView } from 'react-native-webview';

// Screen with view of memory games website
const MemoryGames = () => {
  return (
    <WebView source={{ uri: 'https://www.improvememory.org/brain-games/memory-games/' }} />
  );
}

export default MemoryGames;