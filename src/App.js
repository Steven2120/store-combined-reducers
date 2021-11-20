import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ShoppingCartContextProvider } from "./context/shoppingCartContext";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LogIn";
import store from "./redux";

function App() {
  return (
    <ReduxProvider store={store}>
      <ShoppingCartContextProvider>
        <Router>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route exact path="/cart" element={<CartPage />}></Route>
            <Route exact path="/login" element={<LoginPage />}></Route>
            <Route exact path="/" element={<HomePage />}></Route>
          </Routes>
        </Router>
      </ShoppingCartContextProvider>
    </ReduxProvider>
  );
}

export default App;
