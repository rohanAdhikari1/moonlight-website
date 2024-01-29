import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RingLoader } from "react-spinners";
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const HomeLayout = React.lazy(() => import('./Layouts/HomeLayout'));
const Error404 = React.lazy(() => import('./Layouts/Error404.jsx'));
const About = React.lazy(() => import('./Layouts/About.jsx'));

const loading = (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  >
    <RingLoader color="blue" size={100} />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={loading}>

        <Routes>
          <Route element={<App />} >
            <Route index element={<HomeLayout />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error404 />} />
          </Route>
        </Routes>
      </Suspense>

    </BrowserRouter>
  </React.StrictMode>,
)
