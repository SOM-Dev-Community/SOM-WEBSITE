"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Newsletter } from '@/components/pages/home/sections/Newsletter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionWrapper } from '@/components/pages/about/sections/foundation/SectionWrapper';
import { SectionHeading, gradientButtonClass, revealUp } from '@/components/pages/shared/section-primitives';
import { apiUrl } from '@/lib/api';

const emptyForm = {
    fullName: '',
    email: '',
    subject: '',
    message: ''
};

const inputClass =
    'w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent';

export function ContactPage() {
    const [formData, setFormData] = useState(emptyForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        try {
            const response = await fetch(apiUrl('/contact'), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, source: 'contact-page' })
            });
            const data = await response.json().catch(() => ({}));

            if (!response.ok || !data.success) {
                throw new Error(data.message || 'Sorry, your message could not be sent. Please try again.');
            }

            setStatus({ type: 'success', message: data.message });
            setFormData(emptyForm);
        } catch (error) {
            setStatus({
                type: 'error',
                message: error instanceof Error ? error.message : 'Network error. Please check your connection and try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <ReactLenis root>
            <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
                <Header />

                <main>
                    {/* Hero Section */}
                    <section
                        data-nav-theme="dark"
                        className="relative isolate overflow-hidden bg-slate-950 pt-40 pb-28 text-white"
                    >
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 -z-20 bg-cover bg-center"
                            style={{
                                backgroundImage: 'url("https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
                            }}
                        />
                        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-slate-950/65" />

                        <motion.div {...revealUp} className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
                            <SectionHeading as="h1" badge="Contact" title="Get In Touch" tone="dark" align="center" />
                            <p className="mt-8 text-base leading-relaxed text-slate-200 sm:text-lg">
                                We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                            </p>
                        </motion.div>
                    </section>

                    {/* Contact Form */}
                    <SectionWrapper>
                        <motion.form
                            {...revealUp}
                            onSubmit={handleSubmit}
                            className="mx-auto w-full max-w-2xl space-y-6 rounded-4xl border border-slate-200/80 bg-white p-8 shadow-[0_20px_70px_-40px_rgba(15,23,42,0.35)] sm:p-10"
                        >
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                                    Full Name
                                </label>
                                <Input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="John Doe"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className={inputClass}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                    Email Address
                                </label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={inputClass}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                                    Subject
                                </label>
                                <Input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="How can we help?"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={inputClass}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your message here..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    className={`${inputClass} resize-none`}
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className={`${gradientButtonClass} w-full justify-center py-6`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>

                            {status && (
                                <p
                                    role="status"
                                    className={`text-center text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}
                                >
                                    {status.message}
                                </p>
                            )}
                        </motion.form>
                    </SectionWrapper>
                </main>

                <Newsletter />
                <Footer />
            </div>
        </ReactLenis>
    );
};
