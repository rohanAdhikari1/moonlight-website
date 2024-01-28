import React from 'react'
import FloatingButton from '../Components/FloatingButton'
import Navbar from '../Components/Navbar/navbar'
import FisrtSection from '../Components/Sections/FisrtSection'
import Footer from '../Components/Sections/Footer'
import SecoundSection from '../Components/Sections/SecoundSection'
import ThirdSection from '../Components/Sections/ThirdSection'
import CustomReactQuery from '../CustomReactQuery'

const HomeLayout = () => {
    const { loading, error, data } = CustomReactQuery('dummydata.json')
    return (
        <div className='dark:bg-black w-full h-full overflow-hidden'>
            <Navbar contacts={data.contacts} />
            <FloatingButton />
            <div>
                <section>
                    <div className="content-wrapper">
                        <FisrtSection backgroundImage={data.backgroundImage} />
                    </div>
                </section>
                <section>
                    <div className="content-wrapper">
                        <SecoundSection introduction={data.introduction} />
                    </div>
                </section>
                <section>
                    <div className="content-wrapper">
                        <ThirdSection data={data.welcome} />
                    </div>
                </section>
                <section>
                    <div className="content-wrapper">
                        <Footer slogan={data.slogan} />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HomeLayout
