import './App.css'
import React from 'react'
import Navbar from './Components/Navbar/navbar'
import Footer from './Components/Sections/Footer'
import CustomReactQuery from './CustomReactQuery'
import { Outlet } from 'react-router-dom'
import { RingLoader } from 'react-spinners'

function App() {
  const { loading, error, data } = CustomReactQuery('dummydata.json')

  if (loading) {
    return (
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
    )
  }

  if (data != []) return (
    <>
      <div className='dark:bg-black w-full h-full overflow-hidden'>
        <Navbar contacts={data.contacts} />
        <Outlet />
        <section>
          <div className="content-wrapper">
            <Footer slogan={data.slogan} />
          </div>
        </section>
      </div>
    </>
  )
}

export default App
