import Image from "next/image";

export const metadata = {
  title: "Earthmoving Services – Bycey Excavations",
  description:
    "Professional earthmoving services for site preparation, excavation, grading, and bulk earthworks. Built with safety, precision and reliability at every stage.",
};

export default function EarthmovingService() {
  return (
    <section className="bg-gray-50 pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        {/* — Hero Section — */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl text-yellow-500 mb-4">
              Earthmoving Services Victoria
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Bycey Excavations, our earthmoving service is designed to deliver
              high-quality site preparation, excavation, soil grading and bulk
              earthworks for residential, commercial and civil construction
              projects. Whether you're building a new home, roadway, or preparing
              land for development, our team has the experience and equipment to
              deliver on time and on budget.
            </p>
          </div>

          <div className="flex-1">
            <Image
              src="/images/earthmoving.webp"
              alt="Earthmoving heavy machinery at a construction site"
              width={800}
              height={500}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* — Why Earthmoving Matters — */}
        <div className="space-y-4">
          <h2 className="text-2xl text-gray-800">
            Why Professional Earthmoving Matters
          </h2>
          <p className="text-gray-700">
            Earthmoving is the backbone of every successful construction project.
            From clearing vegetation and preparing site pads to cutting and filling
            terrain for structural foundations, earthmoving ensures your project
            begins on a strong and stable base. Professional earthmoving protects
            your investment by:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Creating level surfaces for foundations and roadways with precision grading and cut-and-fill earthworks.
            </li>
            <li>
              Excavating and removing soil, rock, and debris safely and efficiently.
            </li>
            <li>
              Preparing for utilities, drainage systems, and infrastructure installations.
            </li>
            <li>
              Improving site safety and drainage to prevent future structural issues.
            </li>
          </ul>
        </div>

        {/* — Our Services — */}
        <div className="space-y-6">
          <h2 className="text-2xl text-gray-800">
            Comprehensive Earthmoving Services
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
              <h3 className="text-xl text-yellow-500 mb-2">
                Site Clearing & Preparation
              </h3>
              <p className="text-gray-700">
                We remove vegetation, debris and unwanted materials ahead of
                excavation. Site preparation is essential to ensure safe,
                compliant, and buildable land for construction or landscaping.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
              <h3 className="text-xl text-yellow-500 mb-2">
                Precision Excavation
              </h3>
              <p className="text-gray-700">
                Our crew handles deep excavation for foundations, basements,
                trenches and utility lines with meticulous attention to depth,
                grade, and safety protocols.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
              <h3 className="text-xl text-yellow-500 mb-2">
                Grading & Levelling
              </h3>
              <p className="text-gray-700">
                We shape land surfaces for optimal drainage and level pads for
                structures and pavement works. Consistent grading protects
                against erosion and water pooling.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
              <h3 className="text-xl text-yellow-500 mb-2">
                Bulk Earthworks & Cut-and-Fill
              </h3>
              <p className="text-gray-700">
                From reshaping large areas of terrain to balancing cut-and-fill
                volumes, our team ensures stable ground that meets engineering
                specifications and project requirements.
              </p>
            </div>
          </div>
        </div>

        {/* — How We Work — */}
        <div className="space-y-6">
          <h2 className="text-2xl text-gray-800">
            Our Approach to Earthmoving
          </h2>
          <p className="text-gray-700">
            At Bycey Excavations, we combine decades of industry experience with a
            safety-first work culture and modern heavy machinery to deliver
            efficient, reliable earthmoving. Every project we undertake is
            planned carefully, executed with precision and reviewed for
            compliance with local standards and engineering requirements.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Detailed site assessment and consultation.</li>
            <li>
              Skilled operators using well-maintained excavators, dozers and
              graders.
            </li>
            <li>Strict adherence to safety and environmental regulations.</li>
            <li>Clear communication and project updates throughout the job.</li>
          </ul>
        </div>

        {/* — Call to Action — */}
        <div className="bg-yellow-200 p-8 rounded-lg text-center">
          <h2 className="text-2xl text-gray-800 mb-3">
            Ready to Prepare Your Site?
          </h2>
          <p className="text-gray-700 mb-4">
            Contact Bycey Excavations today for a free quote on earthmoving
            services — site clearing, excavation, grading and bulk earthworks.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
