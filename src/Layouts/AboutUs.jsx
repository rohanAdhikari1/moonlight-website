import React from 'react'
import Header from '../Components/Header'
import MiniFooter from '../Components/MiniFooter'

const AboutUs = () => {
    return (
        <div>
            <Header title="About Us" />
            <div className='flex flex-col w-[90%] mx-auto py-2 mb-9'>
                <div className='border-b-2 dark:boder-white'>
                    <p className='dark:text-white font-body text-[#323239] text-lg py-12'>
                        🌙 Welcome to Moonlight Model English Academy! 🌟<br /><br />Nestled in the heart of Nepal, in the vibrant community of Morang, lies a beacon of educational excellence – Moonlight Model English Academy. Established in 2056, our institution has been a cornerstone of quality education, illuminating the path to success for countless students. Situated in the serene surroundings of Ratuwamai Ward-04, Aambari, our academy stands as a testament to dedication and commitment to nurturing young minds.<br /><br />At Moonlight Model English Academy, we cater to students from diverse backgrounds, providing a comprehensive learning environment from nursery to grades 1 through 12. Our curriculum is designed to foster holistic development, ensuring that each student receives the tools and knowledge necessary to thrive in today's ever-evolving world.<br /><br />From the early foundational years of nursery, LKG, and UKG, to the crucial stages of primary and secondary education, we strive to instill a love for learning and curiosity in every student. Our experienced faculty members are dedicated to cultivating critical thinking, creativity, and character development, preparing our students to become responsible global citizens.<br /><br />Moreover, for those aspiring to pursue higher education in management, our academy offers specialized courses for grades 11 and 12. With a focus on practical skills and theoretical knowledge, we equip our students with the expertise needed to excel in the dynamic field of management.<br /><br />At Moonlight Model English Academy, we believe in nurturing not only academic excellence but also in fostering a supportive and inclusive community where every student feels valued and empowered to reach their full potential.<br /><br />Join us on this enlightening journey as we illuminate the path to a brighter future at Moonlight Model English Academy.</p>
                </div>
                <MiniFooter views='1k' />
            </div>
        </div>
    )
}

export default AboutUs
