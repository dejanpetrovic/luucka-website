
import React from 'react';
import { Section, Card, Badge, FadeIn, ParallaxBackground } from '../components/ui';
import { CheckCircle2, Landmark, Wrench, CircleDollarSign } from 'lucide-react';
import { SEO } from '../components/SEO';

const ValueInfographic = () => (
  <Section className="bg-slate-50 border-y border-slate-200">
     <div className="text-center mb-20">
        <Badge>Methodology</Badge>
        <h2 className="mt-4 text-3xl font-display font-bold text-navy-900">Our Approach</h2>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
          Most options in the market force you to choose between high-level advice and day-to-day execution. We provide both, backed by institutional rigor.
        </p>
     </div>
     
     <div className="relative max-w-6xl mx-auto">
       {/* Connecting dashed line for desktop */}
       <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-slate-300 -z-10"></div>
       
       <div className="grid md:grid-cols-3 gap-12">
         {/* Pillar 1 */}
         <div className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-slate-100 shadow-xl mb-8 group-hover:border-sky-500 group-hover:scale-110 transition-all duration-300">
                <Landmark size={40} className="text-navy-900" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">Institutional Rigor</h3>
            <div className="h-1 w-12 bg-sky-500 rounded mb-4"></div>
            <p className="text-slate-600 text-sm leading-relaxed">
                Methods derived from <strong>EBRD & IFC</strong> due diligence teams. We don't just report numbers; we stress-test business models against international banking standards to ensure fundability and resilience.
            </p>
         </div>

         {/* Pillar 2 */}
         <div className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-slate-100 shadow-xl mb-8 group-hover:border-sky-500 group-hover:scale-110 transition-all duration-300">
                <Wrench size={40} className="text-navy-900" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">Operational Execution</h3>
            <div className="h-1 w-12 bg-sky-500 rounded mb-4"></div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                We aren't "advisors" who leave you with a PowerPoint. We are <strong>operators</strong>. We clean up the GL, implement the ERP, and fix the cash flow model ourselves. 25 years of hands-on execution.
            </p>
            
            {/* Timeline Infographic */}
            <div className="w-full bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-sky-200">
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 mb-3 uppercase tracking-wider">
                    <span>Foundation</span>
                    <span>Growth</span>
                    <span>Expertise</span>
                </div>
                <div className="relative flex justify-between items-center mb-2">
                     {/* Static Line */}
                     <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-20"></div>
                     
                     {/* Gradient Flow Line to represent continuous execution */}
                     <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-100 via-sky-200 to-navy-900 -z-10 opacity-70"></div>
                     
                     {/* Points */}
                     <div className="flex flex-col items-center gap-2 group/point">
                        <div className="h-8 w-8 bg-slate-50 border-2 border-slate-200 rounded-full flex items-center justify-center text-slate-500 shadow-sm z-10 transition-all duration-300 group-hover/point:border-sky-300 group-hover/point:text-sky-600 group-hover/point:scale-110">
                            <span className="font-bold text-[10px]">1999</span>
                        </div>
                        <span className="text-[10px] font-medium text-slate-600">Audit/GL</span>
                     </div>
                     
                     <div className="flex flex-col items-center gap-2 group/point">
                        <div className="h-8 w-8 bg-sky-50 border-2 border-sky-100 rounded-full flex items-center justify-center text-sky-600 shadow-sm z-10 transition-all duration-300 group-hover/point:bg-sky-500 group-hover/point:border-sky-500 group-hover/point:text-white group-hover/point:scale-110">
                            <span className="font-bold text-[10px]">2010</span>
                        </div>
                        <span className="text-[10px] font-medium text-slate-600">CFO/ERP</span>
                     </div>
                     
                     {/* "Now" Point with Pulse Animation */}
                     <div className="flex flex-col items-center gap-2 relative group/point">
                        <div className="relative h-8 w-8 bg-navy-900 border-2 border-navy-700 rounded-full flex items-center justify-center text-white shadow-sm z-10 transition-transform duration-300 group-hover/point:scale-110">
                            <span className="font-bold text-[10px]">Now</span>
                            {/* Subtle pulse ring to show ongoing activity */}
                            <div className="absolute -inset-1 bg-navy-900/20 rounded-full animate-ping opacity-75"></div>
                        </div>
                        <span className="text-[10px] font-bold text-navy-700">Institutional</span>
                     </div>
                </div>
            </div>
         </div>

         {/* Pillar 3 */}
         <div className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-slate-100 shadow-xl mb-8 group-hover:border-sky-500 group-hover:scale-110 transition-all duration-300">
                <CircleDollarSign size={40} className="text-navy-900" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">Fixed Pricing</h3>
            <div className="h-1 w-12 bg-sky-500 rounded mb-4"></div>
            <p className="text-slate-600 text-sm leading-relaxed">
                Hourly billing rewards inefficiency. We operate on <strong>fixed monthly retainers or project fees</strong>. Our incentive is to solve your problem permanently and quickly, not to rack up hours.
            </p>
         </div>
       </div>
     </div>
  </Section>
);

