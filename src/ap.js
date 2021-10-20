import React from "react";

import HomeScreen from "./HomeScreen";
import { AuthProvider } from "./contexts/AuthContext";
import SignUp from "./components/SignUp";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="app">
      <HomeScreen />
      <AuthProvider>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <SignUp />
          </div>
        </Container>
      </AuthProvider>
    </div>
  );
}

export default App;
