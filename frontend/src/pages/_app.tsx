import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import '@/styles/globals.css';
import '@/styles/colors.css';

import { store } from '@/features';

const persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />;
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
