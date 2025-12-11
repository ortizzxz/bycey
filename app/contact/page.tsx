"use client";

import { Mail, Phone, Building, ChevronRight, PersonStanding } from "lucide-react";

export default function ContactPage() {
    const contactMethods = [
        {
            icon: Mail,
            title: "Email",
            description: "Send us an email and we’ll reply as soon as possible.",
            contact: "bryceexcavations@gmail.com",
        },
        {
            icon: Phone,
            title: "Phone",
            description: "Call us directly for urgent enquiries.",
            contact: "0435 353 000",
        },
        // {
        //     icon: Building,
        //     title: "Visit Us",
        //     description: "Our office and workshop location.",
        //     contact: (
        //         <a
        //             href="https://maps.app.goo.gl/r1U1Ar6EUbtuq6MU8"
        //             target="_blank"
        //             className="inline-flex items-center gap-1 text-sm text-gray-800 hover:underline"
        //         >
        //             24 Edinburgh Rd, Melbourne Victoria
        //             <ChevronRight className="w-4 h-4" />
        //         </a>
        //     ),
        // },
        {
            icon: PersonStanding,
            title: "We're happy to serve you",
            description: "Our team will gladly attend your inquiries",
            // contact: (
            //     <a
            //         href="https://maps.app.goo.gl/r1U1Ar6EUbtuq6MU8"
            //         target="_blank"
            //         className="inline-flex items-center gap-1 text-sm text-gray-800 hover:underline"
            //     >
            //         24 Edinburgh Rd, Melbourne Victoria
            //         <ChevronRight className="w-4 h-4" />
            //     </a>
            // ),
        },
    ];

    return (
        <section className="bg-gray-50 min-h-screen py-16 px-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 mt-4">
                {/* Container holds everything */}
                <div className="flex-1 flex flex-col gap-8">
                    {/* Contact Form */}
                    <form className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-3 border border-gray-200">
                        <h2 className="text-xl text-yellow-500 mb-1">Contact Us</h2>
                        <p className="text-gray-700 text-sm mb-3">
                            Fill out the form below and we’ll get back to you as soon as possible.
                        </p>

                        <div className="flex flex-col gap-2 md:flex-row">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="flex-1 px-3 py-1.5 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="flex-1 px-3 py-1.5 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                            />
                        </div>

                        <div className="flex flex-col gap-2 md:flex-row">
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="flex-1 px-3 py-1.5 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-1 px-3 py-1.5 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                            />
                        </div>

                        <textarea
                            placeholder="Message"
                            rows={4}
                            className="w-full px-3 py-1.5 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                        />
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-2.5 rounded transition text-sm">
                            Send Message
                        </button>
                    </form>


                    {/* Contact Methods */}
                    <div className="grid gap-6 md:grid-cols-3">
                        {contactMethods.map((method, index) => {
                            const Icon = method.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 bg-white p-6 rounded-xl shadow-lg  border border-gray-200"
                                >
                                    <Icon className="w-6 h-6 text-yellow-500 mt-1" />
                                    <div className="flex flex-col gap-1">
                                        <span className="text-gray-800">{method.title}</span>
                                        <span className="text-gray-600 text-sm">{method.description}</span>
                                        <span className="text-gray-700 text-sm">{method.contact}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
