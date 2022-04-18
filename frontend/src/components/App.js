import React from "react";
import ReactDOM from "react-dom/client";
import { AppContainer } from "../styles/Main.style";
import MainContent from "./layout/MainContent";

import store from "../redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <AppContainer>
      <MainContent />
    </AppContainer>
  );
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

export default App;
