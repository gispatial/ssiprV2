import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
export default class App extends React.Component {
  render() {
    return <WebView source={{ uri: 'https://ssipr-home.gispatial.now.sh/' }} style={{ marginTop: 30 }} />;
  }
}
