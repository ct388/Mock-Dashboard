import { HashRouter, Routes, Route } from "react-router-dom";

import HomePage from './home/page.jsx';
import RequestsPage from './requests/page.jsx';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/requests" element={<RequestsPage />} />
      </Routes>
    </HashRouter>
  );
}