import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/routes';

import './src/config/ReactotronConfig';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#612F74" />
      <Routes />
    </>
  );
}
