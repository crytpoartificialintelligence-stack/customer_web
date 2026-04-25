'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Cpu, Linkedin, ArrowRight, CheckCircle, Download, ArrowLeft } from 'lucide-react';

export default function LinkedinPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-serif">
      
      {/* ── NAV ── */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-display font-bold text-sm uppercase tracking-widest">Back to Home</span>
        </a>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#e8480a] rounded-full" />
          <span className="font-display font-extrabold tracking-tighter text-xl text-black">Automating with AI</span>
        </div>
        <div className="w-24" />
      </nav>

      <main className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <section className="text-center mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mono text-[11px] uppercase tracking-[0.3em] font-bold text-[#e8480a] mb-6"
            >
              High-Authority Network
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-5xl md:text-8xl font-display font-black mb-8 leading-tight text-black"
            >
              Transform Audience <br />
              Into <span className="text-[#e8480a]">Revenue.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed"
            >
              We leverage our established LinkedIn network of 50,000+ AI enthusiasts 
              to promote your SaaS, courses, and digital products directly to decision-makers.
            </motion.p>
          </section>

          {/* Product Section */}
          <div className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 mb-40">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Sponsored Posts",
                desc: "High-authority content that introduces your product to our community actively seeking AI solutions."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Launch Sequence",
                desc: "Multi-post campaigns designed to drive awareness and conversions for new AI tools."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Traffic Amplification",
                desc: "Get your brand in front of thousands of founders through our established distribution channels."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 hover:bg-[#f7f6f2] transition-all group"
              >
                <div className="text-[#e8480a] mb-8">{item.icon}</div>
                <h3 className="text-2xl font-display font-black mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-serif">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Rate Card & Lead Magnet */}
          <div className="grid md:grid-cols-2 gap-12 mb-40">
            {/* Rate Card */}
            <div className="bg-[#f7f6f2] p-12 rounded-2xl border border-slate-200">
              <div className="tag mb-6">2026 Rate Card</div>
              <h2 className="text-4xl font-display font-black mb-8 leading-tight">Partner Tiers</h2>
              <div className="space-y-4 mb-10">
                {[
                  { name: "Single Pulse", price: "$1,500", desc: "1 High-Impact Post" },
                  { name: "Launch Sequence", price: "$3,500", desc: "3-Post Growth Campaign", popular: true },
                  { name: "Strategic Partner", price: "$10k/mo", desc: "Retainer & Integration" }
                ].map((tier, i) => (
                  <div key={i} className={`p-6 rounded-xl border flex items-center justify-between transition-all ${tier.popular ? 'bg-white border-[#e8480a] shadow-lg' : 'bg-white/50 border-slate-200'}`}>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-black text-black text-sm uppercase">{tier.name}</span>
                        {tier.popular && <span className="px-2 py-0.5 rounded-full bg-[#e8480a] text-[8px] text-white font-black uppercase tracking-tighter">Best Value</span>}
                      </div>
                      <p className="mono text-[10px] text-slate-500 font-bold uppercase mt-1">{tier.desc}</p>
                    </div>
                    <div className="text-2xl font-display font-black text-black">{tier.price}</div>
                  </div>
                ))}
              </div>
              <button className="w-full bg-black text-white py-5 rounded-lg font-display font-extrabold uppercase tracking-widest hover:bg-[#e8480a] transition-all">
                Request Rate Card PDF
              </button>
            </div>

            {/* Lead Magnet */}
            <div className="bg-black text-white p-12 rounded-2xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#e8480a]/10 blur-[80px] -mr-32 -mt-32 rounded-full" />
              <div className="relative z-10">
                <div className="tag !text-white/40 before:!bg-white/40 mb-6">Free Resource</div>
                <h2 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight">The Sovereign <br />Blueprint Duo</h2>
                <p className="text-white/60 mb-10 text-lg leading-relaxed font-serif">
                  Get our definitive 2026 AI Roadmap and the "System Scaling" guide used by 
                  top SaaS founders to automate their high-ticket sales.
                </p>
              </div>
              <button className="w-full bg-white text-black py-5 rounded-lg font-display font-extrabold uppercase tracking-widest hover:bg-[#e8480a] hover:text-white transition-all flex items-center justify-center gap-3">
                <Download className="w-5 h-5" /> Download The Blueprint
              </button>
            </div>
          </div>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-10 leading-tight">Ready to <br />Amplify Your Reach?</h2>
            <button className="bg-black text-white px-12 py-5 rounded-lg font-display font-extrabold uppercase tracking-widest hover:bg-[#e8480a] transition-all shadow-2xl">
              Partner With Us →
            </button>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-200 bg-[#f7f6f2] text-center">
        <p className="mono text-[10px] text-slate-400 uppercase tracking-widest font-bold">© 2026 Automating with AI | Network Amplification</p>
      </footer>

      <style jsx global>{`
        .font-display { font-family: var(--font-syne), sans-serif; }
        .font-serif { font-family: var(--font-lora), serif; }
        .mono { font-family: var(--font-jetbrains-mono), monospace; }
        .tag {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #e8480a;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .tag::before { content: ''; width: 24px; height: 1px; background: #e8480a; }
      `}</style>
    </div>
  );
}
