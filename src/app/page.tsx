'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu, ArrowRight, Bot, Globe, MapPin, Linkedin,
  Zap, Target, MessageSquare, CheckCircle, ChevronRight,
  Star, TrendingUp, Clock, DollarSign, Sparkles, Mail
} from 'lucide-react';

const services = [
  {
    icon: <Bot className="w-7 h-7" />,
    label: "AI Chatbots",
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(6,182,212,0.1)",
    border: "border-slate-200",
    desc: "Deploy intelligent chatbots that handle customer questions 24/7 — so your team doesn't have to.",
    bullets: ["FAQ automation", "Lead capture", "Appointment booking"],
    href: "/chatbots",
    cta: "View Chatbot Services",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    label: "Website Creation",
    color: "from-violet-400 to-purple-600",
    glow: "rgba(139,92,246,0.1)",
    border: "border-slate-200",
    desc: "Fast, professional websites built for small businesses that need to look credible online — fast.",
    bullets: ["Landing pages", "Business sites", "SEO Optimized"],
    href: "#contact",
    cta: "Get a Free Quote",
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    label: "Google Maps & SEO",
    color: "from-emerald-400 to-green-600",
    glow: "rgba(16,185,129,0.1)",
    border: "border-slate-200",
    desc: "Get your business found when people search locally. We set up and optimize your Google presence.",
    bullets: ["Google Business Profile", "Local SEO", "Review management"],
    href: "#contact",
    cta: "Boost Your Visibility",
  },
  {
    icon: <Linkedin className="w-7 h-7" />,
    label: "LinkedIn Automation",
    color: "from-blue-400 to-indigo-500",
    glow: "rgba(59,130,246,0.1)",
    border: "border-slate-200",
    desc: "Our autonomous LinkedIn engine posts daily AI-driven content across two high-authority channels.",
    bullets: ["Content generation", "Sponsored posts", "Audience growth"],
    href: "/linkedin",
    cta: "See LinkedIn Services",
  },
  {
    icon: <DollarSign className="w-7 h-7" />,
    label: "Monetization",
    color: "from-amber-400 to-orange-600",
    glow: "rgba(245,158,11,0.1)",
    border: "border-slate-200",
    desc: "Turn your website traffic into recurring revenue with Google Ads, affiliate systems, and premium content.",
    bullets: ["Google Adsense", "Affiliate Automation", "Payment Gateways"],
    href: "/monetize",
    cta: "Start Monetizing",
  },
];

const sectors = [
  { emoji: "🍽️", title: "Restaurants & Food", desc: "Answer hours, take reservations, and handle Instagram DMs on autopilot.", tags: "CHATBOT + SOCIAL" },
  { emoji: "🏠", title: "Real Estate", desc: "Qualify buyers 24/7, book showings, and capture leads before they go to Zillow.", tags: "CHATBOT + OUTREACH" },
  { emoji: "🏥", title: "Healthcare & Clinics", desc: "Handle FAQs, reduce no-shows, and book appointments without tying up staff.", tags: "CHATBOT + WEBSITE" },
  { emoji: "💰", title: "Finance & Insurance", desc: "Qualify leads and book consultations with full compliance guardrails.", tags: "CHATBOT + OUTREACH" },
  { emoji: "🎓", title: "Education & Studios", desc: "Handle enrollment questions and book free trials automatically.", tags: "CHATBOT + WEBSITE" },
  { emoji: "✈️", title: "Travel & Hospitality", desc: "Capture direct bookings and answer guest questions via WhatsApp.", tags: "CHATBOT + SOCIAL" },
];

const faqs = [
  { q: "Do I need any technical knowledge to use this?", a: "Not at all. We handle 100% of the technical setup. If you can use email, you can manage the final product." },
  { q: "How long does setup take?", a: "Most AI chatbot setups are live within 24–48 hours. Websites take 3–5 business days." },
  { q: "What platform do you use for chatbots?", a: "We primarily use advanced AI models powered by Claude (Anthropic). It's the best-rated system for small businesses." },
  { q: "Do I have to sign a contract?", a: "No contracts. Ever. The setup fee is a one-time payment with optional monthly maintenance." },
];

