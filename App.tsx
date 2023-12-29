import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {MainNavigation} from './js/navigation/MainNavigation';
import {Provider} from 'react-redux';
import {store} from './js/redux/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
