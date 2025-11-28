"use client";
import React, { FormEvent, useState } from 'react'
import { TbSend } from 'react-icons/tb';

function ContactComponent() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus("submitting");
        // Simulate async send
        setTimeout(() => {
            setFormStatus("success");
            (e.currentTarget as HTMLFormElement).reset();
            // Reset success message after a short delay
            setTimeout(() => setFormStatus("idle"), 3000);
        }, 800);
    };

    return (
        <>
            {/* Contact form */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 ring-1 ring-black/5">
                <h3 className="text-xl font-semibold text-gray-900">Send a message</h3>
                <form onSubmit={handleContactSubmit} className="mt-6 space-y-5" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your name</label>
                            <input id="name" name="name" type="text" required minLength={2} className="mt-1 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400" placeholder="Kishor Gupta" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input id="email" name="email" type="email" required className="mt-1 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400" placeholder="you@example.com" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject (optional)</label>
                        <input id="subject" name="subject" type="text" className="mt-1 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400" placeholder="Project inquiry" />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" name="message" required minLength={10} rows={5} className="mt-1 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400" placeholder="Tell me a bit about your project, goals, and timelines…" />
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            type="submit"
                            disabled={formStatus === "submitting"}
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-600 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            <TbSend className={`h-5 w-5 ${formStatus === "submitting" ? "animate-pulse" : ""}`} />
                            {formStatus === "submitting" ? "Sending…" : "Send message"}
                        </button>
                        <output aria-live="polite" className="text-sm">
                            {formStatus === "success" && <span className="text-emerald-600 font-medium">Message sent! I'll reply shortly.</span>}
                        </output>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactComponent
