import React from "react";
import AppRouter from "./Router";
import { useState } from "react";
import { authService } from "../fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return <AppRouter isLoggedIn={isLoggedIn} />;
}

export default App;
