import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';

const Navigation = () => {
  return (
    <>
      <div>Navigation Bar</div>
      <Outlet/>  
    </>
  );
};

const Shop = () => {
  return (
    <h1> new Component </h1>
  );
};

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />  
    </Route>
  </Routes>
  );
};

export default App;
