import type { Metadata } from "next";
import { StaticPage } from "@/components/StaticPage";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using This Little Piggy Marketplace."
};

export default function TermsPage() {
  return (
    <StaticPage
      eyebrow="Terms"
      title="Terms of Use"
      intro="Last updated: 2 June 2026. These terms apply to your use of the This Little Piggy website and early access registration experience."
      sections={[
        {
          title: "Early stage service",
          body: [
            "This Little Piggy is currently in a pre-launch stage. The website provides product information and an early access registration pathway.",
            "Marketplace features, trade matching, user accounts, and related tools may change before launch."
          ]
        },
        {
          title: "Your responsibilities",
          body: [
            "You agree to provide accurate information when contacting us or registering interest.",
            "If you later use marketplace features, you will be responsible for your own listings, communications, trades, safety checks, and decisions."
          ]
        },
        {
          title: "No guarantee of trades",
          body: [
            "We want to help people trade up, but we cannot guarantee that any user will receive a trade, complete a trade, or reach a target item.",
            "Any examples on the site are for inspiration and product explanation unless clearly described as verified user outcomes."
          ]
        },
        {
          title: "Content and intellectual property",
          body: [
            "The This Little Piggy name, branding, website content, and product concepts are owned by or licensed to This Little Piggy.",
            "You may not copy, resell, or misuse our content or branding without permission."
          ]
        },
        {
          title: "Contact",
          body: [
            "Questions about these terms can be sent to hello@thislittlepiggymarketplace.com.",
            "As the product develops, we may update these terms to reflect new features and legal requirements."
          ]
        }
      ]}
    />
  );
}
