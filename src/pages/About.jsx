import React from 'react'

const About = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative rounded-3xl overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80"
                    alt="Contact"
                    className="w-full h-[600px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black">
                    <h1 className="text-6xl font-serif mb-4">CONTACT</h1>
                </div>
            </div>

            <div className="space-y-8">
                <div className="bg-zinc-900 rounded-3xl p-8">
                    <h2 className="text-2xl mb-6">OPENING HOURS</h2>
                    <div className="space-y-4">
                        {[
                            ['Monday', '16:00 - 22:30'],
                            ['Tuesday', '16:00 - 22:30'],
                            ['Wednesday', '16:00 - 22:30'],
                            ['Thursday', '16:00 - 22:30'],
                            ['Friday', '16:00 - 22:30'],
                            ['Saturday & Sunday', '16:00 - 22:30'],
                        ].map(([day, hours]) => (
                            <div key={day} className="flex justify-between">
                                <span className="text-gray-400">{day}</span>
                                <span>{hours}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-3xl p-8">
                    <h2 className="text-2xl mb-6">GET IN TOUCH</h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">

                            <span>23 Greenfield Avenue, Prague 120 00</span>
                        </div>
                        <div className="flex items-center gap-4">

                            <span>+49 1234 567890</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span>email@example.com</span>
                        </div>
                    </div>
                </div>

                <div className="rounded-3xl overflow-hidden h-[300px] bg-zinc-900">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.7028566375777!2d14.4194773!3d50.0755381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e8cf28b9b3%3A0x7e778da388d74453!2sPrague%2C%20Czechia!5e0!3m2!1sen!2sus!4v1647095757123!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    )

}

export default About