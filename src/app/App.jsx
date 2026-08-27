import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './home/page.jsx';
import RequestsPage from './requests/page.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/requests" element={<RequestsPage />} />
      </Routes>
    </BrowserRouter>
  );
}