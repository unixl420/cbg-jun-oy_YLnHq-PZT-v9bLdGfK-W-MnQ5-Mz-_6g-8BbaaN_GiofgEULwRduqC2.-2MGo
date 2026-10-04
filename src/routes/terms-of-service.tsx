import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { termsOfService } from "@/lib/legal-documents";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service | China Biotech Group" },
      {
        name: "description",
        content:
          "Terms for accessing the China Biotech Group informational website, scientific content, inquiries, and separately governed external services.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.chinabiotechgroup.com/terms-of-service" }],
  }),
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
  return <LegalPage document={termsOfService} />;
}
