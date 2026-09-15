"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionIntro } from "@/components/pages/about/sections/foundation/SectionIntro";
import { SectionWrapper } from "@/components/pages/about/sections/foundation/SectionWrapper";
import { gradientButtonClass, revealUp } from "./shared";
import { apiUrl } from "@/lib/api";

const emptyForm = { fullName: "", email: "", message: "" };

export function QuestionsSection() {
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(apiUrl("/contact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, subject: "Preachers Kids Network question", source: "pkn-questions" }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Sorry, your question could not be sent. Please try again.");
      }

      setStatus({ type: "success", message: data.message });
      setFormData(emptyForm);
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent";

  return (
    <SectionWrapper>
      <motion.div {...revealUp}>
        <SectionIntro
          label="ASK US"
          title="Send Us Your Questions"
          description="Have a question about the Preachers Kids Network? Send it our way and we'll get back to you."
        />
      </motion.div>

      <motion.form
        {...revealUp}
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-2xl space-y-6 rounded-4xl border border-slate-200/80 bg-white p-8 shadow-[0_20px_70px_-40px_rgba(15,23,42,0.35)] sm:p-10"
      >
        <div>
          <label htmlFor="pkn-name" className="block text-sm font-medium text-slate-700 mb-2">
            Name
          </label>
          <Input id="pkn-name" name="fullName" value={formData.fullName} onChange={handleChange} className={inputClass} required />
        </div>

        <div>
          <label htmlFor="pkn-email" className="block text-sm font-medium text-slate-700 mb-2">
            Email
          </label>
          <Input id="pkn-email" type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} required />
        </div>

        <div>
          <label htmlFor="pkn-question" className="block text-sm font-medium text-slate-700 mb-2">
            Your Question
          </label>
          <Textarea
            id="pkn-question"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
            required
          />
        </div>

        <Button type="submit" disabled={isSubmitting} className={`${gradientButtonClass} w-full justify-center py-6`}>
          {isSubmitting ? "Sending..." : "Submit Question"}
        </Button>

        {status && (
          <p
            role="status"
            className={`text-center text-sm ${status.type === "success" ? "text-green-600" : "text-red-600"}`}
          >
            {status.message}
          </p>
        )}
      </motion.form>
    </SectionWrapper>
  );
}
