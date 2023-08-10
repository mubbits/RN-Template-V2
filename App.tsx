import React from 'react'
import { LogBox, Text } from 'react-native'
import { Provider } from 'react-redux';
import store from './src/redux';
import Navigation from './src/navigation';


const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>

  )
}

export default App