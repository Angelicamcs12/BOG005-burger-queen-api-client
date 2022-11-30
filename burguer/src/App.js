import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Menu from "./pages/Menu";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />

          <Route path="menu" element={<Menu />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
