import './App.css'
import FloatingButton from './Components/FloatingButton'
import Navbar from './Components/Navbar/navbar'
import FisrtSection from './Components/Sections/FisrtSection'
import Footer from './Components/Sections/Footer'
import SecoundSection from './Components/Sections/SecoundSection'
import ThirdSection from './Components/Sections/ThirdSection'

function App() {

  return (
    <>
      <div className='dark:bg-black w-full h-full overflow-hidden'>
        <Navbar />
        <FloatingButton />
        <div>
          <section>
            <div className="content-wrapper">
              <FisrtSection />
            </div>
          </section>
          <section>
            <div className="content-wrapper">
              <SecoundSection />
            </div>
          </section>
          <section>
            <div className="content-wrapper">
              <ThirdSection />
            </div>
          </section>
          <section>
            <div className="content-wrapper">
              <Footer />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
