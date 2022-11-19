import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const About = () => {
    return (
        <div>
            <Navbar />
            <section class="text-gray-600 body-font">

                <div class="container px-5 py-24 mx-auto flex flex-col">
                    <h3 class="font-semibold leading-tight text-3xl mt-0 mb-2 my-5 text-grey-600 mx-auto">About Us</h3>
                    <div class="lg:w-4/6 mx-auto">
                        <div class="rounded-lg overflow-hidden">
                            <img alt="content" class="object-cover object-center h-full w-full" src="https://www.w3schools.com/css/img_lights.jpg" />
                        </div>
                        <div class="flex flex-col sm:flex-row mt-10">
                            <p class="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>


                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default About
