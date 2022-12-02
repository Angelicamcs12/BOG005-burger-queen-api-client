import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import List from "./pages/List";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="menu" element={<Menu />} />
          <Route path="order-list" element={<List />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
