
import React from 'react';
import { Section, Button, Card, FadeIn, ParallaxBackground } from '../components/ui';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { SEO } from '../components/SEO';

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact Us - Schedule a Consultation" 
        description="Get in touch with LUUCKA. Schedule a confidential consultation regarding Fractional CFO, Automation, or Due Diligence services."
      />
      <section className="relative overflow-hidden bg-navy-900 pt-20 pb-24 text-center px-4">
        <ParallaxBackground imageUrl="https://images.unsplash.com/photo-1423666639041-f142fcb932ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" />
        <FadeIn className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-lg text-slate-300">
            Schedule a consultation to discuss your financial challenges. Let's explore how LUUCKA can help.
          </p>
        </FadeIn>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="h-12 w-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 shrink-0">
                  <Mail />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">Email</h3>
                  <a href="mailto:info@luucka.com" className="text-sky-600 hover:underline">info@luucka.com</a>
                  <p className="text-sm text-slate-500 mt-1">Preferred for initial contact</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 shrink-0">
                  <Phone />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">Phone</h3>
                  <a href="tel:7862284288" className="text-sky-600 hover:underline">(786) 228-4288</a>
                  <p className="text-sm text-slate-500 mt-1">Mon-Fri: 9 AM - 5 PM EST</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">Location</h3>
                  <p className="text-slate-600">
                    221 W Hallandale Beach Blvd #513<br />
                    Hallandale Beach, FL 33009
                  </p>
                  <p className="text-sm text-slate-500 mt-1">Serving clients across North America</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-xl">
              <h3 className="font-bold text-navy-900 mb-4">What to Expect</h3>
              <p className="text-slate-600 text-sm mb-4">
                When you reach out, you'll hear back directly from me—not a sales team.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• <strong>Service Inquiries:</strong> I'll schedule a 15 min discovery call.</li>
                <li>• <strong>Due Diligence:</strong> I'll ask about deal timeline and scope.</li>
                <li>• <strong>No Pressure:</strong> Just honest conversation about fit.</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div>
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
                  <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none" required />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                    <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                    <input type="tel" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Service Interest</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none">
                    <option>Fractional CFO Services</option>
                    <option>CFO + Automation</option>
                    <option>ERP Implementation</option>
                    <option>Financial Due Diligence</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message *</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none" required></textarea>
                </div>

                <Button className="w-full">Send Message</Button>
                <p className="text-xs text-slate-500 text-center">All inquiries are confidential.</p>
              </form>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
