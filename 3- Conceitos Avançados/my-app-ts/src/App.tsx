// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Conta from "./pages/Conta";
import { Layout } from "./components/Layout";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider value={defaultSystem}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conta" element={<Conta />} />
          </Routes>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
