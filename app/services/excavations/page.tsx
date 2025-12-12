import Image from "next/image";

export const metadata = {
  title: "Excavation Services Victoria – Bycey Excavations",
  description:
    "Professional excavation services in Victoria Australia. Site cut, trenching, foundation excavation and bulk earth removal delivered with precision, safety and reliability.",
};

export default function ExcavationsService() {
  return (
    <section className="bg-gray-50 pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* — Hero Section — */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl  text-yellow-500 mb-4">
              Excavation Services in Victoria
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Bycey Excavations offers expert excavation services throughout Victoria,
              Australia. From residential foundations to commercial and civil
              earthworks, we deliver reliable and precise excavation solutions using
              modern equipment and experienced operators.
            </p>
          </div>

          <div className="flex-1">
            <Image
              src="/images/excavation.jpg"
              alt="Excavator digging foundation at construction site in Victoria"
              width={800}
              height={500}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* — Why Excavation Matters — */}
        <div className="space-y-4">
          <h2 className="text-2xl text-gray-800">
            The Importance of Professional Excavation
          </h2>
          <p className="text-gray-700">
            Excavation is critical to site preparation and is one of the earliest
            stages of any construction project. Whether you’re building a home, road,
            retaining wall or installing utilities, accurate excavation ensures the
            site is properly prepared, safe and compliant with engineering
            requirements in Victoria.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Precise trenching for footings, drainage and utilities</li>
            <li>Foundation excavation for residential and commercial builds</li>
            <li>Bulk earth removal and management of cut and fill</li>
            <li>Improved safety and site accessibility for contractors</li>
          </ul>
        </div>

        {/* — Our Excavation Services — */}
        <div className="space-y-6">
          <h2 className="text-2xl text-gray-800">
            Comprehensive Excavation Solutions
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
              <h3 className="text-xl text-yellow-500 mb-2">
                Site Cut & Bulk Excavation
              </h3>
              <p className="text-gray-700">
                We manage large‑scale cut and bulk excavation for land development,
                earthworks and site reshaping. Our team maintains precise grades and
                slopes for civil and commercial site requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
              <h3 className="text-xl text-yellow-500 mb-2">
                Foundation Trenching
              </h3>
              <p className="text-gray-700">
                Accurate trenching for footing systems, retaining walls, pools and
                structural elements. We ensure compliance with engineering plans and
                local building codes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
              <h3 className="text-xl text-yellow-500 mb-2">
                Utility & Service Excavation
              </h3>
              <p className="text-gray-700">
                Excavation for water, sewer, electrical and communications trenches
                with careful planning to protect existing infrastructure and ensure
                seamless installation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
              <h3 className="text-xl text-yellow-500 mb-2">
                Basement & Retaining Works
              </h3>
              <p className="text-gray-700">
                Excavation for basements, sub‑structures and retaining walls — executed
                with attention to depth control, soil stability and safety.
              </p>
            </div>
          </div>
        </div>

        {/* — Our Process — */}
        <div className="space-y-6">
          <h2 className="text-2xl text-gray-800">
            Our Excavation Process
          </h2>
          <p className="text-gray-700">
            Successful excavation requires planning, site understanding and
            experienced operators. We tailor our approach to each project in
            Victoria based on soil conditions and design requirements:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Site assessment and soil profile review</li>
            <li>Setting out and marking excavation limits</li>
            <li>Excavation with precision machinery and experienced crews</li>
            <li>Quality checks and compliance with safety standards</li>
          </ul>
        </div>

        {/* — Local Expertise in Victoria — */}
        <div className="space-y-4">
          <h2 className="text-2xl text-gray-800">
            Excavation Experts Serving Victoria
          </h2>
          <p className="text-gray-700">
            Bycey Excavations has deep local knowledge of Victorian soil conditions,
            council requirements and construction standards. We coordinate with
            engineers, surveyors and builders to deliver projects of all scales —
            from suburban residential jobs to regional commercial earthworks.
          </p>
          <p className="text-gray-700">
            Our commitment to safety, timeliness and quality makes us a trusted
            choice for excavation contractors across Victoria, including Geelong,
            Ballarat, Bendigo and the greater Melbourne metropolitan area.
          </p>
        </div>

        {/* — Call to Action — */}
        <div className="bg-yellow-200 p-8 rounded-lg text-center">
          <h2 className="text-2xl text-gray-800 mb-3">
            Ready to Start Your Excavation Project?
          </h2>
          <p className="text-gray-700 mb-4">
            Contact Bycey Excavations today for a detailed quote and planning
            consultation for your excavation needs in Victoria, Australia.
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
