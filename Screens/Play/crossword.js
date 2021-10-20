import React, { useEffect, useState, useRef } from "react";
import { StyleSheet } from 'react-native';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { WebView } from 'react-native-webview';

const Crossword = () => {
  return (
    <WebView source={{ uri: 'https://downforacross.com/' }} />
  );
}

export default Crossword;