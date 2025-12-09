
import React from 'react';
import { Section, Button, Card, Badge, FadeIn, ParallaxBackground, AccordionItem } from '../../components/ui';
import { ShieldCheck, Search, AlertTriangle, FileText } from 'lucide-react';
import { SEO } from '../../components/SEO';

const DueDiligence = () => {
  return (
    <>
      <SEO 
        title="Financial Due Diligence Services (M&A)" 
        description="Institutional-grade financial due diligence for middle-market M&A. Quality of Earnings (QofE), risk quantification, and post-close roadmaps. Fast turnaround."
      />
      <section className="relative overflow-hidden bg-navy-900 pt-20 pb-24 text-center px-4">
        <ParallaxBackground imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" />
        <FadeIn className="relative max-w-4xl mx-auto">
          <Badge color="bg-sky-900 text-sky-200 mb-4">Financial Due Diligence</Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Institutional-Grade Due Diligence<br/>
            <span className="text-slate-400">For Middle-Market M&A</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Former EBRD & IFC Team Leader. Fast turnaround (2-3 weeks). Forensic rigor. Quantified risks. 
            Find what Big 4 miss at a price that makes sense for deals $5M-$100M.
          </p>
          <Button href="https://calendly.com/dp-luucka/confidential-consultation">Schedule DD Consultation</Button>
        </FadeIn>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Why Standard DD Fails</h2>
            <p className="text-slate-600 mb-6">Big 4 diligence is designed for $500M+ deals. For middle-market transactions, it falls short:</p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <AlertTriangle className="text-red-500 h-5 w-5 mt-1" />
                <div>
                  <strong>Junior Teams:</strong> You get a 27-year-old associate checking boxes, not an experienced operator finding risks.
                </div>
              </li>
              <li className="flex gap-3">
                <AlertTriangle className="text-red-500 h-5 w-5 mt-1" />
                <div>
                  <strong>Risk Listing, Not Quantification:</strong> They list risks ("customer concentration may impact...") but don't quantify the EBITDA impact.
                </div>
              </li>
              <li className="flex gap-3">
                <AlertTriangle className="text-red-500 h-5 w-5 mt-1" />
                <div>
                  <strong>No Operational Insight:</strong> They audit numbers but don't ask "Can this team actually execute the growth plan?"
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">The LUUCKA Methodology</h2>
            <div className="space-y-4">
              <Card className="bg-slate-50">
                <h3 className="font-bold mb-2">1. Forensic Rigor</h3>
                <p className="text-sm text-slate-600">Revenue recognition games, working capital manipulation, hidden liabilities.</p>
              </Card>
              <Card className="bg-slate-50">
                <h3 className="font-bold mb-2">2. Operational Realism</h3>
                <p className="text-sm text-slate-600">Assessment of systems, team capability, and scalability of margins.</p>
              </Card>
              <Card className="bg-slate-50">
                <h3 className="font-bold mb-2">3. Post-Close Roadmap</h3>
                <p className="text-sm text-slate-600">Not just a report. A 90-day plan for integration and improvement.</p>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Pricing & Scope</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <h3 className="font-bold text-xl mb-2">Small Transactions</h3>
            <p className="text-sm text-slate-500 mb-4">$5M-$15M Enterprise Value</p>
            <div className="text-2xl font-bold text-navy-900 mb-6">$15k - $25k</div>
            <ul className="text-sm space-y-2 mb-6">
              <li>• Quality of Earnings</li>
              <li>• Working Capital Analysis</li>
              <li>• 2-3 Week Timeline</li>
            </ul>
          </Card>
          <Card className="border-2 border-navy-900 relative">
            <div className="absolute top-0 right-0 bg-navy-900 text-white text-xs px-2 py-1 rounded-bl">Standard</div>
            <h3 className="font-bold text-xl mb-2">Middle Market</h3>
            <p className="text-sm text-slate-500 mb-4">$15M-$50M Enterprise Value</p>
            <div className="text-2xl font-bold text-navy-900 mb-6">$25k - $50k</div>
            <ul className="text-sm space-y-2 mb-6">
              <li>• Comprehensive QofE</li>
              <li>• Revenue Sustainability</li>
              <li>• Systems Assessment</li>
              <li>• 3 Week Timeline</li>
            </ul>
          </Card>
          <Card>
            <h3 className="font-bold text-xl mb-2">Complex/Large</h3>
            <p className="text-sm text-slate-500 mb-4">$50M-$100M Enterprise Value</p>
            <div className="text-2xl font-bold text-navy-900 mb-6">$50k - $75k</div>
            <ul className="text-sm space-y-2 mb-6">
              <li>• Multi-entity/International</li>
              <li>• Segment Profitability</li>
              <li>• Integration Planning</li>
              <li>• 3-4 Week Timeline</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Common Questions</h2>
        <div className="max-w-3xl mx-auto">
          <AccordionItem title="How fast can you start?">
            <p>Usually within 48 hours of engagement signing. We know deal flow is time-sensitive.</p>
          </AccordionItem>
          
          <AccordionItem title="What is the final deliverable?">
            <p>A comprehensive written report (QofE, Net Working Capital, Risks) plus an Excel databook with all underlying analysis and a post-close roadmap.</p>
          </AccordionItem>
          
          <AccordionItem title="Do you provide tax diligence?">
            <p>Our focus is financial and operational diligence. We partner with specialized firms for Tax, Legal, and Tech diligence if needed.</p>
          </AccordionItem>
          
          <AccordionItem title="Do you travel to the target company?">
            <p>Most analysis is remote via data room. However, for manufacturing or inventory-heavy businesses, a site visit is highly recommended.</p>
          </AccordionItem>
        </div>
      </Section>

      {/* Next Steps */}
      <Section className="bg-navy-900 text-white text-center">
        <h2 className="text-3xl font-display font-bold mb-6">Need Diligence Fast?</h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-10">
          Deal flow waits for no one. We can usually start within 48 hours. Send us the CIM or schedule a call to discuss scope and pricing.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="secondary" href="https://calendly.com/dp-luucka/confidential-consultation">Schedule a Consultation</Button>
        </div>
      </Section>
    </>
  );
};

export default DueDiligence;