export default function HomePage() {
  const [showContact, setShowContact] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-serif">
      
      {/* ── NAV ── */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#e8480a] rounded-full animate-pulse" />
          <span className="font-display font-extrabold tracking-tighter text-xl text-black">Automating with AI</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-500 font-display">
          <a href="#services" className="hover:text-black transition-colors">Services</a>
          <a href="#sectors" className="hover:text-black transition-colors">Industries</a>
          <a href="#pricing" className="hover:text-black transition-colors">Pricing</a>
        </div>
        <button
          onClick={() => setShowContact(true)}
          className="bg-black text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#e8480a] transition-all font-display"
        >
          Get Started
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-48 pb-20 px-6 bg-[#f7f6f2] border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mono text-[11px] uppercase tracking-[0.3em] font-bold text-[#e8480a] mb-6">
              Done-for-you AI services for local business
            </p>
            <h1 className="text-6xl md:text-[84px] font-display font-black leading-[0.95] mb-8 text-black">
              Put Your <br />
              Business on <br />
              <span className="text-[#e8480a]">Autopilot.</span>
            </h1>
            <p className="max-w-xl text-slate-500 text-lg md:text-xl leading-relaxed mb-12">
              AI chatbots, professional websites, automated outreach, and social media — all set up for you. Results in days, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowContact(true)}
                className="bg-[#e8480a] text-white px-10 py-4 rounded-lg font-display font-extrabold uppercase text-sm shadow-xl hover:bg-[#c93d07] transition-all"
              >
                Free Consultation
              </button>
              <a href="#services" className="flex items-center gap-2 px-6 py-4 font-display font-bold text-black border-b-2 border-black hover:text-[#e8480a] hover:border-[#e8480a] transition-all">
                See our services →
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden md:block bg-white p-10 rounded-2xl border border-slate-200 shadow-2xl"
          >
            <p className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 mb-8">What AI does for you</p>
            <div className="space-y-6">
              {[
                { icon: "🤖", val: "70%", lbl: "Questions answered automatically" },
                { icon: "📅", val: "24/7", lbl: "Availability while you sleep" },
                { icon: "💰", val: "30%", lbl: "Reduction in support costs" },
                { icon: "📈", val: "340%", lbl: "Average first-year ROI" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-6 p-4 bg-[#f7f6f2] rounded-xl border border-slate-100">
                  <span className="text-3xl">{s.icon}</span>
                  <div>
                    <div className="font-display font-black text-2xl leading-none">{s.val}</div>
                    <div className="text-xs text-slate-500 mt-1">{s.lbl}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="bg-black py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array(2).fill([
            "AI Chatbot Setup", "Website Creation", "Automated Outreach", "Social Media AI", "Lead Generation", "24/7 Support"
          ]).flat().map((t, i) => (
            <div key={i} className="flex items-center gap-4 px-12">
              <span className="mono text-[11px] text-white/60 font-bold uppercase tracking-widest">{t}</span>
              <div className="w-1 h-1 bg-[#e8480a] rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* ── TRUST BAR ── */}
      <section className="py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-12">
          <p className="font-display font-extrabold uppercase tracking-widest text-slate-400">Trusted Results</p>
          <div className="flex flex-wrap gap-16">
            {[
              { n: "$300", l: "Starting Price" },
              { n: "48hrs", l: "Avg. Setup Time" },
              { n: "6+", l: "Industries Served" },
              { n: "0", l: "Tech Skills Required" },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-display font-black text-4xl">{s.n}</div>
                <div className="text-sm text-slate-400 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="tag mb-4">What we do</div>
            <h2 className="text-4xl md:text-6xl font-display font-black mb-6">Four Ways AI Grows Your Business</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Everything is set up for you. You don't need to understand the technology — you just see the results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                whileHover={{ backgroundColor: '#f7f6f2' }}
                className="bg-white p-12 group relative transition-colors"
              >
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#e8480a] group-hover:w-full transition-all duration-300" />
                <div className="mono text-xs text-slate-400 mb-8">0{i + 1}</div>
                <div className="text-4xl mb-6">{svc.icon}</div>
                <h3 className="text-2xl font-display font-black mb-4">{svc.label}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">{svc.desc}</p>
                <ul className="space-y-3 mb-10">
                  {svc.bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-semibold">
                      <CheckCircle className="w-4 h-4 text-green-600" /> {b}
                    </li>
                  ))}
                </ul>
                <a href={svc.href} className="inline-flex items-center gap-2 font-display font-extrabold text-xs uppercase tracking-widest text-[#e8480a] hover:gap-4 transition-all">
                  {svc.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" className="py-32 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="tag !text-white/40 before:!bg-white/40 mb-4">The Process</div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6">Up and Running in 4 Steps</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { n: "1", t: "Consultation", d: "We learn about your business and goals." },
              { n: "2", t: "We Build It", d: "Our team sets up your system within 48 hours." },
              { n: "3", t: "You Approve", d: "We adjust everything until you're happy." },
              { n: "4", t: "Go Live", d: "Your AI launches and starts working 24/7." },
            ].map((s, i) => (
              <div key={i} className="relative">
                <div className="w-16 h-16 rounded-full border-2 border-white/10 flex items-center justify-center mx-auto mb-8 font-display font-black text-xl hover:bg-[#e8480a] hover:border-[#e8480a] transition-all cursor-default">
                  {s.n}
                </div>
                <h3 className="text-lg font-display font-black mb-3">{s.t}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORS ── */}
      <section id="sectors" className="py-32 px-6 bg-[#f7f6f2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="tag mb-4">Industries</div>
            <h2 className="text-4xl md:text-6xl font-display font-black mb-6">Built for Every Business</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {sectors.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 hover:border-[#e8480a] transition-all transform hover:-translate-y-1">
                <div className="text-4xl mb-6">{s.emoji}</div>
                <h3 className="text-xl font-display font-black mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{s.desc}</p>
                <div className="mono text-[10px] text-[#e8480a] font-bold tracking-widest">{s.tags}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="tag mb-4">FAQ</div>
            <h2 className="text-4xl font-display font-black">Common Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-slate-200 pb-6">
                <h3 className="text-xl font-display font-bold mb-3">{f.q}</h3>
                <p className="text-slate-500 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 px-6 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,72,10,0.15)_0%,transparent_70%)]" />
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-8 leading-tight">Ready to Automate <br />Your Business?</h2>
          <button onClick={() => setShowContact(true)} className="bg-[#e8480a] text-white px-12 py-5 rounded-lg font-display font-extrabold uppercase text-sm hover:scale-105 transition-all shadow-2xl">
            Book a Free Consultation →
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-20 px-6 bg-[#f7f6f2] border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-xs">
            <div className="font-display font-black text-xl mb-6">Automating with AI</div>
            <p className="text-slate-400 text-sm leading-relaxed">Done-for-you AI services for local businesses. Setup in days, not months.</p>
          </div>
          <div className="flex gap-20">
            <div>
              <div className="font-display font-bold text-xs uppercase tracking-widest mb-6">Company</div>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#services">Services</a></li>
                <li><a href="#how">Process</a></li>
                <li><a href="/monetize">Monetization</a></li>
              </ul>
            </div>
            <div>
              <div className="font-display font-bold text-xs uppercase tracking-widest mb-6">Contact</div>
              <ul className="space-y-3 text-sm text-slate-500 font-bold">
                <li>hello@automatingwithai.com</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal (Original Logic Kept) */}
      <AnimatePresence>
        {showContact && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowContact(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative w-full max-w-lg bg-white p-10 rounded-2xl shadow-2xl border border-slate-200">
              <button onClick={() => setShowContact(false)} className="absolute top-6 right-6 text-slate-400 hover:text-black">✕</button>
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-display font-black mb-2">Message Sent!</h3>
                  <p className="text-slate-500">We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-display font-black mb-8">Get Started</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input required placeholder="Your Name" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#e8480a] transition-all" />
                    <input required type="email" placeholder="Email Address" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#e8480a] transition-all" />
                    <select required className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#e8480a] transition-all text-slate-400">
                      <option value="">What do you need?</option>
                      <option value="chatbot">AI Chatbot Setup</option>
                      <option value="website">Website Build</option>
                      <option value="google">Google Maps / SEO</option>
                      <option value="monetize">Monetization</option>
                    </select>
                    <textarea required placeholder="Brief description of your business..." rows={3} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#e8480a] transition-all" />
                    <button type="submit" className="w-full bg-black text-white font-display font-extrabold py-5 rounded-lg uppercase tracking-widest hover:bg-[#e8480a] transition-all">Send Message</button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .font-display { font-family: var(--font-syne), sans-serif; }
        .font-serif { font-family: var(--font-lora), serif; }
        .mono { font-family: var(--font-jetbrains-mono), monospace; }
      `}</style>

    </div>
  );
}
