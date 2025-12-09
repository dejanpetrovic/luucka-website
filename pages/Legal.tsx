import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Section, FadeIn } from '../components/ui';

const LegalContent = ({ title, date, children }: { title: string, date: string, children?: React.ReactNode }) => (
  <FadeIn>
    <div className="prose prose-slate max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
      <h1 className="text-3xl font-display font-bold text-navy-900 mb-2">{title}</h1>
      <p className="text-slate-500 mb-8 border-b border-slate-100 pb-6">Last Updated: {date}</p>
      <div className="space-y-8 text-slate-700 leading-relaxed">
        {children}
      </div>
    </div>
  </FadeIn>
);

const Legal = () => {
  const { type } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  let content;
  
  if (type === 'privacy') {
    content = (
      <LegalContent title="Privacy Policy" date="December 7, 2024">
        <p>
          LUUCKA INC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website luucka.com and use our services.
        </p>
        <p>
          By using our website or engaging our services, you agree to the collection and use of information in accordance with this Privacy Policy.
        </p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">1. INFORMATION WE COLLECT</h2>
        <p>We collect information that you provide directly to us and information that is automatically collected when you use our website.</p>
        
        <h3 className="text-lg font-bold text-navy-900 mt-4">1.1 Information You Provide to Us</h3>
        <p><strong>Contact Forms:</strong> When you fill out our contact form, we collect:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number (optional)</li>
          <li>Company name (optional)</li>
          <li>Service interest selection</li>
          <li>Message content</li>
        </ul>

        <p className="mt-4"><strong>Consultation Scheduling:</strong> When you schedule a consultation through Calendly, we collect:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Meeting preferences and availability</li>
          <li>Any information you provide in meeting notes</li>
        </ul>

        <p className="mt-4"><strong>Service Engagement:</strong> When you engage our services, we collect:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Complete contact information</li>
          <li>Company details (name, revenue, industry, structure)</li>
          <li>Financial information necessary to provide services</li>
          <li>Banking and payment information</li>
          <li>Business documents and financial statements</li>
          <li>Any other information necessary to deliver contracted services</li>
        </ul>

        <p className="mt-4"><strong>Email Communications:</strong> When you email us directly, we collect:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Email address</li>
          <li>Name</li>
          <li>Subject line and message content</li>
          <li>Any attachments you send</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-6">1.2 Information Automatically Collected</h3>
        <p><strong>Website Usage Information:</strong> When you visit our website, we automatically collect:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Pages visited and time spent on pages</li>
          <li>Referring website</li>
          <li>Date and time of visit</li>
          <li>Device information</li>
        </ul>

        <p className="mt-4"><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to enhance your experience. See our Cookie Policy for details.</p>
        <p className="mt-2"><strong>Analytics:</strong> We use Google Analytics to understand how visitors use our website. Google Analytics collects information such as how often users visit the site, what pages they visit, and what other sites they used prior to coming to our site.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">2. HOW WE USE YOUR INFORMATION</h2>
        <p>We use the information we collect for the following purposes:</p>
        
        <h3 className="text-lg font-bold text-navy-900 mt-4">2.1 To Provide Services</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Respond to inquiries and contact form submissions</li>
          <li>Schedule and manage consultations</li>
          <li>Deliver contracted CFO services, due diligence, or ERP implementation</li>
          <li>Process payments and manage billing</li>
          <li>Communicate about services, deliverables, and projects</li>
          <li>Provide ongoing support and customer service</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-4">2.2 To Improve Our Website and Services</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Analyze website usage and improve user experience</li>
          <li>Understand visitor behavior and preferences</li>
          <li>Optimize website content and navigation</li>
          <li>Test new features and functionality</li>
          <li>Conduct research and development</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-4">2.3 To Communicate With You</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Send service-related communications (project updates, deliverables)</li>
          <li>Respond to your questions and requests</li>
          <li>Send administrative information (changes to terms, policies, pricing)</li>
          <li>Provide relevant information about our services (only if you've opted in)</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-4">2.4 To Comply With Legal Obligations</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Fulfill legal and regulatory requirements</li>
          <li>Protect our legal rights and interests</li>
          <li>Prevent fraud, security breaches, and illegal activity</li>
          <li>Respond to law enforcement requests and court orders</li>
        </ul>

        <h2 className="text-xl font-bold text-navy-900 mt-8">3. HOW WE SHARE YOUR INFORMATION</h2>
        <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">3.1 Service Providers</h3>
        <p>We share information with third-party service providers who perform services on our behalf:</p>
        <p className="mt-2 font-semibold">Website and Email Services:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Microsoft 365: Email hosting and communication (Privacy Policy: microsoft.com/privacy)</li>
          <li>Cloudflare: Website hosting (Privacy Policy: https://www.cloudflare.com/privacypolicy)</li>
        </ul>
        <p className="mt-2 font-semibold">Scheduling and Communication:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Calendly: Appointment scheduling (Privacy Policy: calendly.com/privacy)</li>
          <li>Zoom/Microsoft Teams: Video conferencing for consultations (as applicable)</li>
        </ul>
        <p className="mt-2 font-semibold">Analytics:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Google Analytics: Website usage analytics (Privacy Policy: google.com/policies/privacy)</li>
        </ul>
        <p className="mt-2 font-semibold">Payment Processing:</p>
        <p>We do not store credit card information. Payment processing is handled by third-party payment processors who comply with PCI-DSS standards.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">3.2 Business Transfers</h3>
        <p>If LUUCKA INC is involved in a merger, acquisition, sale of assets, or bankruptcy, your information may be transferred as part of that transaction. You will be notified via email and/or prominent notice on our website of any change in ownership or use of your personal information.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">3.3 Legal Requirements</h3>
        <p>We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, subpoenas, or government agencies).</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">3.4 Protection of Rights</h3>
        <p>We may disclose information when we believe it is necessary to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Protect our legal rights and property</li>
          <li>Protect the safety of our employees, clients, or others</li>
          <li>Investigate fraud or security issues</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-4">3.5 With Your Consent</h3>
        <p>We may share your information for other purposes with your explicit consent.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">4. CLIENT CONFIDENTIALITY</h2>
        <p>For clients who engage our professional services (Fractional CFO, Due Diligence, ERP Implementation), we maintain strict confidentiality:</p>
        <p className="mt-2"><strong>Confidential Information:</strong> All financial information, business documents, strategic plans, and proprietary information shared during engagements are treated as strictly confidential.</p>
        <p className="mt-2"><strong>Non-Disclosure Agreements:</strong> Every client engagement is governed by a comprehensive Non-Disclosure Agreement (NDA) that legally binds us to confidentiality.</p>
        <p className="mt-2"><strong>Information Security:</strong> We implement industry-standard security measures to protect client information:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Encrypted file sharing and communication</li>
          <li>Secure cloud storage with access controls</li>
          <li>Password-protected documents</li>
          <li>Limited access on need-to-know basis</li>
        </ul>
        <p className="mt-2"><strong>No Disclosure Without Permission:</strong> We do not disclose client names, engagement details, or any confidential information without explicit written permission. Case studies and testimonials are only published with client approval and appropriate anonymization.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">5. DATA RETENTION</h2>
        
        <h3 className="text-lg font-bold text-navy-900 mt-4">5.1 General Website Information</h3>
        <p>We retain website usage information and contact form submissions for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Active inquiries: Until resolved or 12 months, whichever is longer</li>
          <li>Analytics data: Aggregated data retained indefinitely; individual data for 26 months (Google Analytics default)</li>
          <li>Email communications: Retained for business records (typically 7 years)</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-4">5.2 Client Engagement Information</h3>
        <p>For paid client engagements:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Active engagements: All information retained during active engagement</li>
          <li>Completed engagements: Financial records and work product retained for 7 years (standard accounting practice)</li>
          <li>Confidential information: Client may request deletion after engagement concludes (subject to legal retention requirements)</li>
        </ul>
        <p className="mt-2">We retain client information for legal, regulatory, and professional liability reasons even after engagement concludes.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">6. YOUR PRIVACY RIGHTS</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">6.1 Rights for All Users</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Access:</strong> Request a copy of personal information we hold about you</li>
          <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
          <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
          <li><strong>Opt-Out:</strong> Opt out of marketing communications (service-related communications will continue during active engagements)</li>
          <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where consent is the legal basis</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-4">6.2 California Residents (CCPA)</h3>
        <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Right to Know:</strong> What personal information we collect, use, disclose, and sell</li>
          <li><strong>Right to Delete:</strong> Request deletion of personal information (with exceptions)</li>
          <li><strong>Right to Opt-Out:</strong> Opt out of sale of personal information (Note: We do not sell personal information)</li>
          <li><strong>Right to Non-Discrimination:</strong> Not be discriminated against for exercising CCPA rights</li>
        </ul>
        <p className="mt-2">To exercise these rights: Contact us at info@luucka.com</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">6.3 European Users (GDPR)</h3>
        <p>If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR):</p>
        <p className="mt-2 font-semibold">Legal Basis for Processing:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Consent: You have provided consent for specific purposes</li>
          <li>Contract: Processing is necessary to perform our contract with you</li>
          <li>Legal Obligation: Processing is required by law</li>
          <li>Legitimate Interests: Processing is necessary for our legitimate business interests</li>
        </ul>
        <p className="mt-2 font-semibold">Additional GDPR Rights:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Right to data portability</li>
          <li>Right to object to processing</li>
          <li>Right to restrict processing</li>
          <li>Right to lodge a complaint with supervisory authority</li>
        </ul>
        <p className="mt-2">Data Transfers: If we transfer data outside the EEA, we ensure appropriate safeguards are in place.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">6.4 How to Exercise Your Rights</h3>
        <p>To exercise any of these rights, contact us:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Email: info@luucka.com</li>
          <li>Phone: (786) 228-4288</li>
          <li>Mail: LUUCKA INC, 221 W Hallandale Beach Blvd Ste 513, Hallandale Beach, FL 33009</li>
        </ul>
        <p className="mt-2">We will respond to your request within 30 days (45 days for complex requests).</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">7. DATA SECURITY</h2>
        <p>We implement reasonable administrative, technical, and physical security measures to protect your information from unauthorized access, disclosure, alteration, or destruction.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">7.1 Security Measures</h3>
        <p><strong>Technical Safeguards:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>SSL/TLS encryption for website (HTTPS)</li>
          <li>Encrypted email communication (Microsoft 365)</li>
          <li>Secure cloud storage with access controls</li>
          <li>Password-protected systems and files</li>
          <li>Multi-factor authentication where available</li>
          <li>Regular security updates and patches</li>
        </ul>
        <p className="mt-2"><strong>Administrative Safeguards:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Access restricted to need-to-know basis</li>
          <li>Employee confidentiality obligations</li>
          <li>Regular security training</li>
          <li>Incident response procedures</li>
        </ul>
        <p className="mt-2"><strong>Physical Safeguards:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Secure office environment</li>
          <li>Locked file storage for physical documents</li>
          <li>Secure disposal of confidential information</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-4">7.2 Limitations</h3>
        <p>While we implement industry-standard security measures, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security of your information.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">7.3 Data Breach Notification</h3>
        <p>In the event of a data breach that affects your personal information, we will notify you and relevant authorities as required by applicable law, typically within 72 hours of discovery.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">8. COOKIES AND TRACKING TECHNOLOGIES</h2>
        <p>Our website uses cookies and similar tracking technologies. See our Cookie Policy (separate page) for detailed information.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Essential Cookies:</strong> Required for website functionality (cannot be disabled)</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website (Google Analytics)</li>
          <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
        </ul>
        <p className="mt-2">You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">9. THIRD-PARTY LINKS</h2>
        <p>Our website may contain links to third-party websites (e.g., LinkedIn, Calendly). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any information.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">10. CHILDREN'S PRIVACY</h2>
        <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we learn that we have collected information from a child under 18, we will delete it promptly.</p>
        <p>If you believe we have inadvertently collected information from a child, please contact us immediately at info@luucka.com.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">11. INTERNATIONAL USERS</h2>
        <p>LUUCKA INC is based in the United States (Florida). If you are accessing our website or using our services from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States.</p>
        <p>By using our website or services, you consent to the transfer of your information to the United States and processing in accordance with this Privacy Policy.</p>
        <p className="mt-2">The United States may have different data protection laws than your country of residence. We take steps to ensure appropriate safeguards are in place for international data transfers.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">12. CHANGES TO THIS PRIVACY POLICY</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements.</p>
        <p className="mt-2 font-semibold">Notification of Changes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Material changes:</strong> We will notify you by email or prominent notice on our website</li>
          <li><strong>Minor changes:</strong> Updated policy will be posted with new "Last Updated" date</li>
        </ul>
        <p className="mt-2">Your continued use of our website or services after changes constitutes acceptance of the updated Privacy Policy.</p>
        <p className="mt-2">We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.</p>
        <p className="mt-2"><strong>Response Time:</strong> We will respond to privacy-related inquiries within 30 days.</p>
        <p className="mt-4 font-bold">This Privacy Policy is effective as of December 7, 2024.</p>
      </LegalContent>
    );
  } else if (type === 'terms') {
    content = (
      <LegalContent title="Terms of Service" date="December 7, 2024">
        <p>These Terms of Service ("Terms") govern your use of the LUUCKA INC website (luucka.com) and the services we provide. By accessing our website or engaging our services, you agree to be bound by these Terms.</p>
        <p className="font-bold">PLEASE READ THESE TERMS CAREFULLY BEFORE USING OUR WEBSITE OR SERVICES.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">1. ACCEPTANCE OF TERMS</h2>
        <p>By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.</p>
        <p>If you do not agree to these Terms, do not use our website or services.</p>
        <p>These Terms constitute a legally binding agreement between you and LUUCKA INC.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">2. DEFINITIONS</h2>
        <p>"We," "us," "our" refers to LUUCKA INC, a company incorporated in Florida.</p>
        <p>"You," "your," "Client" refers to the individual or entity accessing our website or engaging our services.</p>
        <p>"Services" refers to the professional services we provide, including but not limited to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Fractional CFO Services</li>
          <li>CFO + Automation Services</li>
          <li>ERP Implementation Consulting</li>
          <li>Financial Due Diligence</li>
          <li>Related financial consulting and advisory services</li>
        </ul>
        <p>"Website" refers to luucka.com and all associated subdomains and pages.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">3. USE OF WEBSITE</h2>
        
        <h3 className="text-lg font-bold text-navy-900 mt-4">3.1 Permitted Use</h3>
        <p>You may use our website for lawful purposes only:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Learn about our services</li>
          <li>Submit contact inquiries</li>
          <li>Schedule consultations</li>
          <li>Access resources we make available</li>
          <li>Communicate with us regarding services</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-4">3.2 Prohibited Use</h3>
        <p>You may not:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Use our website for any unlawful purpose</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Introduce viruses, malware, or harmful code</li>
          <li>Scrape, harvest, or collect data from our website using automated means</li>
          <li>Interfere with the proper functioning of our website</li>
          <li>Impersonate LUUCKA INC or our employees</li>
          <li>Violate any applicable laws or regulations</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-4">3.3 Intellectual Property</h3>
        <p>All content on our website (text, graphics, logos, images, software) is the property of LUUCKA INC and is protected by copyright, trademark, and other intellectual property laws.</p>
        <p className="mt-2 font-semibold">You may not:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Copy, reproduce, or distribute website content without written permission</li>
          <li>Use our trademarks, service marks, or logos without authorization</li>
          <li>Create derivative works based on our website content</li>
          <li>Reverse engineer any website functionality</li>
        </ul>
        <p className="mt-2"><strong>Limited License:</strong> We grant you a limited, non-exclusive, non-transferable license to access and use our website for its intended purpose.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">4. PROFESSIONAL SERVICES</h2>
        
        <h3 className="text-lg font-bold text-navy-900 mt-4">4.1 Engagement Terms</h3>
        <p>Professional services are provided pursuant to separate written engagement letters or agreements that will specify:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Scope of services</li>
          <li>Deliverables</li>
          <li>Timeline and milestones</li>
          <li>Fees and payment terms</li>
          <li>Confidentiality obligations</li>
          <li>Termination provisions</li>
          <li>Other engagement-specific terms</li>
        </ul>
        <p className="mt-2">These Terms of Service supplement but do not replace engagement-specific agreements.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">4.2 Service Descriptions</h3>
        <p>Service descriptions on our website are for informational purposes only. Actual services provided will be defined in your specific engagement agreement.</p>
        <p className="mt-2">We reserve the right to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Modify service offerings</li>
          <li>Update pricing</li>
          <li>Change service descriptions</li>
          <li>Discontinue services with reasonable notice</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-4">4.3 No Guarantee of Results</h3>
        <p>While we strive for excellence in all engagements, professional services are provided on a "best efforts" basis. <strong>We do not guarantee specific outcomes or results.</strong></p>
        <p>Financial, operational, and business results depend on numerous factors beyond our control. Past performance and case study results do not guarantee future outcomes.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">5. FEES AND PAYMENT</h2>
        
        <h3 className="text-lg font-bold text-navy-900 mt-4">5.1 Service Fees</h3>
        <p>Fees for professional services are specified in individual engagement agreements. Website pricing information is indicative and subject to change.</p>
        <p className="mt-2">Payment terms typically include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Fixed monthly fees (Fractional CFO services)</li>
          <li>Fixed project fees (ERP implementation, Due Diligence)</li>
          <li>Milestone-based payments</li>
          <li>Retainer arrangements</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-4">5.2 Payment Obligations</h3>
        <p>You agree to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Pay all fees as specified in your engagement agreement</li>
          <li>Pay invoices within stated payment terms (typically Net 15 or Net 30)</li>
          <li>Pay interest on late payments (1.5% per month or maximum allowed by law)</li>
          <li>Reimburse pre-approved expenses (travel, software, third-party services)</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-4">5.3 Non-Payment</h3>
        <p>If payment is not received according to agreed terms, we reserve the right to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Suspend services until payment is received</li>
          <li>Terminate the engagement</li>
          <li>Engage collection services</li>
          <li>Pursue legal remedies for non-payment</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-4">5.4 Refunds</h3>
        <p><strong>Services are generally non-refundable.</strong> Specific refund terms, if any, will be specified in your engagement agreement.</p>
        <p>For fixed-fee projects, refunds are not provided for completed work even if the engagement is terminated early.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">6. CONFIDENTIALITY</h2>
        
        <h3 className="text-lg font-bold text-navy-900 mt-4">6.1 Our Obligation to You</h3>
        <p>We maintain strict confidentiality of all client information. All engagements are governed by comprehensive Non-Disclosure Agreements (NDAs).</p>
        <p className="mt-2 font-semibold">We will not disclose:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Your financial information</li>
          <li>Business plans and strategies</li>
          <li>Proprietary information</li>
          <li>Engagement details</li>
          <li>Any information marked as confidential</li>
        </ul>
        <p className="mt-2 font-semibold">Exceptions:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Information you authorize us to disclose</li>
          <li>Information required by law to disclose</li>
          <li>Information that becomes publicly available through no fault of ours</li>
          <li>Information we independently develop without use of your confidential information</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-4">6.2 Your Obligation to Us</h3>
        <p>Any proprietary methodologies, tools, templates, or intellectual property we develop or share during engagements remain our property.</p>
        <p className="mt-2 font-semibold">You agree not to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Disclose our proprietary methodologies to third parties</li>
          <li>Use our intellectual property outside the scope of your engagement</li>
          <li>Reverse engineer our tools or systems</li>
        </ul>

        <h2 className="text-xl font-bold text-navy-900 mt-8">7. LIMITATION OF LIABILITY</h2>
        <p className="font-bold">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
        
        <h3 className="text-lg font-bold text-navy-900 mt-4">7.1 No Consequential Damages</h3>
        <p><strong>WE ARE NOT LIABLE FOR:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Indirect, incidental, special, or consequential damages</li>
          <li>Loss of profits, revenue, or business opportunities</li>
          <li>Loss of data or information</li>
          <li>Business interruption</li>
          <li>Costs of substitute services</li>
        </ul>
        <p className="mt-2 font-bold">EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">7.2 Liability Cap</h3>
        <p><strong>Our total liability for any claim arising from services shall not exceed the fees paid by you for the specific engagement giving rise to the claim.</strong></p>
        <p>For free consultations or website use (where no fees are paid), our liability shall not exceed $100.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">7.3 Exceptions</h3>
        <p>These limitations do not apply to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Our intentional misconduct or gross negligence</li>
          <li>Breaches of confidentiality obligations</li>
          <li>Liability that cannot be excluded by law</li>
          <li>Death or personal injury caused by our negligence</li>
        </ul>

        <h2 className="text-xl font-bold text-navy-900 mt-8">8. PROFESSIONAL DISCLAIMERS</h2>
        
        <h3 className="text-lg font-bold text-navy-900 mt-4">8.1 Not Legal, Tax, or Investment Advice</h3>
        <p>We provide financial and operational consulting services. We do not provide:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Legal advice (we are not attorneys)</li>
          <li>Tax advice (we are not CPAs providing tax services)</li>
          <li>Investment advice (we are not registered investment advisors)</li>
          <li>Audit services (we provide CFO services, not external audit)</li>
        </ul>
        <p className="mt-2">You should consult appropriate professionals (attorneys, tax advisors, investment advisors, auditors) for specialized advice.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">8.2 No Fiduciary Duty</h3>
        <p>Unless explicitly stated in an engagement agreement, we do not have a fiduciary duty to you. Our relationship is that of independent contractor providing professional services.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">8.3 Your Responsibility for Decisions</h3>
        <p>You are responsible for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Business decisions based on our analysis and recommendations</li>
          <li>Implementation of recommendations</li>
          <li>Compliance with laws and regulations</li>
          <li>Accuracy of information you provide to us</li>
          <li>Final outcomes and results</li>
        </ul>
        <p className="mt-2">We provide information, analysis, and recommendations. You make the final decisions.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">9. INDEMNIFICATION</h2>
        <p>You agree to indemnify, defend, and hold harmless LUUCKA INC, its officers, employees, and contractors from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising from:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Your breach of these Terms</li>
          <li>Your violation of any law or regulation</li>
          <li>Your violation of third-party rights</li>
          <li>Inaccurate or false information you provide</li>
          <li>Your use of our services or website</li>
        </ul>
        <p className="mt-2">This indemnification survives termination of any engagement or use of our website.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">10. TERMINATION</h2>
        
        <h3 className="text-lg font-bold text-navy-900 mt-4">10.1 Website Access</h3>
        <p>We reserve the right to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Suspend or terminate your access to our website</li>
          <li>Modify or discontinue website features</li>
          <li>Block IP addresses or users who violate these Terms</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-4">10.2 Service Engagements</h3>
        <p>Termination of professional service engagements is governed by individual engagement agreements, which typically include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Notice periods (30-60 days typical)</li>
          <li>Payment for services rendered through termination date</li>
          <li>Return of confidential information</li>
          <li>Survival of certain provisions (confidentiality, payment obligations)</li>
        </ul>

        <h2 className="text-xl font-bold text-navy-900 mt-8">11. DISPUTE RESOLUTION</h2>
        
        <h3 className="text-lg font-bold text-navy-900 mt-4">11.1 Governing Law</h3>
        <p>These Terms are governed by the laws of the State of Florida, United States, without regard to conflict of law principles.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">11.2 Jurisdiction and Venue</h3>
        <p>Any legal action or proceeding arising from these Terms or our services shall be brought exclusively in the state or federal courts located in Broward County, Florida, and you consent to the jurisdiction of such courts.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">11.3 Informal Resolution</h3>
        <p>Before initiating legal action, you agree to first attempt informal resolution by contacting us at info@luucka.com to discuss the dispute.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">11.4 No Class Actions</h3>
        <p>You agree that disputes will be resolved individually, not as a class action, class arbitration, or representative proceeding.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">12. MODIFICATIONS TO TERMS</h2>
        <p>We reserve the right to modify these Terms at any time.</p>
        <p className="mt-2 font-semibold">Notification:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Material changes: Email notification to active clients</li>
          <li>Minor changes: Posted on website with updated "Last Updated" date</li>
        </ul>
        <p className="mt-2"><strong>Effective Date:</strong> Changes become effective 30 days after posting for existing users, immediately for new users.</p>
        <p>Your continued use of our website or services after changes constitutes acceptance of modified Terms.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">13. GENERAL PROVISIONS</h2>
        
        <h3 className="text-lg font-bold text-navy-900 mt-4">13.1 Entire Agreement</h3>
        <p>For website use, these Terms and our Privacy Policy constitute the entire agreement between you and LUUCKA INC.</p>
        <p>For professional services, the engagement agreement, these Terms, and our Privacy Policy constitute the entire agreement.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">13.2 Severability</h3>
        <p>If any provision of these Terms is found invalid or unenforceable, the remaining provisions will remain in full force and effect.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">13.3 No Waiver</h3>
        <p>Our failure to enforce any right or provision of these Terms does not constitute a waiver of that right or provision.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">13.4 Assignment</h3>
        <p>You may not assign these Terms or any rights hereunder without our written consent. We may assign these Terms without restriction.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">13.5 Force Majeure</h3>
        <p>We are not liable for failure to perform due to causes beyond our reasonable control, including acts of God, war, terrorism, pandemics, natural disasters, or government actions.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">13.6 Survival</h3>
        <p>Provisions that by their nature should survive termination (confidentiality, limitation of liability, indemnification, dispute resolution) will survive.</p>
        
        <p className="mt-8 font-bold">These Terms of Service are effective as of December 7, 2024.</p>
      </LegalContent>
    );
  } else if (type === 'cookies') {
     content = (
      <LegalContent title="Cookie Policy" date="December 7, 2024">
        <p>This Cookie Policy explains how LUUCKA INC ("we," "us," "our") uses cookies and similar tracking technologies on our website luucka.com.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">1. WHAT ARE COOKIES?</h2>
        <p>Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. Cookies are widely used to make websites work more efficiently and provide information to website owners.</p>
        <p className="mt-2 font-semibold">Types of Cookies:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
          <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them</li>
          <li><strong>First-Party Cookies:</strong> Set by the website you're visiting (luucka.com)</li>
          <li><strong>Third-Party Cookies:</strong> Set by third-party services we use (e.g., Google Analytics)</li>
        </ul>

        <h2 className="text-xl font-bold text-navy-900 mt-8">2. HOW WE USE COOKIES</h2>
        <p>We use cookies for the following purposes:</p>
        
        <h3 className="text-lg font-bold text-navy-900 mt-4">2.1 Essential Cookies (Required)</h3>
        <p>These cookies are necessary for the website to function properly. They cannot be disabled.</p>
        <p className="mt-2 font-semibold">Purpose:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Remember your privacy preferences</li>
          <li>Enable core website functionality</li>
          <li>Secure the website and prevent fraud</li>
          <li>Remember items in forms between pages</li>
        </ul>
        <p className="mt-2 font-semibold">Examples:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Session management cookies</li>
          <li>Security cookies</li>
          <li>Load balancing cookies</li>
        </ul>
        <p className="mt-2 font-semibold">These cookies do not collect personal information and are essential for website operation.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">2.2 Analytics Cookies (Optional)</h3>
        <p>We use analytics cookies to understand how visitors use our website.</p>
        <p className="mt-2"><strong>Google Analytics:</strong> We use Google Analytics to collect information about website usage, including:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Pages visited</li>
          <li>Time spent on site</li>
          <li>How visitors arrived at our site</li>
          <li>Browser and device information</li>
          <li>General location (city/country level)</li>
        </ul>
        <p className="mt-2 font-semibold">Data collected is aggregated and anonymized. Google Analytics does not collect personally identifiable information.</p>
        <p>Google Analytics Privacy: google.com/policies/privacy/partners</p>
        <p>You can opt out of Google Analytics: tools.google.com/dlpage/gaoptout</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">2.3 Preference Cookies (Optional)</h3>
        <p>These cookies remember your settings and preferences.</p>
        <p className="mt-2 font-semibold">Purpose:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Remember language preferences</li>
          <li>Remember display settings</li>
          <li>Store form data between visits</li>
          <li>Enhance user experience</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-4">2.4 Marketing Cookies (Currently Not Used)</h3>
        <p>We currently do not use marketing or advertising cookies. If we implement these in the future, we will update this Cookie Policy and obtain your consent where required.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">3. THIRD-PARTY COOKIES</h2>
        <p>Some cookies on our website are set by third-party services we use:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Google Analytics:</strong> Analytics and reporting (google.com)</li>
          <li><strong>Calendly:</strong> Appointment scheduling (calendly.com) - when you access our scheduling page</li>
          <li><strong>Microsoft 365:</strong> Email and communication services (microsoft.com) - when interacting with our email</li>
        </ul>
        <p className="mt-2">Each third-party service has its own privacy policy governing their use of cookies and data collection.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">4. HOW TO CONTROL COOKIES</h2>
        <p>You have several options to control or disable cookies:</p>
        
        <h3 className="text-lg font-bold text-navy-900 mt-4">4.1 Browser Settings</h3>
        <p>Most browsers allow you to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>View cookies stored on your device</li>
          <li>Delete all or specific cookies</li>
          <li>Block all cookies</li>
          <li>Block third-party cookies</li>
          <li>Receive notification before cookies are set</li>
        </ul>
        <p className="mt-2 font-semibold">Browser-Specific Instructions:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Chrome:</strong> Settings > Privacy and Security > Cookies</li>
          <li><strong>Firefox:</strong> Settings > Privacy & Security > Cookies</li>
          <li><strong>Safari:</strong> Preferences > Privacy > Cookies</li>
          <li><strong>Edge:</strong> Settings > Cookies and Site Permissions</li>
        </ul>
        <p className="mt-2 font-semibold">Note: Disabling essential cookies may affect website functionality.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">4.2 Opt-Out Tools</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Google Analytics Opt-Out:</strong> Install the Google Analytics Opt-out Browser Add-on: tools.google.com/dlpage/gaoptout</li>
          <li><strong>Network Advertising Initiative Opt-Out:</strong> optout.networkadvertising.org</li>
          <li><strong>Digital Advertising Alliance Opt-Out:</strong> optout.aboutads.info</li>
        </ul>

        <h2 className="text-xl font-bold text-navy-900 mt-8">5. DO NOT TRACK</h2>
        <p>Some browsers offer a "Do Not Track" (DNT) signal. Currently, there is no industry standard for responding to DNT signals.</p>
        <p>Our website does not specifically respond to DNT signals. However, you can control cookies through browser settings as described above.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">6. COOKIE RETENTION</h2>
        <p>Different cookies have different retention periods:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
          <li><strong>Analytics Cookies:</strong> Typically 2 years (Google Analytics default)</li>
          <li><strong>Preference Cookies:</strong> Typically 1 year</li>
        </ul>
        <p className="mt-2">You can delete cookies at any time through your browser settings.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">7. UPDATES TO THIS COOKIE POLICY</h2>
        <p>We may update this Cookie Policy from time to time to reflect:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Changes in cookie usage</li>
          <li>New third-party services</li>
          <li>Regulatory requirements</li>
          <li>Technology updates</li>
        </ul>
        <p className="mt-2">Updated policies will be posted on this page with a new "Last Updated" date.</p>
        <p className="mt-4 font-bold">This Cookie Policy is effective as of December 7, 2024.</p>
      </LegalContent>
    );
  } else if (type === 'disclaimer') {
     content = (
      <LegalContent title="Disclaimer" date="December 7, 2024">
        <p>This disclaimer applies to all information, services, and content provided by LUUCKA INC through our website (luucka.com) and professional services engagements.</p>
        <p className="font-bold">PLEASE READ THIS DISCLAIMER CAREFULLY.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">1. GENERAL DISCLAIMER</h2>
        
        <h3 className="text-lg font-bold text-navy-900 mt-4">1.1 No Guarantees</h3>
        <p>Information and services provided by LUUCKA INC are for general informational and professional consulting purposes. <strong>We do not guarantee:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Specific results or outcomes</li>
          <li>Financial performance improvements</li>
          <li>Successful fundraising or transactions</li>
          <li>Accuracy of projections or forecasts</li>
          <li>Completeness of any analysis</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-4">1.2 Professional Judgment</h3>
        <p>Our services involve professional judgment and analysis based on:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Information you provide to us</li>
          <li>Publicly available information</li>
          <li>Industry knowledge and experience</li>
          <li>Standard professional methodologies</li>
        </ul>
        <p className="mt-2 font-semibold">The quality of our output depends on the quality and completeness of information we receive.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">2. NOT PROFESSIONAL ADVICE IN CERTAIN AREAS</h2>
        <p>LUUCKA INC provides financial and operational consulting services. <strong>We do not provide:</strong></p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">2.1 Legal Advice</h3>
        <p>We are not attorneys and do not provide legal advice. Our services may involve:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Reviewing contracts (for financial terms only)</li>
          <li>Discussing regulatory compliance (from operational perspective)</li>
          <li>Structuring transactions (financial aspects only)</li>
        </ul>
        <p className="mt-2 font-semibold">For legal advice, consult a licensed attorney.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">2.2 Tax Advice</h3>
        <p>LUUCKA INC does not provide tax preparation or tax advisory services as part of standard engagements.</p>
        <p className="mt-2">Any tax-related comments are:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>General observations</li>
          <li>For consideration with your tax advisor</li>
          <li>Not a substitute for professional tax advice</li>
        </ul>
        <p className="mt-2 font-semibold">For tax advice, consult a tax professional or CPA providing tax services.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">2.3 Audit Services</h3>
        <p>We do not provide external audit services. Our services may include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Financial analysis and review</li>
          <li>Internal control assessment</li>
          <li>Financial statement preparation assistance</li>
        </ul>
        <p className="mt-2 font-semibold">These are not audits and do not provide audit-level assurance.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">2.4 Investment Advice</h3>
        <p>We are not registered investment advisors. Our services may involve:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Financial modeling</li>
          <li>Valuation analysis</li>
          <li>Investment decision support</li>
        </ul>
        <p className="mt-2 font-semibold">This is consulting, not investment advice. For investment decisions, consult a registered investment advisor.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">3. WEBSITE CONTENT DISCLAIMER</h2>
        
        <h3 className="text-lg font-bold text-navy-900 mt-4">3.1 Informational Purposes Only</h3>
        <p>Content on our website (articles, case studies, service descriptions, pricing) is for informational purposes only and does not constitute:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Professional advice specific to your situation</li>
          <li>An offer to provide services</li>
          <li>A guarantee of results</li>
          <li>Legal, tax, or investment advice</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-4">3.2 No Client Relationship</h3>
        <p>Visiting our website or submitting a contact form does not create a client relationship. A client relationship is established only when:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>We execute a written engagement agreement</li>
          <li>We explicitly agree to provide services</li>
          <li>We begin work pursuant to engagement terms</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-4">3.3 Accuracy of Information</h3>
        <p>While we strive for accuracy, we make no warranties regarding:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Accuracy, completeness, or currentness of website content</li>
          <li>Absence of errors or omissions</li>
          <li>Suitability for any particular purpose</li>
        </ul>
        <p className="mt-2 font-semibold">Website content may become outdated. We are not obligated to update website content continuously.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">4. CASE STUDIES AND RESULTS</h2>
        
        <h3 className="text-lg font-bold text-navy-900 mt-4">4.1 Past Performance</h3>
        <p>Case studies, success stories, and client results presented on our website represent specific situations under specific circumstances.</p>
        <p className="font-semibold mt-2">Past performance does not guarantee future results.</p>
        <p className="mt-2">Results depend on numerous factors including:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Company-specific circumstances</li>
          <li>Market conditions</li>
          <li>Management execution</li>
          <li>Economic environment</li>
          <li>Timing and other factors beyond our control</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-4">4.2 Anonymized and Aggregated</h3>
        <p>Case studies are anonymized and may represent:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Composite examples (combining elements from multiple engagements)</li>
          <li>Rounded or approximate figures</li>
          <li>Simplified scenarios for illustrative purposes</li>
        </ul>
        <p className="mt-2 font-semibold">Your results may differ significantly from case study examples.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">5. DUE DILIGENCE DISCLAIMER</h2>
        <p>For financial due diligence services:</p>
        
        <h3 className="text-lg font-bold text-navy-900 mt-4">5.1 Scope Limitations</h3>
        <p>Due diligence is performed within agreed scope and timeline. <strong>We do not:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Verify every transaction or document</li>
          <li>Perform forensic investigation (unless specifically engaged)</li>
          <li>Audit financial statements</li>
          <li>Guarantee detection of all issues or fraud</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-4">5.2 Reliance on Information</h3>
        <p>Due diligence relies on:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Information provided by target company</li>
          <li>Management representations</li>
          <li>Publicly available information</li>
          <li>Limited verification procedures</li>
        </ul>
        <p className="mt-2 font-semibold">We are not responsible for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Inaccurate information provided to us</li>
          <li>Undisclosed information</li>
          <li>Material changes after our work is completed</li>
        </ul>

        <h3 className="text-lg font-bold text-navy-900 mt-4">5.3 Opinion, Not Guarantee</h3>
        <p>Due diligence reports contain our professional opinion based on information available. <strong>This is not:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>A guarantee of investment success</li>
          <li>An assurance that no problems exist</li>
          <li>A recommendation to invest or not invest (unless explicitly requested)</li>
        </ul>
        <p className="mt-2 font-semibold">Investment decisions are yours to make based on due diligence and other factors.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">6. ERP IMPLEMENTATION DISCLAIMER</h2>
        <p>For ERP implementation services:</p>
        
        <h3 className="text-lg font-bold text-navy-900 mt-4">6.1 System Functionality</h3>
        <p>While we implement ERP systems professionally, <strong>we do not control:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Software vendor product development</li>
          <li>Software bugs or defects</li>
          <li>Vendor service quality</li>
          <li>Software licensing terms</li>
        </ul>
        <p className="mt-2 font-semibold">Software is licensed from vendors (NetSuite, Microsoft, SAP). We implement but don't guarantee software performance.</p>

        <h3 className="text-lg font-bold text-navy-900 mt-4">6.2 Business Process Changes</h3>
        <p>ERP implementation may require:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Business process changes</li>
          <li>Staff training and adaptation</li>
          <li>Data migration and cleanup</li>
          <li>Temporary productivity decrease</li>
        </ul>
        <p className="mt-2 font-semibold">Your organization's adoption and execution affects success as much as technical implementation.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">7. LIMITATION OF LIABILITY</h2>
        <p className="font-bold">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
        <p className="mt-2">We are not liable for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Business decisions made based on our advice</li>
          <li>Outcomes or results (successful or unsuccessful)</li>
          <li>Third-party actions or failures</li>
          <li>Changes in market conditions or economic environment</li>
          <li>Events beyond our reasonable control</li>
        </ul>
        <p className="mt-2 font-bold">See our Terms of Service for complete liability limitations.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">8. THIRD-PARTY LINKS AND RESOURCES</h2>
        <p>Our website may link to third-party websites, tools, or resources. <strong>We do not:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Endorse third-party services or products</li>
          <li>Control third-party website content</li>
          <li>Assume responsibility for third-party practices</li>
          <li>Warrant third-party information accuracy</li>
        </ul>
        <p className="mt-2 font-semibold">Use third-party resources at your own risk.</p>

        <h2 className="text-xl font-bold text-navy-900 mt-8">9. CHANGES TO DISCLAIMER</h2>
        <p>We reserve the right to modify this Disclaimer at any time. Updated disclaimers will be posted on this page with a new "Last Updated" date.</p>
        <p className="mt-4 font-bold">This Disclaimer is effective as of December 7, 2024.</p>
      </LegalContent>
    );
  } else {
    content = (
      <LegalContent title="Legal Information" date="December 7, 2024">
        <p>Please select a specific legal policy from the footer links.</p>
      </LegalContent>
    );
  }

  return (
    <Section className="bg-slate-50 min-h-screen">
      {content}
    </Section>
  );
};

export default Legal;