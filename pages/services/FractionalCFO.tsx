
import React from 'react';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { Section, Button, Card, Badge, FadeIn, AccordionItem, ParallaxBackground } from '../../components/ui';
import { SEO } from '../../components/SEO';

const FractionalCFO = () => {
  return (
    <>
      <SEO 
        title="Fractional CFO Services for Middle Market" 
        description="Part-time CFO expertise for companies $5M-$50M revenue. Strategic financial leadership, cash flow management, and board reporting without the full-time cost."
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 pt-20 pb-24 text-center px-4">
        <ParallaxBackground imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" />
        <FadeIn className="relative max-w-4xl mx-auto">
          <Badge color="bg-sky-900 text-sky-200 mb-4">Fractional CFO Services</Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Strategic Financial Leadership<br/>
            <span className="text-slate-400">Without the $200K+ Commitment</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Part-time CFO expertise for e-commerce, logistics, and distribution companies $5M-$50M revenue. Get strategic guidance, cash flow management, and board-level leadership.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="https://calendly.com/dp-luucka/confidential-consultation">Schedule Free Consultation</Button>
          </div>
        </FadeIn>
      </section>

      {/* The Problem */}
      <Section className="bg-white">
        <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">The Middle-Market CFO Challenge</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-600">
            <p>You're at a critical inflection point. Your company is growing, but the cracks are showing:</p>
            <ul className="space-y-3">
              <li className="flex gap-3"><XCircle className="text-red-500 shrink-0" /> Can't get month-end close under 15 days.</li>
              <li className="flex gap-3"><XCircle className="text-red-500 shrink-0" /> Can't answer investor questions with confidence.</li>
              <li className="flex gap-3"><XCircle className="text-red-500 shrink-0" /> No forward visibility on cash flow.</li>
              <li className="flex gap-3"><XCircle className="text-red-500 shrink-0" /> Preparing for capital event but not ready.</li>
            </ul>
          </div>
          <Card className="bg-slate-50 border-none">
            <h3 className="font-bold text-navy-900 mb-4">What a Fractional CFO Does:</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-2"><CheckCircle2 className="text-green-600 h-5 w-5" /> Strategic Financial Planning & Modeling</li>
              <li className="flex gap-2"><CheckCircle2 className="text-green-600 h-5 w-5" /> 13-Week Rolling Cash Flow Forecasts</li>
              <li className="flex gap-2"><CheckCircle2 className="text-green-600 h-5 w-5" /> Board & Investor Relations Packages</li>
              <li className="flex gap-2"><CheckCircle2 className="text-green-600 h-5 w-5" /> KPI Dashboards & Analytics</li>
              <li className="flex gap-2"><CheckCircle2 className="text-green-600 h-5 w-5" /> Team Leadership & Mentoring</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Pricing */}
      <Section className="bg-slate-50">
        <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Service Packages & Pricing</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Essential */}
          <Card className="flex flex-col h-full hover:shadow-lg transition-all">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-navy-900">Essential CFO</h3>
              <div className="text-2xl font-bold text-primary mt-2">$6,000<span className="text-sm text-slate-500 font-normal">/mo</span></div>
              <p className="text-sm text-slate-500 mt-2">6-8 hours/month</p>
            </div>
            <p className="text-sm text-slate-600 mb-6">Best for companies $5M-$15M revenue needing strategic guidance and board reporting.</p>
            <ul className="space-y-3 mb-8 flex-grow text-sm">
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> Monthly Financial Package</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> Quarterly Forecast Updates</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> Quarterly Board Prep</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> Monthly Controller Check-in</li>
            </ul>
            <Button variant="outline" href="https://calendly.com/dp-luucka/confidential-consultation" className="w-full">Schedule Consultation</Button>
          </Card>

          {/* Growth */}
          <Card className="flex flex-col h-full border-sky-500 border-2 relative shadow-xl transform scale-105 z-10">
            <div className="absolute top-0 right-0 bg-sky-500 text-white text-xs px-3 py-1 rounded-bl-lg font-bold">MOST POPULAR</div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-navy-900">Growth CFO</h3>
              <div className="text-2xl font-bold text-primary mt-2">$10,000<span className="text-sm text-slate-500 font-normal">/mo</span></div>
              <p className="text-sm text-slate-500 mt-2">12-15 hours/month</p>
            </div>
            <p className="text-sm text-slate-600 mb-6">For companies $15M-$35M revenue. Rapid growth, fundraising, or active cash management.</p>
            <ul className="space-y-3 mb-8 flex-grow text-sm">
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> Weekly Cash Review</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> Monthly Board Packages</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> 13-Week Cash Forecast</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> Bi-weekly Standing Calls</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> Slack/Text Access</li>
            </ul>
            <Button href="https://calendly.com/dp-luucka/confidential-consultation" className="w-full">Get Started</Button>
          </Card>

          {/* Strategic */}
          <Card className="flex flex-col h-full hover:shadow-lg transition-all">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-navy-900">Strategic CFO</h3>
              <div className="text-2xl font-bold text-primary mt-2">$15,000<span className="text-sm text-slate-500 font-normal">/mo</span></div>
              <p className="text-sm text-slate-500 mt-2">20-25 hours/month</p>
            </div>
            <p className="text-sm text-slate-600 mb-6">For companies $25M-$50M. Active fundraising, M&A, or complex multi-entity ops.</p>
            <ul className="space-y-3 mb-8 flex-grow text-sm">
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> Fundraising Process Mgmt</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> M&A Leadership</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> Weekly Strategy Calls</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> Board Meeting Attendance</li>
            </ul>
            <Button variant="outline" href="https://calendly.com/dp-luucka/confidential-consultation" className="w-full">Discuss Custom Package</Button>
          </Card>
        </div>
      </Section>

      {/* Case Studies Summary */}
      <Section>
        <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "E-commerce ($18M)",
              desc: "Rebuilt chart of accounts, automated cash forecast. Reduced close from 18 to 4 days. Successfully raised $8M Series A."
            },
            {
              title: "Logistics ($32M)",
              desc: "Designed multi-entity structure, implemented NetSuite. Optimized working capital by $2.1M. Successful PE exit."
            },
            {
              title: "Manufacturing ($12M)",
              desc: "Implemented job costing. Identified 30% of products were underwater. Turned $400K loss into $1.2M profit."
            }
          ].map((caseStudy, i) => (
            <div key={i} className="bg-white p-6 border-l-4 border-navy-900 shadow-sm">
              <h3 className="font-bold text-lg mb-2">{caseStudy.title}</h3>
              <p className="text-slate-600 text-sm">{caseStudy.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Common Questions</h2>
        <div className="max-w-3xl mx-auto">
          <AccordionItem title="How is this different from my Controller?">
            <p className="text-slate-700">
              Controllers look backward (record keeping, compliance). A CFO looks forward (strategy, cash planning, fundraising). You likely need both, but not a full-time CFO yet.
            </p>
          </AccordionItem>
          
          <AccordionItem title="Do you replace our bookkeeper?">
             <p className="text-slate-700">
              No. I work with your existing team. I oversee their work, close the books faster, and turn that data into strategy. I manage them so you don't have to.
             </p>
          </AccordionItem>
          
          <AccordionItem title="Is there a long-term contract?">
             <p className="text-slate-700">
              No. All fractional engagements are month-to-month with a simple 30-day notice period. We earn your business every month.
             </p>
          </AccordionItem>
          
          <AccordionItem title="Do you join investor meetings?">
             <p className="text-slate-700">
              Yes. In the Growth and Strategic packages, I act as your company's officer during board meetings and diligence calls.
             </p>
          </AccordionItem>
        </div>
      </Section>

      {/* Next Steps */}
      <Section className="bg-navy-900 text-white text-center">
        <h2 className="text-3xl font-display font-bold mb-6">Ready to Upgrade Your Financial Leadership?</h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-10">
          Stop flying blind. Schedule a free 15-minute discovery call to see if a fractional model fits your needs.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="secondary" href="https://calendly.com/dp-luucka/confidential-consultation">Schedule a Consultation</Button>
        </div>
      </Section>
    </>
  );
};

export default FractionalCFO;
