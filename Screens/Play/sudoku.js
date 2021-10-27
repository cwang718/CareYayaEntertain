import React from "react";
import { WebView } from 'react-native-webview';

const Sudoku = () => {
  return (
    <WebView source={{ uri: 'https://sudoku.com/' }} />
  );
}

export default Sudoku;