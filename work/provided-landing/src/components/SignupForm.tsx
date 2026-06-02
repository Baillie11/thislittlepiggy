"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function SignupForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: String(formData.get("firstName") ?? ""),
      email: String(formData.get("email") ?? ""),
      country: String(formData.get("country") ?? ""),
      startingItem: String(formData.get("startingItem") ?? ""),
      targetItem: String(formData.get("targetItem") ?? ""),
      betaTester: formData.get("betaTester") === "on"
    };

    const email = payload.email.trim();
    const firstName = payload.firstName.trim();

    if (!firstName || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter your first name and a valid email address.");
      return;
    }

    const subject = encodeURIComponent("This Little Piggy waitlist signup");
    const body = encodeURIComponent(
      [
        "New waitlist signup:",
        "",
        `First name: ${firstName}`,
        `Email: ${email}`,
        `Country: ${payload.country || "Not provided"}`,
        `Starting item: ${payload.startingItem || "Not provided"}`,
        `Target item: ${payload.targetItem || "Not provided"}`,
        `Beta tester: ${payload.betaTester ? "Yes" : "No"}`
      ].join("\n")
    );

    window.location.href = `mailto:hello@thislittlepiggymarketplace.com?subject=${subject}&body=${body}`;
    setStatus("success");
    setMessage("Your email app should open with your waitlist details.");
    form.reset();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 rounded-[2rem] border border-white/70 bg-white/90 p-5 shadow-soft backdrop-blur sm:grid-cols-2 sm:p-7"
    >
      <label className="grid gap-2 text-sm font-semibold text-piggy-charcoal">
        First Name
        <input
          required
          name="firstName"
          autoComplete="given-name"
          className="focus-ring rounded-2xl border border-black/10 bg-white px-4 py-3 text-base font-medium"
          placeholder="Avery"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-piggy-charcoal">
        Email Address
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className="focus-ring rounded-2xl border border-black/10 bg-white px-4 py-3 text-base font-medium"
          placeholder="you@example.com"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-piggy-charcoal">
        Country
        <input
          name="country"
          autoComplete="country-name"
          className="focus-ring rounded-2xl border border-black/10 bg-white px-4 py-3 text-base font-medium"
          placeholder="Australia"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-piggy-charcoal">
        What would you start trading with?
        <input
          name="startingItem"
          className="focus-ring rounded-2xl border border-black/10 bg-white px-4 py-3 text-base font-medium"
          placeholder="Old bike, kayak, Xbox, tools..."
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-piggy-charcoal sm:col-span-2">
        What are you hoping to trade up to?
        <input
          name="targetItem"
          className="focus-ring rounded-2xl border border-black/10 bg-white px-4 py-3 text-base font-medium"
          placeholder="Campervan, car, boat, tiny home..."
        />
      </label>
      <label className="flex items-start gap-3 rounded-2xl bg-piggy-cream p-4 text-sm font-semibold text-piggy-charcoal sm:col-span-2">
        <input
          name="betaTester"
          type="checkbox"
          className="focus-ring mt-1 h-4 w-4 rounded border-black/20 accent-piggy-orange"
        />
        <span>I&apos;d like to be a beta tester</span>
      </label>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "loading"}
          className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-piggy-orange px-7 py-3 text-base font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#ea7000] disabled:cursor-wait disabled:opacity-70"
        >
          {status === "loading" ? "Joining..." : "Join The Waitlist"}
        </button>
        <p
          role="status"
          className={`min-h-6 text-sm font-semibold ${
            status === "error" ? "text-red-700" : "text-piggy-charcoal"
          }`}
        >
          {message}
        </p>
      </div>
    </form>
  );
}
