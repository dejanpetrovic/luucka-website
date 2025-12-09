import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Settings, Database, ShieldCheck, CheckCircle2, TrendingUp, Users, PieChart, Activity, Zap, Layers, Search, AlertCircle, Landmark, Briefcase, UserCheck, CircleDollarSign } from 'lucide-react';
import { Button, Card, Section, Badge, FadeIn, ParallaxBackground } from '../components/ui';

const Hero = () => (
  <section className="relative overflow-hidden bg-navy-900 pt-20 pb-32 lg:pt-32 lg:pb-40">
    <ParallaxBackground imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" />
    
    {/* Animated background gradient blobs */}
    <div className="absolute top-0 -left-40 w-96 h-96 bg-sky-500/20 rounded-full mix-blend-screen filter blur-[128px] animate-pulse pointer-events-none"></div>
    <div className="absolute bottom-0 -right-40 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[128px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <FadeIn>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sky-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-pulse"></span>
          Accepting New Clients for Q2 2026
        </div>

        <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6 tracking-tight">
          Institutional-Grade CFO Services<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-white">For Middle-Market Companies</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
          Former EBRD & IFC Due Diligence Team Leader bringing 25 years of CFO experience to growing companies that need strategic financial leadership without the $200,000+ full-time commitment.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button variant="secondary" href="https://calendly.com/dp-luucka/confidential-consultation" className="px-8 py-4 text-base">Schedule Confidential Consultation</Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-400 text-sm font-medium border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-center space-y-1">
            <div className="flex items-center space-x-2">
                <Badge color="bg-sky-500/20 text-sky-300 border border-sky-500/30">EBRD</Badge>
                <span className="text-white">Finance DD Team Leader</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1">
             <div className="flex items-center space-x-2">
                <Badge color="bg-sky-500/20 text-sky-300 border border-sky-500/30">IFC</Badge>
                <span className="text-white">Financial Advisor</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-white">
            <span className="font-bold text-lg">25+ Years</span>
            <span className="text-slate-400 text-xs uppercase tracking-wider">CFO Experience</span>
          </div>
          <div className="flex flex-col items-center justify-center text-white">
            <span className="font-bold text-lg">$50B+</span>
            <span className="text-slate-400 text-xs uppercase tracking-wider">Assets Evaluated</span>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

const ProblemSection = () => (
  <Section className="bg-white">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <Badge>The Challenge</Badge>
        <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">
          The Middle-Market CFO Gap
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          Most middle-market companies ($5M-$50M revenue) face an impossible choice when it comes to financial leadership:
        </p>
        
        <div className="space-y-6">
          {[
            {
              id: 1,
              title: "Don't hire a CFO",
              desc: "Investors immediately see financial infrastructure gaps. Deals fall apart. Growth stalls because you're flying blind.",
            },
            {
              id: 2,
              title: "Hire a full-time CFO",
              desc: "Budget $200K-$350K all-in. High quality talent is out of price range, and cheap talent makes expensive mistakes.",
            },
            {
              id: 3,
              title: "Big 4 Consulting",
              desc: "You get junior associates at $500/hr delivering PowerPoint slides without any operational reality or execution.",
            }
          ].map((item) => (
            <div key={item.id} className="group relative p-6 rounded-2xl bg-white border border-red-50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-default">
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative flex gap-5 items-start">
                <div className="shrink-0">
                  <div className="h-12 w-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-bold text-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white shadow-sm">
                    {item.id}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-red-700 transition-colors mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative">
         {/* Decorative elements behind the card */}
         <div className="absolute top-10 -right-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
         <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="bg-navy-900 p-8 md:p-10 rounded-2xl text-white relative overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            {/* Background design */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-600/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-3 bg-sky-500 rounded-xl shadow-lg shadow-sky-500/20">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold">There's a better option.</h3>
            </div>
            
            <p className="text-slate-300 mb-8 relative z-10 text-lg leading-relaxed">
            Get institutional-quality CFO services from someone who's actually done the job—at a fraction of full-time cost.
            </p>
            
            <div className="space-y-4 relative z-10">
                {[
                    "We close your month-end in < 5 days",
                    "We answer investor questions with confidence",
                    "We manage cash flow with 13-week forecasts",
                    "We implement ERPs correctly the first time",
                    "We give you financial visibility 12 months out"
                ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-white/5 hover:bg-slate-800 transition-all duration-300 group">
                        <Activity className="h-5 w-5 text-sky-400 shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">{benefit}</span>
                    </div>
                ))}
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/10 flex justify-between items-center relative z-10">
                <div className="text-sm text-slate-400 font-medium">Fixed Monthly Retainer</div>
                <div className="text-xl font-bold text-sky-300">No Surprises</div>
            </div>
        </div>
      </div>
    </div>
  </Section>
);

const ServicesOverview = () => (
  <Section className="bg-slate-50">
    <div className="text-center mb-16">
      <Badge>What We Do</Badge>
      <h2 className="mt-4 text-3xl font-display font-bold text-navy-900">How We Help Middle-Market Companies</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
      <Card className="group relative h-full bg-white border border-slate-100 hover:border-sky-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
             <PieChart size={120} className="text-sky-600 transform rotate-12" />
        </div>
        <div className="h-14 w-14 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
          <PieChart size={28} className="transition-transform duration-500 group-hover:rotate-180" />
        </div>
        <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-sky-700 transition-colors">Fractional CFO Services</h3>
        <p className="text-slate-600 mb-8 text-sm leading-relaxed">
          Part-time CFO expertise for companies $5-50M revenue. Strategic financial leadership, board presentations, and cash flow management without full-time cost.
        </p>
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
          <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-3 py-1 rounded-full">Starting at $6,000/mo</span>
          <Link to="/services/fractional-cfo" className="text-sky-600 text-sm font-bold flex items-center group-hover:text-sky-700 transition-colors">
            Learn More <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Card>

      <Card className="group relative h-full bg-white border border-slate-100 hover:border-sky-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
         <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
             <Zap size={120} className="text-sky-600 transform -rotate-12" />
        </div>
        <div className="h-14 w-14 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
          <Zap size={28} className="transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
        </div>
        <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-sky-700 transition-colors">CFO + Automation</h3>
        <p className="text-slate-600 mb-8 text-sm leading-relaxed">
          Unique combination: CFO strategy AND automation implementation. Build systems that reduce month-end close from 10 days to 3 days. Eliminate manual data entry.
        </p>
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
          <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-3 py-1 rounded-full">Starting at $15,000/mo</span>
          <Link to="/services/cfo-automation" className="text-sky-600 text-sm font-bold flex items-center group-hover:text-sky-700 transition-colors">
            Learn More <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Card>

      <Card className="group relative h-full bg-white border border-slate-100 hover:border-sky-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
             <Layers size={120} className="text-sky-600 transform rotate-6" />
        </div>
        <div className="h-14 w-14 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
          <Layers size={28} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
        </div>
        <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-sky-700 transition-colors">ERP Implementation</h3>
        <p className="text-slate-600 mb-8 text-sm leading-relaxed">
          25 years implementing SAP, Dynamics, and NetSuite. Big 4 methodology at 1/3 the cost. Includes automation layer that standard implementations miss.
        </p>
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
          <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-3 py-1 rounded-full">$15K-$250K projects</span>
          <Link to="/services/erp-implementation" className="text-sky-600 text-sm font-bold flex items-center group-hover:text-sky-700 transition-colors">
            Learn More <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Card>

      <Card className="group relative h-full bg-white border border-slate-100 hover:border-sky-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
             <Search size={120} className="text-sky-600 transform -rotate-6" />
        </div>
        <div className="h-14 w-14 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
          <Search size={28} className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />
        </div>
        <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-sky-700 transition-colors">Financial Due Diligence</h3>
        <p className="text-slate-600 mb-8 text-sm leading-relaxed">
          Institutional-grade financial DD for middle-market M&A. Fast turnaround (2-3 weeks), forensic rigor, CFO operational insight. Perfect for PE and family offices.
        </p>
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
          <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-3 py-1 rounded-full">$15K-$75K engagements</span>
          <Link to="/services/financial-due-diligence" className="text-sky-600 text-sm font-bold flex items-center group-hover:text-sky-700 transition-colors">
            Learn More <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Card>
    </div>
  </Section>
);

const WhyLuucka = () => (
  <Section className="bg-white border-t border-slate-100">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Badge>Trust Factors</Badge>
        <h2 className="text-3xl font-display font-bold text-navy-900 mb-6 mt-4">Why Institutional Investors Trust LUUCKA</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "EBRD & IFC Pedigree", 
              desc: "Actually led finance due diligence teams at the European Bank for Reconstruction and Development (EBRD). Institutional standards applied to middle-market companies.",
              icon: Landmark
            },
            { 
              title: "25 Years as Actual CFO", 
              desc: "Not a consultant who advises from the sidelines. An operator who has done the job, implemented ERPs, and managed cash flow crises.",
              icon: Briefcase
            },
            { 
              title: "Forensic Expertise", 
              desc: "CIA (Certified Internal Auditor) and ACCA certified. We find issues others miss—revenue recognition games, leakage, and fraud risks.",
              icon: Search
            },
            { 
              title: "Hands-On, No Delegation", 
              desc: "You get the principal, not a team of junior associates learning on your dime. Direct access to 25 years of experience.",
              icon: UserCheck
            },
            { 
              title: "Automation Expert", 
              desc: "Unique capability to combine strategic finance with Make.com and API automation. We build systems that run themselves.",
              icon: Zap
            },
            {
              title: "Fixed Pricing",
              desc: "No hourly billing surprises. We operate on fixed monthly retainers or project fees. Our incentive is efficiency, not hours.",
              icon: CircleDollarSign
            }
          ].map((item, i) => (
            <Card key={i} className="group relative h-full bg-white border border-slate-100 hover:border-sky-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                     <item.icon size={100} className="text-navy-900 transform rotate-12" />
                </div>
                
                <div className="h-14 w-14 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
                   <item.icon size={28} className="transition-transform duration-300 group-hover:rotate-6" />
                </div>
                
                <div className="relative z-10">
                    <h3 className="font-bold text-navy-900 text-lg mb-3 group-hover:text-sky-700 transition-colors">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
            </Card>
          ))}
      </div>
    </div>
  </Section>
);

