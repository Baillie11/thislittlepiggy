import type { Metadata } from "next";
import { StaticPage } from "@/components/StaticPage";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about This Little Piggy and the trade-up marketplace we are building."
};

export default function AboutPage() {
  return (
    <StaticPage
      eyebrow="About"
      title="Built for people who want to trade up."
      intro="This Little Piggy is a new trade-up marketplace inspired by the famous paperclip-to-house journey and the people who have kept that idea alive."
      sections={[
        {
          title: "Our story",
          body: [
            "Kyle MacDonald famously traded one red paperclip into a house. Since then, thousands of people have tried their own trade-up journeys, starting with everyday items and working toward kayaks, boats, cars, campers, and homes.",
            "This Little Piggy honours that spirit. We are building a marketplace that makes trade-up journeys easier to plan, easier to track, and easier to share."
          ]
        },
        {
          title: "What we are building",
          body: [
            "The app will help people set a target item, list what they are starting with, discover possible trade opportunities, and follow their progress step by step.",
            "We are starting with a landing page and early access waitlist while the first version of the marketplace is developed."
          ]
        },
        {
          title: "Our promise",
          body: [
            "We will be honest about where the product is up to. We are not claiming completed trades, users, or registrations we do not have.",
            "The goal is simple: help people start with what they have and move toward something bigger."
          ]
        }
      ]}
    />
  );
}
