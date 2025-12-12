import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Bycey Excavations – Earthmoving, Excavations & Waterpipe Replacement Victoria",
  description:
    "Bycey Excavations provides professional earthmoving, excavation, and waterpipe replacement services across Victoria, Australia. Safe, reliable, and efficient solutions for residential, commercial, and municipal projects.",
};

export default function Home() {
  const services = [
    {
      title: "Earthmoving",
      description:
        "Expert earthmoving services including site preparation, land clearing, and excavation for construction and infrastructure projects across Victoria.",
      href: "/services/earthmoving",
      image: "/images/earthmoving.webp",
    },
    {
      title: "Excavations",
      description:
        "Professional excavation services for residential, commercial, and municipal projects. Safe, efficient, and precise trenching and site preparation.",
      href: "/services/excavations",
      image: "/images/excavation.jpg",
    },
    {
      title: "Waterpipe Replacement",
      description:
        "Reliable waterpipe replacement for homes, businesses, and municipal infrastructure across Victoria. Minimise disruptions with safe and long-lasting solutions.",
      href: "/services/waterpipes",
      image: "/images/waterpipes.jpg",
    },
  ];

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-100 pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl text-yellow-500 font-medium mb-4">
              Bycey Excavations - Professional Excavation Services in Victoria
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Providing expert earthmoving, excavation, and waterpipe replacement services
              for residential, commercial, and municipal projects across Victoria.
              Safe, reliable, and efficient solutions for all your construction needs.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded transition"
            >
              Request a Quote
            </Link>
          </div>
          <div className="flex-1">
            <Image
              src="/images/earthmoving.webp"
              alt="Construction site with excavators and machinery"
              width={800}
              height={500}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-700">
            From earthmoving and excavation to waterpipe replacement, we deliver professional
            excavation solutions across Victoria.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <Link
              key={i}
              href={service.href}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition flex flex-col"
            >
              <Image
                src={service.image}
                alt={`${service.title} service`}
                width={400}
                height={250}
                className="object-cover w-full h-48"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="text-xl text-yellow-500 mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <span className="text-yellow-500 hover:underline mt-auto">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About / Why Choose Us */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <Image
              src="/images/earthmoving.webp"
              alt="Professional construction work in Victoria"
              width={800}
              height={500}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl text-gray-800 mb-4">Why Choose Bycey Excavations?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Experienced team with expertise across Victoria</li>
              <li>Reliable, safe, and efficient project execution</li>
              <li>Residential, commercial, and municipal services</li>
              <li>Transparent quotes and high-quality workmanship</li>
              <li>Modern equipment and professional machinery handling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto bg-yellow-200 p-12 rounded-lg">
          <h2 className="text-3xl text-gray-800 mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-700 mb-6">
            Contact Bycey Excavations today for a free consultation and quote.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded transition"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
