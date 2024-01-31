import React from 'react'
import FloatingButton from '../Components/FloatingButton'
import FisrtSection from '../Components/Sections/FisrtSection'
import SecoundSection from '../Components/Sections/SecoundSection'
import ThirdSection from '../Components/Sections/ThirdSection'
import FourthSection from '../Components/Sections/FourthSection'
import FifthSection from '../Components/Sections/FifthSection'
import SixthSection from '../Components/Sections/SixthSection'
import SeventhSection from '../Components/Sections/SeventhSection'
import EighthSection from '../Components/Sections/EighthSection'
import CustomReactQuery from '../CustomReactQuery'
import { RingLoader } from 'react-spinners'

const HomeLayout = () => {
    const { loading, error, data } = CustomReactQuery('dummyhome.json')
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
    return (
        <div>
            <FloatingButton />
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
                    <FourthSection />
                </div>
            </section>
            {/* <section>
                <div className="content-wrapper">
                    <FifthSection />
                </div>
            </section>
            <section>
                <div className="content-wrapper">
                    <SixthSection />
                </div>
            </section> */}
            <section>
                <div className="content-wrapper">
                    <SeventhSection />
                </div>
            </section>
            <section>
                <div className="content-wrapper">
                    <EighthSection />
                </div>
            </section>
        </div>
    )
}

export default HomeLayout
