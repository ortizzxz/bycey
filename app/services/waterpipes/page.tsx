import Image from "next/image";

export const metadata = {
  title: "Waterpipe Replacement Services Victoria – Bycey Excavations",
  description:
    "Expert waterpipe replacement services in Victoria, Australia. Residential, commercial and municipal water main replacement, trenching, and pipe installation with safety and precision.",
};

export default function WaterpipeReplacementService() {
  return (
    <section className="bg-gray-50 pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* — Hero Section — */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl text-yellow-500 mb-4">
              Waterpipe Replacement Services in Victoria
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Bycey Excavations provides reliable waterpipe replacement services
              across Victoria. From residential homes to commercial and municipal
              infrastructure, we ensure efficient, safe, and long-lasting water main
              replacements with minimal disruption.
            </p>
          </div>

          <div className="flex-1">
            <Image
              src="/images/waterpipes.jpg"
              alt="Worker replacing water pipes at a construction site in Victoria"
              width={800}
              height={500}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* — Why Professional Waterpipe Replacement Matters — */}
        <div className="space-y-4">
          <h2 className="text-2xl text-gray-800 mb-2">
            Why Professional Waterpipe Replacement is Important
          </h2>
          <p className="text-gray-700">
            Old or damaged water pipes can lead to leaks, reduced water pressure, and
            costly damage. Professional water main replacement ensures a safe, durable
            and compliant solution for homes, businesses, and municipal infrastructure
            in Victoria.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>High-quality pipe installation and replacement</li>
            <li>Trenching and site preparation done with precision</li>
            <li>Compliance with local council and safety regulations</li>
            <li>Minimizing disruption to residents and businesses</li>
          </ul>
        </div>

        {/* — Our Waterpipe Replacement Services — */}
        <div className="space-y-6">
          <h2 className="text-2xl text-gray-800 mb-2">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl text-yellow-500 mb-2">Residential Waterpipe Replacement</h3>
              <p className="text-gray-700">
                We replace aging residential water pipes to prevent leaks and water damage,
                ensuring reliable supply and peace of mind.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl text-yellow-500 mb-2">Commercial & Industrial Piping</h3>
              <p className="text-gray-700">
                Our team handles water main replacement for commercial properties, factories,
                and industrial sites with minimal disruption to operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl text-yellow-500 mb-2">Municipal & Council Projects</h3>
              <p className="text-gray-700">
                Bycey Excavations partners with local councils to upgrade and replace water
                infrastructure safely, on time, and according to all regulations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl text-yellow-500 mb-2">Emergency Pipe Replacement</h3>
              <p className="text-gray-700">
                Rapid response for burst pipes or urgent water main replacements to minimize
                downtime and damage.
              </p>
            </div>
          </div>
        </div>

        {/* — Our Process — */}
        <div className="space-y-4">
          <h2 className="text-2xl text-gray-800 mb-2">Our Process</h2>
          <p className="text-gray-700">
            Bycey Excavations follows a structured process for waterpipe replacement in Victoria:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Assessment of current water infrastructure and site conditions</li>
            <li>Planning and marking trench paths to minimize disruption</li>
            <li>Excavation, pipe removal, and installation using high-quality materials</li>
            <li>Backfilling, testing, and site restoration for long-term reliability</li>
          </ul>
        </div>

        {/* — Local Expertise in Victoria — */}
        <div className="space-y-4">
          <h2 className="text-2xl text-gray-800 mb-2">
            Local Expertise Across Victoria
          </h2>
          <p className="text-gray-700">
            We have extensive knowledge of Victorian water systems, soil types, and
            council regulations. Our team works closely with engineers and local
            authorities to ensure efficient water main replacements across Melbourne,
            Geelong, Ballarat, Bendigo, and surrounding areas.
          </p>
        </div>

        {/* — Call to Action — */}
        <div className="bg-yellow-200 p-8 rounded-lg text-center">
          <h2 className="text-2xl text-gray-800 mb-3">Need Waterpipe Replacement?</h2>
          <p className="text-gray-700 mb-4">
            Contact Bycey Excavations for a reliable, safe, and professional waterpipe
            replacement service in Victoria, Australia.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded transition"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
