"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Lock, Cpu, ArrowLeft, CheckCircle, Download } from 'lucide-react';

interface Product {
    id: string;
    name: string;
    type: string;
    price: number;
    status: string;
}

export default function ShopPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load products from catalog
        fetch('/shop_catalog.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products.filter((p: Product) => p.status === 'active'));
                setLoading(false);
            })
            .catch(() => {
                // Fallback to static products
                setProducts([
                    { id: 'prompt_pack', name: 'Master AI Prompt Pack', type: 'prompt_pack', price: 49, status: 'active' },
                    { id: 'blueprint', name: 'Agency Blueprint Course', type: 'blueprint', price: 299, status: 'coming_soon' }
                ]);
                setLoading(false);
            });
    }, []);

    const getProductDescription = (type: string) => {
        if (type === 'prompt_pack') return '500+ High-Conversion Prompts for Marketing, Growth, and Automation.';
        if (type === 'blueprint') return 'The exact architecture of Automating with AI.';
        return 'Premium AI asset to accelerate your automation journey.';
    };

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

                {loading ? (
                    <div className="text-center text-slate-400">
                        <div className="animate-pulse">Loading products...</div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`glass p-10 rounded-[48px] ${product.status === 'active' ? 'border-purple-500/20' : 'border-gray-500/20 opacity-80'} relative overflow-hidden group`}
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    {product.status === 'active' ? (
                                        <ShoppingBag className="w-32 h-32 text-purple-400" />
                                    ) : (
                                        <Lock className="w-32 h-32 text-gray-400" />
                                    )}
                                </div>
                                <div className={`w-12 h-12 ${product.status === 'active' ? 'bg-purple-500/20 text-purple-400' : 'bg-gray-500/20 text-gray-400'} rounded-2xl flex items-center justify-center font-bold mb-6`}>
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <h3 className={`text-3xl font-bold mb-2 ${product.status === 'active' ? 'text-white' : 'text-gray-400'}`}>
                                    {product.name}
                                </h3>
                                <p className={`${product.status === 'active' ? 'text-slate-400' : 'text-slate-500'} text-sm mb-8`}>
                                    {getProductDescription(product.type)}
                                </p>

                                <div className="space-y-3 mb-8">
                                    {product.status === 'active' ? (
                                        <>
                                            <div className="flex items-center gap-2 text-xs text-slate-300">
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                                Auto-Generated & QA-Verified
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-slate-300">
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                                Instant Download (HTML + PDF)
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-slate-300">
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                                Copy-Paste Ready
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                                <CheckCircle className="w-4 h-4 text-slate-600" />
                                                Multi-Channel Strategy
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                                <CheckCircle className="w-4 h-4 text-slate-600" />
                                                Agentic Workflow Design
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                                <CheckCircle className="w-4 h-4 text-slate-600" />
                                                Scalable Operations
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className="flex items-end justify-between">
                                    <div className={`text-3xl font-black ${product.status === 'active' ? 'text-white' : 'text-slate-500'}`}>
                                        ${product.price}
                                    </div>
                                    {product.status === 'active' ? (
                                        <a
                                            href={`/shop_products/${product.id}.html`}
                                            target="_blank"
                                            className="bg-purple-500 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs hover:bg-purple-400 transition-colors flex items-center gap-2"
                                        >
                                            <Download className="w-4 h-4" />
                                            Download
                                        </a>
                                    ) : (
                                        <button disabled className="bg-gray-800 text-gray-500 px-8 py-3 rounded-2xl font-black uppercase text-xs cursor-not-allowed">
                                            Coming Soon
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

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
