
import React from 'react';
import { Section, Button, Card, Badge, FadeIn, ParallaxBackground, AccordionItem } from '../../components/ui';
import { Database, CheckCircle2, AlertTriangle, Layers, Settings } from 'lucide-react';
import { SEO } from '../../components/SEO';

const ERPImplementation = () => {
  return (
    <>
      <SEO 
        title="ERP Implementation Services (NetSuite, Dynamics, SAP)" 
        description="Fixed-price ERP implementation by a CFO. NetSuite, Microsoft Dynamics, and SAP Business One. Operational focus with built-in automation layer."
      />
      <section className="relative overflow-hidden bg-navy-900 pt-20 pb-24 text-center px-4">
        <ParallaxBackground imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" />
        <FadeIn className="relative max-w-4xl mx-auto">
          <Badge color="bg-sky-900 text-sky-200 mb-4">ERP Implementation Consulting</Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            ERP Implementation by a CFO<br/>
            <span className="text-slate-400">Who Actually Uses These Systems</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Implementing SAP, Microsoft Dynamics, and NetSuite. Big 4 methodology at 1/3 the cost. Fixed pricing. Realistic timelines. Includes the automation layer others miss.
          </p>
          <Button href="https://calendly.com/dp-luucka/confidential-consultation">Schedule Free Consultation</Button>
        </FadeIn>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Why Most Implementations Fail</h2>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                <div className="flex gap-2 font-bold text-red-900 items-center"><AlertTriangle size={18} /> Consultants Aren't Operators</div>
                <p className="text-sm text-red-800 mt-1">They know configuration, not finance. They've never done a month-end close.</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                <div className="flex gap-2 font-bold text-red-900 items-center"><AlertTriangle size={18} /> Scope Creep</div>
                <p className="text-sm text-red-800 mt-1">Consultants oversell features you don't need. Timelines balloon.</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                <div className="flex gap-2 font-bold text-red-900 items-center"><AlertTriangle size={18} /> No Accountability</div>
                <p className="text-sm text-red-800 mt-1">They deliver a system that is "technically correct" but operationally useless.</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">The LUUCKA Difference</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="text-green-600 h-6 w-6 shrink-0" />
                <span><strong>I've been a CFO for 25 years.</strong> I build for how finance actually works.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="text-green-600 h-6 w-6 shrink-0" />
                <span><strong>Fixed Pricing.</strong> I absorb the risk. Incentivized to be efficient.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="text-green-600 h-6 w-6 shrink-0" />
                <span><strong>Automation Layer Included.</strong> I don't just give you an ERP; I connect it to your other systems.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="text-green-600 h-6 w-6 shrink-0" />
                <span><strong>Phased Approach.</strong> Core financials first. Advanced features later. Reduced risk.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Systems We Implement</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
              <Database size={24} />
            </div>
            <h3 className="font-bold text-xl mb-2">NetSuite</h3>
            <p className="text-sm text-slate-600 mb-4">Best for E-commerce, multi-channel, and rapid growth.</p>
            <div className="text-xs font-semibold text-slate-500">Implementation: $50K-$150K</div>
          </Card>
          <Card>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
              <Layers size={24} />
            </div>
            <h3 className="font-bold text-xl mb-2">Microsoft Dynamics</h3>
            <p className="text-sm text-slate-600 mb-4">Best for Manufacturing, Distribution, and Microsoft-centric shops.</p>
            <div className="text-xs font-semibold text-slate-500">Implementation: $60K-$400K</div>
          </Card>
          <Card>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
              <Settings size={24} />
            </div>
            <h3 className="font-bold text-xl mb-2">SAP Business One</h3>
            <p className="text-sm text-slate-600 mb-4">Best for Manufacturing and International operations.</p>
            <div className="text-xs font-semibold text-slate-500">Implementation: $75K-$175K</div>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Phased Methodology</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="bg-white p-6 border rounded-lg shadow-sm">
            <h3 className="font-bold text-lg text-navy-900">Phase 1: Core Financials (3-5 Months)</h3>
            <p className="text-sm text-slate-600">GL, AP, AR, Cash Management, Reporting. Go-live quickly.</p>
          </div>
          <div className="bg-white p-6 border rounded-lg shadow-sm">
            <h3 className="font-bold text-lg text-navy-900">Phase 2: Operations (2-4 Months)</h3>
            <p className="text-sm text-slate-600">Inventory, Manufacturing, Order Management. Add complexity once core is stable.</p>
          </div>
          <div className="bg-white p-6 border rounded-lg shadow-sm">
            <h3 className="font-bold text-lg text-navy-900">Phase 3: Advanced Features</h3>
            <p className="text-sm text-slate-600">Advanced BI, Third-party integrations, Custom Workflows.</p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Common Questions</h2>
        <div className="max-w-3xl mx-auto">
          <AccordionItem title="How long does implementation take?">
            <p>A typical Phase 1 (Core Financials) takes 3-5 months. Full operational implementation can take 6-9 months depending on complexity.</p>
          </AccordionItem>
          
          <AccordionItem title="Do you handle data migration?">
            <p>Yes. We map and import your historical customers, vendors, and items. For financial history, we typically migrate monthly trial balances.</p>
          </AccordionItem>
          
          <AccordionItem title="Why fixed pricing?">
            <p>Hourly billing incentivizes consultants to work slowly. Fixed pricing aligns our incentives: you want a working system, and I want to deliver it efficiently.</p>
          </AccordionItem>
          
          <AccordionItem title="Do you offer training?">
            <p>Yes. We provide recorded video training specific to your workflows so new employees can get up to speed quickly in the future.</p>
          </AccordionItem>
        </div>
      </Section>

      {/* Next Steps */}
      <Section className="bg-navy-900 text-white text-center">
         <h2 className="text-3xl font-display font-bold mb-6">Plan Your Implementation</h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-10">
          Don't let your ERP project fail before it starts. Get an honest assessment of your readiness, budget, and realistic timeline.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="secondary" href="https://calendly.com/dp-luucka/confidential-consultation">Schedule a Consultation</Button>
        </div>
      </Section>
    </>
  );
};

export default ERPImplementation;
