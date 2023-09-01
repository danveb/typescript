import { AuthContextProvider } from "./context/AuthContext"; 
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AuthContextProvider>
  )
}