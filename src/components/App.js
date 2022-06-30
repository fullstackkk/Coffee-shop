import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import '../styles/app.scss';

const Main = lazy(() => import('../pages/Main'));
const Coffee = lazy(() => import('../pages/Coffee'));
const SingleProduct = lazy(() => import('../pages/SingleProduct'));
const Beans = lazy(() => import('../pages/Beans'));



const App = () => {
  return (
    <Router>
      <div className="app">
        <Suspense fallback={'Loading...'}>
          <Routes>
            <Route path="Coffee-shop/" element={<Main />} />
            <Route path="Coffee-shop/Coffee" element={<Coffee />} />
            <Route path="Coffee-shop/Coffee/SingleProduct" element={<SingleProduct />} />
            <Route path="Coffee-shop/Beans" element={<Beans />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
