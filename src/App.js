import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import UserDetailsPage from "./pages/UserDetailsPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* Protected routes */}
        <Route element={<Auth />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:id" element={<UserDetailsPage />} />
        </Route>

        {/* Public Routes */}
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </>
  );
};

export default App;
