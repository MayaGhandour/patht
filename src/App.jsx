import { RouterProvider } from "react-router-dom";
import "./App.css";
// import router from "./Routes/Router"; // Adjust the import path if necessary
import store from "./Redux/store.js"; // Redux store
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next"; // i18next Provider
import i18n from "./i18n"; // Import your i18n configuration
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
function App() {
  return (
    <>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </Router>
        </I18nextProvider>
      </Provider>
    </>
  );
}

export default App;
