import { Route, Routes } from "react-router-dom";
import { Background } from "./components/Background";
import { Home } from "./pages/Home";
import { Header } from "./components/Header/Header";
import { AuthenticationGuard } from "./components/auth0/AuthtenticationGuard";
import { Dashboard } from "./pages/Dashboard";
import { CallbackPage } from "./components/auth0/CallbackPage";

function App() {
  return (
    <>
      <Background />
      <Header />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={<AuthenticationGuard component={Dashboard} />}
          />
          <Route path="/callback" element={<CallbackPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
