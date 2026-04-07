"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Clock, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact | Floxo";
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <section className="mb-12 max-w-2xl">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Reach the Floxo team with questions about pilots, pricing, or
            enterprise deployments. We read every message and reply as soon as
            we can.
          </p>
        </section>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-foreground">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Company name (optional)"
                className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="How can we help?"
                className="w-full resize-y rounded-lg border border-border bg-input px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-coral px-6 py-3 text-sm font-semibold text-coral-foreground transition hover:opacity-90 sm:w-auto"
            >
              Send message
            </button>
          </form>

          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background/80">
                  <Mail className="h-5 w-5 text-coral" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a
                    href="mailto:hello@floxo.io"
                    className="mt-1 inline-block text-sm text-muted-foreground transition-colors hover:text-coral"
                  >
                    hello@floxo.io
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background/80">
                  <MapPin className="h-5 w-5 text-coral" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Location</p>
                  <p className="mt-1 text-sm text-muted-foreground">London, UK</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background/80">
                  <Clock className="h-5 w-5 text-coral" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Response time
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16 rounded-2xl border border-border bg-surface px-6 py-10 text-center sm:px-10">
          <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Prefer to schedule a call?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Book a quick walkthrough and we&apos;ll show you how Floxo fits your
            stores.
          </p>
          <Link
            href="/demo"
            className="mt-6 inline-flex text-sm font-semibold text-coral underline-offset-4 transition hover:underline"
          >
            Schedule a call
          </Link>
        </section>
      </div>
    </div>
  );
}
