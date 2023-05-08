import React from "react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store } from "./store/configureStore";
import { persistor } from "./store/configureStore";

import Layout from "./modules/Layout.module";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Layout />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
