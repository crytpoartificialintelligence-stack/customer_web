"use client";

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Target, Cpu, Linkedin, ArrowRight, CheckCircle, X, Download, ShoppingBag, Lock } from 'lucide-react';

export default function LandingPage() {
  const [showSuccess, setShowSuccess] = React.useState(false);
  const executives = [
    { name: "G.G. Lance Akrey", role: "Founder & Strategic Director", image: "/founder_portrait.png", bio: "The human architect behind the network, steering the vision and ensuring high-authority outcomes for every partner." },
    { name: "Content Unit-01", role: "Master Formula Engine", image: "/ai_content_robot.png", bio: "Trained on millions of viral data points to generate high-authority content with top-tier engagement formula." },
    { name: "Scout Unit-02", role: "Lead Intelligence", image: "/ai_scout_robot.png", bio: "Identifies high-value sponsorship opportunities while scanning millions of data points 24/7." }
  ];

  return (
    <div className="min-h-screen relative">
      <div className="hero-glow" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 nav-blur px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00f2fe] to-[#4facfe] flex items-center justify-center">
            <Cpu className="text-black w-5 h-5" />
          </div>
          <span className="font-bold tracking-tighter text-xl">Automating with AI</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#product" className="hover:text-white transition-colors">Product</a>
          <a href="#board" className="hover:text-white transition-colors">Executive Board</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href="#contact" className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-cyan-400 transition-all">
          Join the Future
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 grayscale-[0.5] contrast-125">
          <Image
            src="/hero.png"
            alt="Neural Network"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000212] via-transparent to-[#000212]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-[10px] uppercase tracking-[0.3em] font-bold text-cyan-400 mb-6">
              A GLOBAL COMMUNITY OF AI ENTHUSIASTS AT YOUR COMMAND
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9]">
              <span className="block italic">TRANSFORM AUDIENCE INTO</span>
              <span className="gradient-text">SOVEREIGN SYSTEMS</span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
              We leverage our high-authority LinkedIn network to architect the <strong>Sovereign Systems</strong> that drive your courses, SaaS, and AI products to our engaged community.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="w-full md:w-auto bg-[#4facfe] hover:bg-[#00f2fe] text-black px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 group transition-all">
                Promote Your Product
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="w-full md:w-auto glass hover:bg-white/5 text-white px-10 py-4 rounded-full font-bold transition-all">
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-24 px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="text-cyan-400" />,
                title: "Sponsored Posts",
                desc: "High-authority LinkedIn content that introduces your AI product to our engaged community actively seeking solutions."
              },
              {
                icon: <Target className="text-blue-400" />,
                title: "Product Launches",
                desc: "Multi-post campaigns designed to drive awareness and traffic for your courses, SaaS tools, and AI products."
              },
              {
                icon: <Shield className="text-purple-400" />,
                title: "Traffic Amplification",
                desc: "Get your brand in front of decision-makers through our established LinkedIn presence and content distribution."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[40px] hover:border-white/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Rate Card & Shop Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-900/5 skew-y-3 transform origin-bottom-left -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Rate Card Download */}
            <div className="glass p-10 rounded-[48px] border-cyan-500/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Download className="w-32 h-32 text-cyan-400" />
              </div>
              <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-4 block">For Brands & Agile Teams</span>
              <h2 className="text-4xl font-black mb-6">Sponsorship Rate Card</h2>
              <p className="text-slate-400 mb-8 max-w-md">
                Download our official 2026 pricing guide. Transparency is our policy. See exactly what you get for each tier.
              </p>
              <button className="flex items-center gap-3 bg-cyan-500 text-black px-8 py-4 rounded-2xl font-black uppercase text-xs hover:scale-105 transition-transform">
                <Download className="w-4 h-4" /> Download PDF (v2.4)
              </button>
              <div className="mt-8 flex items-center gap-4 text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                <span><CheckCircle className="w-3 h-3 inline mr-1 text-green-500" /> Verified Audience</span>
                <span><CheckCircle className="w-3 h-3 inline mr-1 text-green-500" /> No Hidden Fees</span>
              </div>
            </div>

            {/* Digital Shop Preview */}
            <div className="glass p-10 rounded-[48px] border-purple-500/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShoppingBag className="w-32 h-32 text-purple-400" />
              </div>
              <span className="text-purple-400 font-bold uppercase tracking-widest text-xs mb-4 block">Instant Access Assets</span>
              <h2 className="text-4xl font-black mb-6">The AI Shop</h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 font-bold">01</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-white">Master AI Prompt Pack</h4>
                    <p className="text-[10px] text-slate-400">500+ High-Conversion Prompts</p>
                  </div>
                  <div className="text-white font-mono font-bold">$49</div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer opacity-60">
                  <div className="w-10 h-10 bg-gray-500/20 rounded-xl flex items-center justify-center text-gray-400 md:ml-0 ml-0 font-bold"><Lock className="w-4 h-4" /></div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-gray-400">Agency Blueprint Course</h4>
                    <p className="text-[10px] text-slate-500">Coming Q2 2026</p>
                  </div>
                  <div className="text-gray-500 font-mono font-bold">$299</div>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-3 bg-purple-500 text-white px-8 py-4 rounded-2xl font-black uppercase text-xs hover:bg-purple-400 transition-colors">
                <ShoppingBag className="w-4 h-4" /> Visit Store
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Executive Board Section */}
      <section id="board" className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">THE STRATEGIC PILLARS</h2>
          <p className="text-slate-400">Our success is driven by three distinct AI-driven strategic viewpoints.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {executives.map((exec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="relative h-[450px] rounded-[48px] overflow-hidden glass border-white/5 group-hover:border-white/20 transition-all mb-6">
                <Image
                  src={exec.image}
                  alt={exec.name}
                  fill
                  className="object-cover grayscale-[0.7] group-hover:grayscale-0 contrast-125 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-1">{exec.role}</div>
                  <div className="text-2xl font-bold text-white">{exec.name}</div>
                </div>
              </div>
              <p className="px-4 text-slate-400 text-sm leading-relaxed italic">
                "{exec.bio}"
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase">How It Works</h2>
          <p className="text-slate-400">A simple 3-step process to amplify your brand across our network.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { step: "01", title: "Reach Out", desc: "Fill out our contact form with your product details and goals." },
            { step: "02", title: "Strategy Call", desc: "We'll discuss your brand and create a custom amplification plan." },
            { step: "03", title: "Launch", desc: "Your brand goes live across our global AI professional network." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-[40px] text-center"
            >
              <div className="text-5xl font-black text-cyan-500/30 mb-4">{item.step}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-black px-10 py-4 rounded-full font-bold hover:opacity-90 transition-all inline-block">
            Start the Conversation
          </a>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 px-6 bg-cyan-900/5">
        <div className="max-w-4xl mx-auto glass p-12 rounded-[60px] border-white/5">
          <h2 className="text-2xl font-black mb-8 flex items-center gap-4">
            <Target className="text-cyan-400" />
            2026 AUDIENCE ROADMAP
          </h2>
          <div className="space-y-8">
            {[
              { q: "Q1", title: "Affiliate Engine", desc: "Automated tracking for our top 20+ AI tool recommendations." },
              { q: "Q2", title: "Course Launchpad", desc: "Proprietary funnel architecture for high-ticket AI education products." },
              { q: "Q3", title: "Sponsor Hub", desc: "A self-service portal for brands to manage their LinkedIn amplification." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-cyan-500 font-black text-xl pt-1">{item.q}</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto glass p-12 rounded-[60px] border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">Partner with the Network</h2>
            <p className="text-slate-400">Apply for a sponsorship or course launch campaign. Lance and the AI Board will review your application and respond personally.</p>
          </div>

          <form className="space-y-6" onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            try {
              const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
              });

              if (res.ok) {
                setShowSuccess(true);
                form.reset();
              } else {
                alert('System Error: Could not process request. Please try again later.');
              }
            } catch (err) {
              alert('Network Error: Please check your connection.');
            }
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input required name="name" type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-400 transition-all" />
              <input required name="email" type="email" placeholder="Business Email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-400 transition-all" />
            </div>
            <input required name="company" type="text" placeholder="Company / Product Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-400 transition-all" />
            <textarea required name="message" rows={4} placeholder="How can we amplify your brand?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-400 transition-all"></textarea>

            <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-black py-5 rounded-3xl hover:opacity-90 transition-all shadow-[0_10px_40px_rgba(6,182,212,0.3)]">
              Submit Launch Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center">
              <Cpu className="text-white w-4 h-4" />
            </div>
            <span className="font-bold tracking-tighter text-sm">Automating with AI</span>
          </div>
          <p className="text-slate-500 text-[10px] max-w-2xl leading-relaxed uppercase tracking-wider">
            Disclaimer: All reach and engagement metrics are based on aggregate historical performance across our LinkedIn network.
            Automating with AI makes no specific performance guarantees or conversion claims for individual products.
            This site is operated by Automating with AI. Results may vary.
            <br /><br />
            © 2026 Automating with AI. All Rights Reserved.
          </p>
          <div className="flex gap-6 mt-4 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
            <a href="/privacy" className="hover:text-cyan-400">Privacy Policy</a>
            <a href="/terms" className="hover:text-cyan-400">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccess(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-sm glass p-10 rounded-[48px] border border-cyan-400/20 text-center shadow-[0_0_100px_rgba(6,182,212,0.1)]"
            >
              <div className="w-20 h-20 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-8 text-cyan-400">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Request Received</h2>
              <p className="text-slate-400 leading-relaxed mb-8 text-sm italic">
                "Your launch request has been submitted to our executive board. Our agents will contact you shortly to discuss board alignment."
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="w-full py-4 bg-white text-black font-black uppercase text-xs rounded-2xl hover:scale-[1.02] transition-all"
              >
                Acknowledge
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
