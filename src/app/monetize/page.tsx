'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, DollarSign, TrendingUp, Target, ArrowLeft } from 'lucide-react';

export default function MonetizationPage() {
  const strategies = [
    {
      title: "Google AdSense Integration",
      description: "Generate passive income by displaying non-intrusive, relevant ads to your visitors. We handle the placement and optimization.",
      icon: "💰",
      steps: [
        "Create a Google AdSense account",
        "Verify your site ownership",
        "Insert the Auto-Ads script in your layout",
        "Customize ad placements for better UX"
      ]
    },
    {
      title: "Affiliate Automation",
      description: "Automate the insertion of affiliate links into your content to earn commissions on products your customers already need.",
      icon: "🔗",
      steps: [
        "Identify high-converting partner products",
        "Set up auto-linking for key terms",
        "Track clicks and conversions",
        "Optimize based on performance data"
      ]
    },
    {
      title: "Premium Content Tiers",
      description: "Lock high-value automation insights behind a paywall or lead-capture form to build recurring revenue.",
      icon: "💎",
      steps: [
        "Segment your 'Free' vs 'Pro' content",
        "Integrate Stripe for easy payments",
        "Automate member access and emails",
        "Analyze churn and retention"
      ]
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
        <div className="w-24" /> {/* Spacer */}
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
              Passive Income Systems
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight text-black"
            >
              Turn Traffic into <br />
              <span className="text-[#e8480a]">Recurring Revenue.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed"
            >
              Your website shouldn't just be an expense. We help you implement smart, 
              automated monetization strategies that generate revenue while preserving user experience.
            </motion.p>
          </section>

          {/* Strategies Grid */}
          <div className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 mb-40">
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-12 hover:bg-[#f7f6f2] transition-all group"
              >
                <div className="text-5xl mb-8">{strategy.icon}</div>
                <h3 className="text-2xl font-display font-black mb-4">{strategy.title}</h3>
                <p className="text-slate-500 mb-10 leading-relaxed">
                  {strategy.description}
                </p>
                <div className="space-y-4">
                  <p className="mono text-[10px] font-bold text-[#e8480a] uppercase tracking-widest mb-6">Process</p>
                  {strategy.steps.map((step, sIndex) => (
                    <div key={sIndex} className="flex items-start gap-3 text-sm font-semibold">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#e8480a] mt-2 shrink-0" />
                      {step}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Google Ads Guide Section */}
          <section className="p-12 md:p-20 rounded-2xl bg-black text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#e8480a]/20 blur-[100px] -mr-48 -mt-48 rounded-full" />
            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="tag !text-white/40 before:!bg-white/40 mb-6">Setup Guide</div>
                <h2 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight">How to add Google Ads to your site</h2>
                <p className="text-white/60 mb-10 text-lg leading-relaxed font-serif">
                  Google AdSense is the most reliable way to start monetizing. Once your site has consistent traffic, 
                  you can apply to show ads. Here is how we integrate it for you:
                </p>
                <ul className="space-y-6">
                  {[
                    "Inject the AdSense script into the Global Header",
                    "Enable 'Auto Ads' for AI-optimized placement",
                    "Add an 'ads.txt' file for publisher verification"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center font-display font-black group-hover:bg-[#e8480a] group-hover:border-[#e8480a] transition-all">
                        {i + 1}
                      </div>
                      <span className="font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 p-12 rounded-2xl text-center backdrop-blur-sm">
                  <div className="text-6xl mb-6">📈</div>
                  <h4 className="text-2xl font-display font-black mb-4">Automated Optimization</h4>
                  <p className="text-white/40 font-serif italic leading-relaxed">
                    "Our bots monitor Click-Through Rates (CTR) and adjust ad density daily to maximize your earnings without annoying your visitors."
                  </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-40 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-10">Start Earning Today</h2>
            <button className="bg-black text-white px-12 py-5 rounded-lg font-display font-extrabold uppercase tracking-widest hover:bg-[#e8480a] transition-all shadow-2xl">
              Audit My Website Potential
            </button>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-200 bg-[#f7f6f2] text-center">
        <p className="mono text-[10px] text-slate-400 uppercase tracking-widest font-bold">© 2026 Automating with AI. Built for profit.</p>
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
