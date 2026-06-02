import type { Metadata } from "next";
import { StaticPage } from "@/components/StaticPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for This Little Piggy Marketplace."
};

export default function PrivacyPolicyPage() {
  return (
    <StaticPage
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      intro="Last updated: 2 June 2026. This policy explains how This Little Piggy handles information while the site is in its early access stage."
      sections={[
        {
          title: "Information we collect",
          body: [
            "If you contact us or register for early access, we may receive your name, email address, country, starting item, target item, and any other details you choose to include.",
            "At this stage, the early access form opens your email app. Your details are sent only if you choose to send that email."
          ]
        },
        {
          title: "How we use information",
          body: [
            "We use the information you provide to respond to you, manage early access interest, understand what users want from the marketplace, and improve the product before launch.",
            "We may also use aggregated feedback to guide product decisions, but we will not present personal details publicly without permission."
          ]
        },
        {
          title: "Sharing information",
          body: [
            "We do not sell your personal information.",
            "We may use trusted service providers to operate email, hosting, analytics, or product systems. Those providers may process information only as needed to support the service."
          ]
        },
        {
          title: "Data retention",
          body: [
            "We keep early access and contact information for as long as it is useful for building, launching, and operating This Little Piggy, unless you ask us to delete it.",
            "You can contact us at hello@thislittlepiggymarketplace.com to request access, correction, or deletion of your information."
          ]
        },
        {
          title: "Changes to this policy",
          body: [
            "We may update this policy as the product grows and new features are added.",
            "When we make meaningful changes, we will update the date on this page."
          ]
        }
      ]}
    />
  );
}
