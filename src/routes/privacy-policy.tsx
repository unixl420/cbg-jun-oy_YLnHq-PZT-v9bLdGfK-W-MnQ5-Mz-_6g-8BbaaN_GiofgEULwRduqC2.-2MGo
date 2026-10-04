import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { privacyPolicy } from "@/lib/legal-documents";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | China Biotech Group" },
      {
        name: "description",
        content:
          "How the China Biotech Group informational website handles inquiries, technical information, external providers, and privacy requests.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.chinabiotechgroup.com/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return <LegalPage document={privacyPolicy} />;
}
