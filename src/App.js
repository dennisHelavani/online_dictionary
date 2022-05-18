import "./App.css";
import React, { createContext, useState } from "react";
import Header from "./Components/Header";
import ResultList from "./Components/ResultList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");

  const value = { inputValue, setInputValue };
  return (
    <InputContext.Provider value={value}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/:word" element={<ResultList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </InputContext.Provider>
  );
}
export default App;
