import React from 'react';
import { Section, Button, Card, Badge, FadeIn, ParallaxBackground, CountUp } from '../../components/ui';
import { ShoppingCart, Truck, Globe, Factory, CheckCircle2 } from 'lucide-react';

interface IndustryContent {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  challenges: string[];
  solutions: string[];
  metrics: { prefix?: string; value: number; suffix?: string; label: string; decimals?: number }[];
  image: string;
}

const contentMap: Record<string, IndustryContent> = {
  ecommerce: {
    title: "E-Commerce & DTC Brands",
    subtitle: "Financial Leadership for High-Growth Brands",
    icon: ShoppingCart,
    challenges: [
      "Multi-channel revenue recognition (Shopify, Amazon, Retail)",
      "Marketplace fee allocation (Gross vs Net)",
      "Complex inventory (FBA, 3PL, Dropship)",
      "CAC/LTV tracking and unit economics"
    ],
    solutions: [
      "Built financial systems for 8 e-commerce companies",
      "Automated revenue recognition across channels",
      "Real-time channel profitability dashboards",
      "Inventory optimization (reduced by 30-40%)"
    ],
    metrics: [
      { value: 82, suffix: "%", label: "Reduction in month-end close time" },
      { prefix: "$", value: 1.8, suffix: "M", label: "Working capital improvement", decimals: 1 },
      { value: 5, label: "Successful fundraises supported" }
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  logistics: {
    title: "Logistics & Distribution",
    subtitle: "Financial Leadership for 3PL/4PL Operations",
    icon: Truck,
    challenges: [
      "Multi-entity structures (OpCo/PropCo)",
      "Complex cost allocation (Warehouse/Freight)",
      "Asset-heavy balance sheets",
      "Working capital intensity (AR/AP timing)"
    ],
    solutions: [
      "Proper multi-entity accounting structure",
      "Intercompany automation",
      "Scientific cost allocation models",
      "Working capital optimization ($1M-$3M freed)"
    ],
    metrics: [
      { prefix: "$", value: 2.1, suffix: "M", label: "Avg working capital improvement", decimals: 1 },
      { value: 7, suffix: " Days", label: "Consolidated close for 5 entities" },
      { value: 3, label: "Exits to Private Equity" }
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  trade: {
    title: "Import/Export & Freight",
    subtitle: "Financial Leadership for International Trade",
    icon: Globe,
    challenges: [
      "Multi-currency operations & FX exposure",
      "Customs & duties accounting",
      "Trade finance instruments (LCs)",
      "Long cash cycles (tied up in transit)"
    ],
    solutions: [
      "Multi-currency accounting setup",
      "Landed cost calculation automation",
      "Hedging strategies",
      "Cash flow forecasting for long cycles"
    ],
    metrics: [
      { prefix: "$", value: 1.2, suffix: "M", label: "Capital improvement", decimals: 1 },
      { value: 15, suffix: "%", label: "Margin visibility improvement" },
      { value: 100, suffix: "%", label: "Customs audit success" }
    ],
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  manufacturing: {
    title: "Manufacturing",
    subtitle: "Financial Leadership for Production Operations",
    icon: Factory,
    challenges: [
      "Job costing vs Process costing",
      "Inventory valuation (Raw/WIP/Finished)",
      "Overhead allocation",
      "Product profitability blindness"
    ],
    solutions: [
      "Accurate overhead allocation",
      "Standard costing implementation",
      "Make-vs-buy analysis",
      "Production efficiency metrics"
    ],
    metrics: [
      { value: 18, suffix: "%", label: "Gross margin improvement" },
      { prefix: "$", value: 1.6, suffix: "M", label: "Profit from SKU rationalization", decimals: 1 },
      { value: 7, label: "ERP implementations" }
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  }
};

const IndustryPage: React.FC<{ type: string }> = ({ type }) => {
  const content = contentMap[type];
  const Icon = content.icon;

  if (!content) return <div>Industry not found</div>;

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 pt-20 pb-24 text-center px-4">
        <ParallaxBackground imageUrl={content.image} />
        <FadeIn className="relative max-w-4xl mx-auto">
          <Badge color="bg-sky-900 text-sky-200 mb-4">{content.title}</Badge>
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Icon className="h-12 w-12 text-sky-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            {content.subtitle}
          </h1>
          <Button href="https://calendly.com/dp-luucka/confidential-consultation">Schedule Consultation</Button>
        </FadeIn>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">The Challenge</h2>
            <p className="text-slate-600 mb-6">Generic CFOs struggle here. We specialize in:</p>
            <ul className="space-y-4">
              {content.challenges.map((c, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="h-2 w-2 rounded-full bg-red-500 mt-2 shrink-0"></div>
                  <span className="text-slate-700">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">What We Deliver</h2>
            <ul className="space-y-4">
              {content.solutions.map((s, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle2 className="text-green-600 h-5 w-5 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Real Client Outcomes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {content.metrics.map((m, i) => (
            <Card key={i} className="text-center group hover:border-sky-200 transition-colors duration-300">
              <div className="text-4xl font-bold text-navy-900 mb-2 group-hover:text-sky-600 transition-colors">
                <CountUp end={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} />
              </div>
              <div className="text-sm text-slate-500">{m.label}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-navy-900 text-white text-center">
        <h2 className="text-3xl font-display font-bold mb-6">Ready to Master Your Financials?</h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-10">
          Stop struggling with generic advice. Get financial leadership built for {content.title}.
        </p>
        <Button variant="secondary" href="https://calendly.com/dp-luucka/confidential-consultation">Schedule a Consultation</Button>
      </Section>
    </>
  );
};

export default IndustryPage;