const About = () => {
  return (
    <>
      <SEO 
        title="About LUUCKA - Institutional CFO Expertise" 
        description="Founded by a former EBRD Due Diligence Team Leader. We bring 25 years of institutional financial leadership to the middle market."
      />
      <section className="relative overflow-hidden bg-navy-900 pt-24 pb-32 md:pt-32 md:pb-40 text-center px-4">
        {/* Parallax Background Image - Matches Home Page Strategy */}
        <ParallaxBackground imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" />
        
        {/* Animated background gradient blobs for depth */}
        <div className="absolute top-0 -left-40 w-96 h-96 bg-sky-500/20 rounded-full mix-blend-screen filter blur-[128px] animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[128px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

        <FadeIn className="relative max-w-4xl mx-auto z-10">
          <Badge color="bg-sky-900 text-sky-200 mb-6">About LUUCKA</Badge>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tight">
            Institutional-Grade CFO Services<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-white">With a Personal Touch</span>
          </h1>
        </FadeIn>
      </section>

      <ValueInfographic />

      <Section>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-2">The Principal</h2>
            <div className="text-sm font-bold text-sky-600 mb-6">CIA | ACCA</div>
            
            <div className="prose prose-slate max-w-none text-slate-600">
              <p className="text-lg leading-relaxed mb-6">
                I bring a unique combination that's rare in middle-market finance: institutional pedigree with hands-on operational experience.
              </p>
              
              <h3 className="text-navy-900 font-bold text-xl mt-8 mb-4">Institutional Background</h3>
              <p>
                For years, I served as <strong>Finance Due Diligence Team Leader at the European Bank for Reconstruction and Development (EBRD)</strong>, evaluating $50M-$500M transactions. I reported directly to investment committees, making "invest" or "pass" recommendations on hundreds of millions in capital deployment.
              </p>
              <p className="mt-4">
                I also worked as <strong>Financial Advisor to the International Finance Corporation (IFC)</strong>, analyzing businesses in challenging markets and assessing financial sustainability.
              </p>

              <h3 className="text-navy-900 font-bold text-xl mt-8 mb-4">But I'm Not Just an Analyst</h3>
              <p>
                Unlike Big 4 consultants who analyze CFOs but have never been one, I've spent <strong>25 years as an actual CFO</strong>. I've implemented ERPs, managed M&A transactions, prepared companies for fundraising, and built finance teams from scratch.
              </p>
              
              <div className="bg-sky-50 p-6 rounded-lg mt-8">
                <h4 className="font-bold text-navy-900 mb-2">The Combination is Powerful</h4>
                <p className="text-sm">
                  <strong>Institutional Lens:</strong> Is this financially sound? Would an investor approve this?<br/>
                  <strong>Operational Lens:</strong> Can I actually run this? Will the model work in reality?
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <Card className="bg-slate-50 sticky top-24">
              <h4 className="font-bold text-navy-900 mb-4">Quick Facts</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> Former EBRD DD Team Leader</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> 25+ Years CFO Experience</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> CIA, ACCA Certified</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> 100+ Transactions Analyzed</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> Based in Hallandale Beach, FL</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
