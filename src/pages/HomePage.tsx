import React from 'react';
import { ArrowRight, Award, Users, Factory, Globe } from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

export default function HomePage({ setCurrentPage }: HomePageProps) {
  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/afb83ac7-1b65-412b-88bc-571c7fcbea9e_watermarked.gif"
            alt="Bagpak Industrial Packaging"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Industrial Packaging
              <span className="block text-red-500">We make things move</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Leading manufacturer of FIBC bags, Ad Star bags and Woven PP bags in Oman. Trusted by industries worldwide for reliable, high-quality packaging solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleNavigation('products')}
                className="flex items-center justify-center px-8 py-4 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition-colors"
              >
                View Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => handleNavigation('contact')}
                className="flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-bold rounded-md hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Factory className="h-12 w-12 text-blue-900" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">20+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Award className="h-12 w-12 text-blue-900" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">ISO</div>
              <div className="text-sm text-gray-600">Certified Quality</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="h-12 w-12 text-blue-900" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-sm text-gray-600">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Globe className="h-12 w-12 text-blue-900" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">25+</div>
              <div className="text-sm text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Bagpak Oman</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Quality assurance and customer centric approach lead us in the industry and enables us the energy to manufacture highly promising, innovative and quality products at effective cost.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  <span>Advanced equipments and stringent quality measurement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  <span>Commitment to hygiene and cleanliness ensures food grade FIBCs that are sanitized and free from dust, germs and pollutants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  <span>Integrate suitable techniques for quality improvement</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                <iframe
                  src="https://www.youtube.com/embed/evI428fFjSQ?autoplay=1"
                  title="Bagpak Manufacturing Process"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Lines</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive industrial packaging solutions designed for strength, reliability, and efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-80 bg-white flex items-center justify-center p-6">
                <img
                  src="/Gemini_Generated_Image_jxk5ahjxk5ahjxk5.png"
                  alt="FIBC Bag - Bagpak"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">FIBC Bags</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Flexible Intermediate Bulk Containers designed for efficient storage and transport of bulk materials up to 2000 kg.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-bold text-gray-700 mb-2">Available Types:</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                   
                    <li className="flex items-start">
                      <span className="text-blue-900 mr-2">•</span>
                      Standard / UN Bags - Versatile with UN certification
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Ventilated Bags - Breathable for fresh produce
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => handleNavigation('fibc')}
                  className="w-full flex items-center justify-center px-6 py-3 bg-blue-900 text-white font-bold rounded-md hover:bg-blue-800 transition-colors"
                >
                  Explore FIBC Range
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-80 bg-white flex items-center justify-center p-6">
                <img
                  src="/Gemini_Generated_Image_vv38qevv38qevv38.png"
                  alt="Ad Star Bag - Bagpak"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Ad Star Bags</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Premium multi-layered woven PP bags with patented hot air welded seams for leak-proof, dust-free performance.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Block-bottom design
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Valve or open mouth options
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Superior strength & durability
                  </li>
                </ul>
                <button
                  onClick={() => handleNavigation('adstar')}
                  className="w-full flex items-center justify-center px-6 py-3 bg-blue-900 text-white font-bold rounded-md hover:bg-blue-800 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-80 bg-white flex items-center justify-center p-6">
                <img
                  src="/Gemini_Generated_Image_nh26onnh26onnh26.png"
                  alt="Woven PP Bag - Bagpak"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Woven PP Bags</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Durable polypropylene bags perfect for packaging grains, fertilizers, and construction materials.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    UV-resistant options
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Custom printing available
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Various sizes and weights
                  </li>
                </ul>
                <button
                  onClick={() => handleNavigation('woven')}
                  className="w-full flex items-center justify-center px-6 py-3 bg-blue-900 text-white font-bold rounded-md hover:bg-blue-800 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-300">
              Partnering with top companies across the Middle East
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left">
              <div className="flex space-x-12 px-6">
                <div className="flex-shrink-0 bg-white px-12 py-8 rounded-lg shadow-xl">
                  <div className="text-3xl font-bold text-gray-900 whitespace-nowrap">Aswar Al Khadra</div>
                </div>
                <div className="flex-shrink-0 bg-white px-12 py-8 rounded-lg shadow-xl">
                  <div className="text-3xl font-bold text-gray-900 whitespace-nowrap">Jindal Steel</div>
                </div>
                <div className="flex-shrink-0 bg-white px-12 py-8 rounded-lg shadow-xl">
                  <div className="text-3xl font-bold text-gray-900 whitespace-nowrap">Oman Sugar</div>
                </div>
                <div className="flex-shrink-0 bg-white px-12 py-8 rounded-lg shadow-xl">
                  <div className="text-3xl font-bold text-gray-900 whitespace-nowrap">Aswar Al Khadra</div>
                </div>
                <div className="flex-shrink-0 bg-white px-12 py-8 rounded-lg shadow-xl">
                  <div className="text-3xl font-bold text-gray-900 whitespace-nowrap">Jindal Steel</div>
                </div>
                <div className="flex-shrink-0 bg-white px-12 py-8 rounded-lg shadow-xl">
                  <div className="text-3xl font-bold text-gray-900 whitespace-nowrap">Oman Sugar</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right">
              <div className="flex space-x-12 px-6">
                <div className="flex-shrink-0 bg-white px-12 py-8 rounded-lg shadow-xl">
                  <div className="text-3xl font-bold text-gray-900 whitespace-nowrap">Northern Minerals</div>
                </div>
                <div className="flex-shrink-0 bg-white px-12 py-8 rounded-lg shadow-xl">
                  <div className="text-3xl font-bold text-gray-900 whitespace-nowrap">Sohar Steel</div>
                </div>
                <div className="flex-shrink-0 bg-white px-12 py-8 rounded-lg shadow-xl">
                  <div className="text-3xl font-bold text-gray-900 whitespace-nowrap">Aswar Al Khadra</div>
                </div>
                <div className="flex-shrink-0 bg-white px-12 py-8 rounded-lg shadow-xl">
                  <div className="text-3xl font-bold text-gray-900 whitespace-nowrap">Northern Minerals</div>
                </div>
                <div className="flex-shrink-0 bg-white px-12 py-8 rounded-lg shadow-xl">
                  <div className="text-3xl font-bold text-gray-900 whitespace-nowrap">Sohar Steel</div>
                </div>
                <div className="flex-shrink-0 bg-white px-12 py-8 rounded-lg shadow-xl">
                  <div className="text-3xl font-bold text-gray-900 whitespace-nowrap">Aswar Al Khadra</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Bagpak Oman?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                    <p className="text-gray-300">
                      ISO-certified manufacturing processes ensuring consistent quality and reliability in every product.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Technical Expertise</h3>
                    <p className="text-gray-300">
                      Decades of experience in industrial packaging with specialized knowledge across multiple industries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
                    <p className="text-gray-300">
                      Tailored packaging solutions designed to meet your specific operational and safety requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Contact our team today to discuss your industrial packaging needs. We provide expert consultation and customized solutions.
              </p>
              <button
                onClick={() => handleNavigation('contact')}
                className="w-full px-8 py-4 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition-colors"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
