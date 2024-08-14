import React from 'react'
import landing_img from './Logos/Website.png'

const Home = () => {
    return (
        <div>
            <img className='bg-[#856046] object-cover min-w-[10rem] overflow-x-hidden' src={landing_img} alt="" />
            <div className='dark:bg-slate-900 bg-white'>
            <h1 className="p-5 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl text-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">
                            About Us
                        </span>{" "}
                    </h1>
                    <p className="text-md font-semibold text-gray-500 lg:text-xl dark:text-gray-400 p-8">
                        SPIC MACAY (Society for the Promotion of Indian Classical Music
                        And Culture Amongst Youth) is a non-political, nationwide, voluntary
                        movement founded in 1977 by Dr Kiran Seth, Professor-Emeritus at
                        IIT-Delhi who was awarded the 'Padma Shri' for his contribution to the
                        arts in 2009. SPICMACAY's intention is to enrich the quality of formal
                        education by increasing awareness about different aspects of Indian
                        heritage and inspiring the young mind to imbibe the values embedded in
                        it. It seeks to inspire youth through experiencing the mysticism
                        embodied in the rich and heterogeneous cultural tapestry of Indian and
                        World Heritage, with a hope that the beauty, grace, values and wisdom
                        embodied in these arts will influence their way of life and thinking and
                        inspire one to become a better human being. For this, the most
                        accomplished artistes of the country render programmes of Indian
                        Classical music and dance, folk, poetry,theatre, traditional paintings,
                        crafts & yoga primarily in schools and colleges. In 2011, SPIC MACAY was
                        awarded the Rajiv Gandhi Sadbhavana award in recognition of its
                        contribution to youth development.
                    </p>

            </div>
        </div>
    );
}

export default Home
