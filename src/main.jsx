import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RingLoader } from "react-spinners";
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const HomeLayout = React.lazy(() => import('./Layouts/HomeLayout'));
const Error404 = React.lazy(() => import('./Layouts/Error404.jsx'));
const AboutUs = React.lazy(() => import('./Layouts/AboutUs.jsx'));
const GovernBody = React.lazy(() => import('./Layouts/GovernBody.jsx'));
const MissionVission = React.lazy(() => import('./Layouts/mission-Vission.jsx'));
const OurTeam = React.lazy(() => import('./Layouts/OurTeam.jsx'));
const Philosophy = React.lazy(() => import('./Layouts/Philosophy.jsx'));
const Programs = React.lazy(() => import('./Layouts/Programs.jsx'));
const Data = React.lazy(() => import('./Layouts/Data.jsx'));

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
            <Route path='/about/about-us' element={<AboutUs />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/about/governing-body' element={<GovernBody />} />
            <Route path='/about/mission-vission' element={<MissionVission />} />
            <Route path='/about/philosophy' element={<Philosophy />} />
            <Route path='/about/team' element={<OurTeam />} />
            <Route path='/programs' element={<Programs />} />
            <Route path='/data/:apiname/:id' element={<Data />} />
            <Route path='*' element={<Error404 />} />
          </Route>
        </Routes>
      </Suspense>

    </BrowserRouter>
  </React.StrictMode>,
)
