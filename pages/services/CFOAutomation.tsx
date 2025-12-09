
import React from 'react';
import { Section, Button, Card, Badge, FadeIn, ParallaxBackground, AccordionItem } from '../../components/ui';
import { CheckCircle2, Zap, LayoutDashboard, FileSpreadsheet } from 'lucide-react';
import { SEO } from '../../components/SEO';

const CFOAutomation = () => {
  return (
    <>
      <SEO 
        title="CFO + Financial Automation Services" 
        description="Automate your finance function. Reduce month-end close to 3 days using Make.com, APIs, and AI. Eliminate manual data entry."
      />
      <section className="relative overflow-hidden bg-navy-900 pt-20 pb-24 text-center px-4">
        <ParallaxBackground imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" />
        <FadeIn className="relative max-w-4xl mx-auto">
          <Badge color="bg-sky-900 text-sky-200 mb-4">CFO + Automation Services</Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            The Automated CFO<br/>
            <span className="text-slate-400">Strategy + Implementation in One Person</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Most CFOs don't understand automation. Most automation experts don't understand finance. Get both. Build finance operations that run on autopilot.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="https://calendly.com/dp-luucka/confidential-consultation">Schedule Free Consultation</Button>
          </div>
        </FadeIn>
      </section>

      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Drowning in Manual Work?</h2>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
                <FileSpreadsheet className="text-red-500 h-6 w-6 shrink-0" />
                <div>
                  <h3 className="font-bold">Manual Data Entry</h3>
                  <p className="text-sm text-slate-600">Copying data between systems. 60% of team time wasted.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
                <LayoutDashboard className="text-red-500 h-6 w-6 shrink-0" />
                <div>
                  <h3 className="font-bold">Stale Dashboards</h3>
                  <p className="text-sm text-slate-600">Reports are manual spreadsheets updated weekly. Data is old.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
                <Zap className="text-red-500 h-6 w-6 shrink-0" />
                <div>
                  <h3 className="font-bold">Slow Close</h3>
                  <p className="text-sm text-slate-600">10-15 days to close the books. Managing via rearview mirror.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 text-white p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">What's Actually Possible</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-green-400" /> 3-Day Month-End Close</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-green-400" /> Real-time Cash Forecasts</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-green-400" /> Automated Bank Recs</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-green-400" /> Automated AP Workflow</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-green-400" /> Daily Revenue P&L by Channel</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Tech Stack & Tools</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <Card>
            <h3 className="font-bold mb-2">Make.com</h3>
            <p className="text-xs text-slate-600">Advanced workflow automation engine.</p>
          </Card>
          <Card>
            <h3 className="font-bold mb-2">APIs</h3>
            <p className="text-xs text-slate-600">Direct integration between NetSuite, Shopify, Banks.</p>
          </Card>
          <Card>
            <h3 className="font-bold mb-2">SQL/PowerBI</h3>
            <p className="text-xs text-slate-600">Data warehousing and live visualization.</p>
          </Card>
          <Card>
            <h3 className="font-bold mb-2">AI/ML</h3>
            <p className="text-xs text-slate-600">Invoice OCR and anomaly detection.</p>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Pricing & Packages</h2>
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <h3 className="text-xl font-bold text-navy-900">Essential + Automation</h3>
            <div className="text-2xl font-bold text-primary mt-2">$15,000<span className="text-sm text-slate-500 font-normal">/mo</span></div>
            <ul className="space-y-3 my-6 text-sm">
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> Essential CFO Services included</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> One Automation Project / Quarter</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> System Optimization</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> Ad-hoc Support</li>
            </ul>
            <Button href="https://calendly.com/dp-luucka/confidential-consultation" className="w-full">Schedule Consultation</Button>
          </Card>
          <Card className="border-2 border-sky-500">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-navy-900">Growth + Automation</h3>
              <Badge>Most Popular</Badge>
            </div>
            <div className="text-2xl font-bold text-primary mt-2">$25,000<span className="text-sm text-slate-500 font-normal">/mo</span></div>
            <ul className="space-y-3 my-6 text-sm">
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> Growth CFO Services included</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> Two Automation Projects / Quarter</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> Advanced AI/ML Implementation</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600" /> Custom Dashboards</li>
            </ul>
            <Button href="https://calendly.com/dp-luucka/confidential-consultation" className="w-full">Get Started</Button>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Common Questions</h2>
        <div className="max-w-3xl mx-auto">
          <AccordionItem title="Do we need to change our accounting software?">
            <p>Rarely. We usually build automation layers <em>on top</em> of your existing stack (QuickBooks Online, Xero, Shopify, etc.) using APIs.</p>
          </AccordionItem>
          
          <AccordionItem title="What if an automation breaks?">
            <p>We monitor all workflows. If an API changes or a connection drops, we receive alerts and fix it. Support is included in the monthly retainer.</p>
          </AccordionItem>
          
          <AccordionItem title="Is this secure?">
            <p>Yes. We use bank-grade encryption and standard OAuth2 connections. We never store your credentials or sensitive data on our own servers.</p>
          </AccordionItem>
          
          <AccordionItem title="Can you automate Accounts Payable?">
            <p>Yes. We can automate the collection of invoices, reading of line items (OCR), approval routing, and entry into your ERP.</p>
          </AccordionItem>
        </div>
      </Section>

      {/* Next Steps */}
      <Section className="bg-navy-900 text-white text-center">
        <h2 className="text-3xl font-display font-bold mb-6">Start Your Automation Journey</h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-10">
          Eliminate manual work and get real-time visibility. Let's discuss your current tech stack and identify high-impact automation opportunities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="secondary" href="https://calendly.com/dp-luucka/confidential-consultation">Schedule a Consultation</Button>
        </div>
      </Section>
    </>
  );
};

export default CFOAutomation;
