import Footer from '@/components/floxen/Footer';
import Nav from '@/components/floxen/Nav';
import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <main className="mx-auto max-w-4xl px-[8vw] py-16 md:py-24">
        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4 text-[#121212]">Privacy Policy</h1>

          <p className="text-gray-600 mb-8">
            <strong>Last updated: September 1, 2026</strong>
          </p>

          <p className="mb-8 text-gray-700 leading-relaxed">
            Floxen ("we," "us," or "our") operates the website{' '}
            <a href="https://floxen.ca" className="text-blue-600 hover:underline">
              floxen.ca
            </a>{' '}
            (the "Site"). This Privacy Policy explains how we collect, use, and protect information
            when you visit our Site or contact us about our services.
          </p>

          <p className="mb-12 text-gray-700 leading-relaxed">
            We are based in Sudbury, Ontario, Canada, and handle personal information in accordance
            with Canada's <em>Personal Information Protection and Electronic Documents Act</em>{' '}
            (PIPEDA).
          </p>

          <hr className="my-12 border-gray-200" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#121212]">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold mb-4 text-[#121212]">
              Information you provide directly
            </h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              When you fill out a contact form, request a quote, or email us, we may collect:
            </p>
            <ul className="list-disc list-inside mb-8 space-y-2 text-gray-700">
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business name</li>
              <li>Any details you share about your project or inquiry</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 text-[#121212]">
              Information collected automatically
            </h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              When you visit our Site, our hosting provider and any analytics tools we use may
              automatically collect:
            </p>
            <ul className="list-disc list-inside mb-8 space-y-2 text-gray-700">
              <li>IP address</li>
              <li>Browser type and device information</li>
              <li>Pages visited and time spent on the Site</li>
              <li>Referring website (how you found us)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 text-[#121212]">Cookies</h3>
            <p className="mb-8 text-gray-700 leading-relaxed">
              Our Site may use cookies or similar technologies to remember basic preferences and
              understand how visitors use the Site. You can disable cookies through your browser
              settings; some features of the Site may not work as intended if you do.
            </p>
          </section>

          <hr className="my-12 border-gray-200" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#121212]">
              2. How We Use Your Information
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside mb-8 space-y-2 text-gray-700">
              <li>Respond to inquiries and provide quotes for our services</li>
              <li>
                Communicate with you about a project, invoice, or ongoing hosting/maintenance plan
              </li>
              <li>Improve our Site and services</li>
              <li>Meet legal or accounting obligations</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, rent, or trade your personal information to third parties.
            </p>
          </section>

          <hr className="my-12 border-gray-200" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#121212]">3. How We Share Information</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">We may share information with:</p>
            <ul className="list-disc list-inside mb-8 space-y-4 text-gray-700">
              <li>
                <strong>Service providers</strong> who help us operate the Site or deliver our
                services (e.g. web hosting providers, email providers). These providers only access
                the information needed to perform their function and are not permitted to use it for
                other purposes.
              </li>
              <li>
                <strong>Legal requirements</strong>, if we're required to disclose information to
                comply with a law, regulation, or valid legal request.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We do not share your information with third parties for their own marketing purposes.
            </p>
          </section>

          <hr className="my-12 border-gray-200" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#121212]">4. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We keep personal information only as long as necessary to fulfill the purposes
              described in this policy, or as required by law (for example, financial records for
              tax purposes).
            </p>
          </section>

          <hr className="my-12 border-gray-200" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#121212]">5. Your Rights</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Under PIPEDA, you have the right to:
            </p>
            <ul className="list-disc list-inside mb-8 space-y-2 text-gray-700">
              <li>Access the personal information we hold about you</li>
              <li>Request corrections to inaccurate information</li>
              <li>
                Withdraw consent for us to use your information, subject to legal or contractual
                restrictions
              </li>
              <li>Ask us to delete information we no longer need</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise any of these rights, contact us using the information below.
            </p>
          </section>

          <hr className="my-12 border-gray-200" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#121212]">6. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We take reasonable steps to protect your information from loss, misuse, and
              unauthorized access. However, no method of transmission over the internet or
              electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <hr className="my-12 border-gray-200" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#121212]">7. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Site may contain links to third-party websites (such as social media pages). We
              are not responsible for the privacy practices or content of those external sites.
            </p>
          </section>

          <hr className="my-12 border-gray-200" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#121212]">8. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Site and services are intended for business owners and are not directed at
              children under 13. We do not knowingly collect personal information from children.
            </p>
          </section>

          <hr className="my-12 border-gray-200" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#121212]">9. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. The "Last updated" date at the
              top of this page will reflect the most recent changes. Continued use of the Site after
              changes are posted constitutes acceptance of the updated policy.
            </p>
          </section>

          <hr className="my-12 border-gray-200" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#121212]">10. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or how we handle your information,
              contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg text-gray-700">
              <p className="font-semibold mb-2">Floxen</p>
              <p>
                Email:{' '}
                <a href="mailto:floxeninc@gmail.com" className="text-blue-600 hover:underline">
                  floxeninc@gmail.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a href="tel:6474619424" className="text-blue-600 hover:underline">
                  647-461-9424
                </a>
              </p>
              <p>Sudbury, Ontario, Canada</p>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
