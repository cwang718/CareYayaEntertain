import React from "react";
import { WebView } from 'react-native-webview';

// Screen with view of sudoku game website
const Sudoku = () => {
  return (
    <WebView source={{ uri: 'https://sudoku.com/' }} />
  );
}

export default Sudoku;