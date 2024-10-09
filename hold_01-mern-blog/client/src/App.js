import './App.css';
import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<IndexPage />} />

        <Route path={'/login'} element={<div><LoginPage /></div>
        } />

        <Route path={'/register'} element={<div><RegisterPage /></div>} />

      </Route>
    </Routes>

  );
}

export default App;