const Process = () => (
  <Section className="bg-slate-50 relative overflow-hidden">
    {/* Background connecting line */}
    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 -z-10 transform -translate-y-4"></div>

    <div className="text-center mb-20 relative z-10">
      <Badge>Engagement Model</Badge>
      <h2 className="text-3xl font-display font-bold text-navy-900 mt-4">The Engagement Process</h2>
      <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Transparent, fixed-price, and results-oriented from Day 1.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
      {[
        { step: "1", title: "Discovery Call", desc: "15 min, free. Honest assessment of fit.", icon: Search },
        { step: "2", title: "Assessment", desc: "Deep dive into systems and gaps. Paid engagement.", icon: Activity },
        { step: "3", title: "Proposal", desc: "Fixed price, defined scope. No surprises.", icon: Layers },
        { step: "4", title: "Execution", desc: "Hands-on implementation by principal.", icon: Zap },
        { step: "5", title: "Transfer", desc: "Knowledge transfer so you aren't dependent.", icon: CheckCircle2 }
      ].map((item, i) => (
        <div key={i} className="relative group">
          <div className="bg-white p-6 rounded-xl border border-slate-100 h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-sky-200 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mb-6 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 shadow-sm relative">
                <item.icon size={20} />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-navy-900 rounded-full text-white text-xs flex items-center justify-center font-bold border-2 border-white">{item.step}</div>
            </div>
            <h4 className="font-bold text-navy-900 mb-3 group-hover:text-sky-700 transition-colors duration-300">{item.title}</h4>
            <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const Home = () => {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesOverview />
      <WhyLuucka />
      <Process />
      
      {/* Final CTA */}
      <Section className="bg-navy-900 text-white text-center relative overflow-hidden">
        <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Discuss Your Financial Challenges?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
            Schedule a 15-minute confidential consultation. No sales pitch. No obligations. Just a straightforward conversation with someone who's done this for 25 years.
            </p>
            <Button variant="secondary" href="https://calendly.com/dp-luucka/confidential-consultation" className="px-8 py-4 text-base">Schedule a Consultation</Button>
        </div>
      </Section>
    </>
  );
};

export default Home;