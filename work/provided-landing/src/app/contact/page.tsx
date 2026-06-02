import type { Metadata } from "next";
import { StaticPage } from "@/components/StaticPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact This Little Piggy Marketplace."
};

export default function ContactPage() {
  return (
    <StaticPage
      eyebrow="Contact"
      title="Talk to us about trade-ups, partnerships, or early access."
      intro="We are currently collecting early interest, feedback, and ideas as This Little Piggy moves toward launch."
      ctaLabel="Email Us"
      ctaHref="mailto:hello@thislittlepiggymarketplace.com"
      sections={[
        {
          title: "Email",
          body: [
            "For general questions, early access support, partnership ideas, or feedback, email hello@thislittlepiggymarketplace.com.",
            "If you are joining early access, please include your starting item, target item, and country so we can understand what kind of trade-up journey you are planning."
          ]
        },
        {
          title: "Early access",
          body: [
            "The fastest way to register interest is through the early access form on the home page.",
            "The current form opens your email app with your details prefilled, so please make sure you send the email after it opens."
          ]
        },
        {
          title: "Response times",
          body: [
            "This Little Piggy is in its early stage, so replies may not be instant.",
            "We will do our best to respond to genuine enquiries as quickly as possible."
          ]
        }
      ]}
    />
  );
}
