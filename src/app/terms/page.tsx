"use client";

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-[#000212] text-slate-300 p-8 md:p-24 font-sans selection:bg-cyan-500/30">
            <div className="max-w-3xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors mb-12 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Hub
                </Link>

                <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Terms of Service</h1>
                <p className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-12">Last Updated: January 2026</p>

                <div className="space-y-12 leading-relaxed text-lg text-slate-400">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">1. Service Description</h2>
                        <p>
                            Automating with AI provides LinkedIn amplification and product launch services.
                            We do not guarantee specific reach or conversion outcomes. All metrics provided are historical averages.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">2. Lead Qualification</h2>
                        <p>
                            Submission of a launch request does not guarantee a partnership. Our internal board reserves the right
                            to reject leads that do not align with our high-authority content standards.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">3. Intellectual Property</h2>
                        <p>
                            All agency methodology, AI Board logic, and "Master Formula" content structures remain the exclusive
                            property of Automating with AI.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">4. Professional Ethics</h2>
                        <p>
                            Clients must represent their products accurately. We will not promote deceptive or harmful AI tools.
                        </p>
                    </section>

                    <section className="pt-12 border-t border-white/5">
                        <p className="text-slate-500 text-sm">
                            Management: CEO Unit-01
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
