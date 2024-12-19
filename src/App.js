import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes } from "./routes/Routes";
import store from "./store";
import Loader from "./components/Loader";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <React.Suspense fallback={<Loader />}>
              <Routes />
            </React.Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
