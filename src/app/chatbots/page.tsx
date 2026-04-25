'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, CheckCircle, Clock, Zap, ArrowLeft, MessageSquare } from 'lucide-react';

export default function ChatbotsPage() {
  const benefits = [
    {
      title: "24/7 Availability",
      desc: "Your customers expect answers instantly. AI never sleeps, never takes breaks, and never misses a lead.",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Instant Scaling",
      desc: "Handle 1 or 1,000 customers simultaneously without hiring extra staff or increasing overhead.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Qualified Leads",
      desc: "The AI qualifies visitors by asking the right questions before booking them directly into your calendar.",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

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
          {/* Hero */}
          <section className="text-center mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mono text-[11px] uppercase tracking-[0.3em] font-bold text-[#e8480a] mb-6"
            >
              Advanced AI Engagement
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight text-black"
            >
              An AI Agent Trained <br />
              <span className="text-[#e8480a]">On Your Business.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed"
            >
              We don't build generic bots. We build intelligent agents that learn your menu, 
              pricing, services, and policies to answer customers like a pro.
            </motion.p>
          </section>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 mb-40">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 hover:bg-[#f7f6f2] transition-all"
              >
                <div className="text-[#e8480a] mb-8">{b.icon}</div>
                <h3 className="text-2xl font-display font-black mb-4">{b.title}</h3>
                <p className="text-slate-500 leading-relaxed font-serif">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Feature Showcase */}
          <section className="grid md:grid-cols-2 gap-20 items-center mb-40">
            <div className="bg-[#f7f6f2] p-12 rounded-2xl border border-slate-200">
               <div className="flex gap-3 mb-6">
                 <div className="w-10 h-10 rounded-full bg-[#e8480a] flex items-center justify-center text-white">🤖</div>
                 <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-200 text-sm shadow-sm">
                    Hello! Do you have any gluten-free options?
                 </div>
               </div>
               <div className="flex gap-3 flex-row-reverse mb-6">
                 <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">⚡</div>
                 <div className="bg-black text-white p-4 rounded-2xl rounded-tr-none text-sm shadow-xl">
                    Yes! We have gluten-free crusts for all our pizzas, and our seasonal salad is also GF. Would you like to see the menu?
                 </div>
               </div>
               <div className="flex gap-3">
                 <div className="w-10 h-10 rounded-full bg-[#e8480a] flex items-center justify-center text-white">🤖</div>
                 <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-200 text-sm shadow-sm">
                    Perfect. Can I book a table for two at 7pm tonight?
                 </div>
               </div>
            </div>
            <div>
              <div className="tag mb-6">Live Demo</div>
              <h2 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight">Conversation that converts.</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 font-serif">
                Our bots aren't just for FAQs. They are designed to drive action. 
                Whether it's booking a table, capturing an email, or directing a customer to a specific product, 
                every interaction is an opportunity for growth.
              </p>
              <ul className="space-y-4">
                {[
                  "Natural Language Processing (NLP)",
                  "Custom Knowledge Base Training",
                  "Direct Integration with Your CRM",
                  "Multi-platform (Web + Instagram + FB)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-semibold">
                    <CheckCircle className="w-5 h-5 text-green-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Pricing/CTA */}
          <section className="text-center bg-black text-white p-20 rounded-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,72,10,0.15)_0%,transparent_70%)]" />
             <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-display font-black mb-8">Ready for 24/7 Coverage?</h2>
                <p className="text-white/60 mb-12 max-w-xl mx-auto font-serif text-lg">
                  Starting at just $300 for a one-time setup. No tech skills needed. 
                  We build it, you approve it, and then it goes to work.
                </p>
                <button className="bg-[#e8480a] text-white px-12 py-5 rounded-lg font-display font-extrabold uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
                  Get My AI Agent →
                </button>
             </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-200 bg-[#f7f6f2] text-center">
        <p className="mono text-[10px] text-slate-400 uppercase tracking-widest font-bold">© 2026 Automating with AI. All rights reserved.</p>
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
