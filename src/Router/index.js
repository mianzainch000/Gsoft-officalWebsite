import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Company } from "../Pages/Company";
import { Home } from "../Pages/Home";
import { Life } from "../Pages/Life";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Company />} />
        <Route path="/life" element={<Life />} />
      </Routes>
    </BrowserRouter>
  );
};
