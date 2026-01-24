"use client";

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[#000212] text-slate-300 p-8 md:p-24 font-sans selection:bg-cyan-500/30">
            <div className="max-w-3xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors mb-12 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Hub
                </Link>

                <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Privacy Policy</h1>
                <p className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-12">Last Updated: January 2026</p>

                <div className="space-y-12 leading-relaxed text-lg text-slate-400">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">1. Information Collection</h2>
                        <p>
                            Automating with AI collects minimal personal data necessary to facilitate sponsorship inquiries and product launches.
                            This includes name, email, and company details provided via our contact forms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">2. Use of Data</h2>
                        <p>
                            We use your data strictly to:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Process sponsorship and launch requests.</li>
                            <li>Alert our internal management board via secure communication channels (Telegram).</li>
                            <li>Improve our AI-driven lead qualification systems.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">3. AI Processing</h2>
                        <p>
                            By submitting a request, you acknowledge that your message content may be processed by third-party AI systems (including Google Gemini)
                            for the purpose of lead qualification and strategic alignment.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">4. Third-Party Links</h2>
                        <p>
                            This site may contain links to external platforms, including LinkedIn. We are not responsible for the privacy practices of external sites.
                        </p>
                    </section>

                    <section className="pt-12 border-t border-white/5">
                        <p className="text-slate-500 text-sm">
                            Contact: legal@automatingwithai.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
