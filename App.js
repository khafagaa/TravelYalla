import * as React from 'react';
import {Provider} from 'react-redux';
import {store} from './App/Redux/configuration';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import MyTheme from './App/Navigations/Themes/Theme.tsx';
import {useColorScheme} from 'react-native';
import Navigate from './App/Navigations/navigationScreen';

export default function App() {
  const scheme = useColorScheme();

  return (
    <Provider store={store}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : MyTheme}>
        <Navigate />
      </NavigationContainer>
    </Provider>
  );
}
