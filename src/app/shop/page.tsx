"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Lock, Cpu, ArrowLeft, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function ShopPage() {
    return (
        <div className="min-h-screen bg-[#000212] py-24 px-6 relative overflow-hidden">
            <div className="hero-glow opacity-30" />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 nav-blur px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00f2fe] to-[#4facfe] flex items-center justify-center">
                        <Cpu className="text-black w-5 h-5" />
                    </div>
                    <span className="font-bold tracking-tighter text-xl">Automating with AI</span>
                </div>
                <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
                    <a href="/" className="hover:text-white transition-colors flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </a>
                </div>
            </nav>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-purple-400 font-bold uppercase tracking-widest text-xs mb-4 block">Sovereign Assets</span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">THE AI SHOP</h1>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Professional-grade prompts and blueprints to accelerate your AI adoption.
                            Designed by our agents, verified by G.G. Lance Akrey.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Master AI Prompt Pack */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="glass p-10 rounded-[48px] border-purple-500/20 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <ShoppingBag className="w-32 h-32 text-purple-400" />
                        </div>
                        <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400 font-bold mb-6">01</div>
                        <h3 className="text-3xl font-bold mb-2 text-white">Master AI Prompt Pack</h3>
                        <p className="text-slate-400 text-sm mb-8">500+ High-Conversion Prompts for Marketing, Growth, and Automation.</p>

                        <div className="space-y-3 mb-8">
                            {['Auto-Generated & QA-Verified', 'Native GPT-4o Support', 'Copy-Paste Ready'].map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    {feature}
                                </div>
                            ))}
                        </div>

                        <div className="flex items-end justify-between">
                            <div className="text-3xl font-black text-white">$49</div>
                            <button className="bg-purple-500 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs hover:bg-purple-400 transition-colors">
                                Buy Now
                            </button>
                        </div>
                    </motion.div>

                    {/* Agency Blueprint */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass p-10 rounded-[48px] border-gray-500/20 relative overflow-hidden group opacity-80"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Lock className="w-32 h-32 text-gray-400" />
                        </div>
                        <div className="w-12 h-12 bg-gray-500/20 rounded-2xl flex items-center justify-center text-gray-400 font-bold mb-6">02</div>
                        <h3 className="text-3xl font-bold mb-2 text-gray-400">Agency Blueprint Course</h3>
                        <p className="text-slate-500 text-sm mb-8">Coming Q2 2026. The exact architecture of Automating with AI.</p>

                        <div className="space-y-3 mb-8">
                            {['Multi-Channel Strategy', 'Agentic Workflow Design', 'Scalable Operations'].map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                                    <CheckCircle className="w-4 h-4 text-slate-600" />
                                    {feature}
                                </div>
                            ))}
                        </div>

                        <div className="flex items-end justify-between">
                            <div className="text-3xl font-black text-slate-500">$299</div>
                            <button disabled className="bg-gray-800 text-gray-500 px-8 py-3 rounded-2xl font-black uppercase text-xs cursor-not-allowed">
                                Waitlist
                            </button>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-20 glass p-12 rounded-[60px] border-white/5 text-center">
                    <h2 className="text-2xl font-black mb-4">Sovereign Systems Support</h2>
                    <p className="text-slate-400 mb-8">Need custom prompts or a private agency audit? Our agents are standing by.</p>
                    <a href="/#contact" className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-cyan-400 transition-all inline-block">
                        Contact the Board
                    </a>
                </div>
            </div>
        </div>
    );
}
