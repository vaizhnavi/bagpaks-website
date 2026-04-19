import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Building } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Get in touch with our team to discuss your industrial packaging requirements
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Phone className="h-12 w-12 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Phone Numbers</h3>
              <div className="space-y-2">
                <a
                  href="tel:+96892208039"
                  className="block text-gray-700 hover:text-blue-900 transition-colors"
                >
                  +968 9220 8039
                </a>
                <a
                  href="tel:+96892240805"
                  className="block text-gray-700 hover:text-blue-900 transition-colors"
                >
                  +968 9224 0805
                </a>
                <a
                  href="tel:+96891187614"
                  className="block text-gray-700 hover:text-blue-900 transition-colors"
                >
                  +968 9118 7614
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Mail className="h-12 w-12 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Address</h3>
              <a
                href="mailto:info@bagpak.com"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                info@bagpak.com
              </a>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Clock className="h-12 w-12 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
              <div className="text-gray-700">
                <p>Sunday - Thursday</p>
                <p className="font-bold">8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="+968 XXXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="fibc">FIBC Bags Inquiry</option>
                    <option value="baffle">Baffle Bags Inquiry</option>
                    <option value="woven">Woven PP Bags Inquiry</option>
                    <option value="quote">Request a Quote</option>
                    <option value="technical">Technical Support</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                {submitted && (
                  <div className="bg-green-50 border-2 border-green-500 text-green-800 px-6 py-4 rounded-md">
                    <p className="font-bold">Thank you for your message!</p>
                    <p className="text-sm">We will get back to you as soon as possible.</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition-colors"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Location</h2>
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <div className="flex items-start mb-6">
                  <MapPin className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Bagpak Oman</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Plot No. 25, Squara 4<br />
                      P.O. Box: 170, PC: 311<br />
                      Fala Al-Ouhi Industrial Area<br />
                      Sohar, Sultanate of Oman
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <Building className="h-6 w-6 text-blue-900 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Facility Information</h3>
                    <p className="text-gray-700 leading-relaxed">
                      State-of-the-art manufacturing facility equipped with advanced machinery for FIBC, Baffle, and Woven PP bag production.
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.1749847888!2d56.73820287550443!3d24.371599278248596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8e5d5d5d5d5d5d%3A0x5d5d5d5d5d5d5d5d!2sBagpak%20Oman!5e0!3m2!1sen!2som!4v1634567890123!5m2!1sen!2som"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bagpak Oman Location"
                />
              </div>

              <div className="mt-8 bg-blue-50 border-2 border-blue-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Need Immediate Assistance?</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  For urgent inquiries or immediate support, please call us directly. Our team is ready to assist you with your packaging needs.
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+96892208039"
                    className="flex items-center text-blue-900 font-bold hover:text-blue-700 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    +968 9220 8039
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
