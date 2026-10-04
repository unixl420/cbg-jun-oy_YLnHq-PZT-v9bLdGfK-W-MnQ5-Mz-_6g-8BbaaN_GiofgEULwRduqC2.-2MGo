import { ArrowLeft, ArrowUpRight, FileText, ShieldCheck } from "lucide-react";
import type { LegalDocument } from "@/lib/legal-documents";

const linkStyle =
  "rounded-sm underline decoration-mark-blue/70 underline-offset-4 transition-colors hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fg";

export function LegalPage({ document }: { document: LegalDocument }) {
  const Icon = document.kind === "privacy" ? ShieldCheck : FileText;

  return (
    <main
      lang="en"
      id="top"
      className="relative isolate min-h-screen overflow-x-hidden bg-bg text-fg"
    >
      <a
        href="#policy-content"
        className="sr-only z-50 rounded-lg bg-fg px-4 py-3 text-bg focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to policy content
      </a>
      <div
        className="pointer-events-none fixed inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 12% 12%, rgb(203 30 28 / 0.09), transparent 52%), radial-gradient(ellipse at 90% 55%, rgb(26 90 133 / 0.12), transparent 58%)",
        }}
      />

      <header className="relative z-10 mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-5 py-7 sm:px-8">
        <a
          href="/"
          className="flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fg"
          aria-label="China Biotech Group home"
        >
          <img
            src="/logos/cbp-mark.png"
            alt=""
            width={494}
            height={490}
            className="size-10 object-contain"
          />
          <span>
            <span lang="zh-CN" className="block font-display text-sm tracking-wide">
              中国生物科技集团
            </span>
            <span className="mt-1 block text-[0.625rem] tracking-label text-muted uppercase">
              China Biotech Group
            </span>
          </span>
        </a>
        <nav aria-label="Legal pages" className="flex gap-5 text-xs sm:text-sm">
          <a
            href="/privacy-policy"
            aria-current={document.kind === "privacy" ? "page" : undefined}
            className={`${linkStyle} ${document.kind === "privacy" ? "text-fg" : "text-muted"}`}
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            aria-current={document.kind === "terms" ? "page" : undefined}
            className={`${linkStyle} ${document.kind === "terms" ? "text-fg" : "text-muted"}`}
          >
            Terms of Service
          </a>
        </nav>
      </header>

      <section
        aria-labelledby="policy-title"
        className="relative z-10 mx-auto max-w-4xl px-5 pt-9 pb-12 text-center sm:px-8 sm:pt-16 sm:pb-16"
      >
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-mark-blue/20 text-fg">
          <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
        </span>
        <p
          lang="zh-CN"
          className="mt-6 font-display text-xl font-medium tracking-wide text-muted sm:text-2xl"
        >
          {document.zhTitle}
        </p>
        <h1 id="policy-title" className="mt-3 text-3xl font-medium tracking-tight sm:text-5xl">
          {document.title}
        </h1>
        <div className="my-6 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="h-px w-12 bg-mark-red/80" />
          <span className="size-1 rounded-full bg-fg/40" />
          <span className="h-px w-12 bg-mark-blue" />
        </div>
        <p lang="zh-CN" className="text-sm leading-relaxed text-muted">
          {document.zhIntro}
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          {document.intro}
        </p>
        <p className="mt-6 text-xs text-muted">
          Last updated and effective: <time dateTime="2026-10-05">5 October 2026</time>
        </p>
      </section>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="mb-12 grid gap-4 md:grid-cols-3">
          {document.summary.map((item) => (
            <div
              key={item.label}
              className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]"
            >
              <p className="text-[0.625rem] font-medium tracking-label text-muted uppercase">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-fg">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="grid items-start gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
          <aside className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] lg:sticky lg:top-6">
            <nav aria-label="Policy contents">
              <p className="text-xs font-medium tracking-label text-muted uppercase">
                Contents{" "}
                <span lang="zh-CN" className="ml-2 tracking-normal">
                  目录
                </span>
              </p>
              <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {document.sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex items-start gap-3 rounded-sm text-xs leading-5 text-muted transition-colors hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fg"
                    >
                      <span aria-hidden="true" className="min-w-5 text-fg/45 tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article
            id="policy-content"
            aria-labelledby="policy-title"
            className="min-w-0 scroll-mt-8"
          >
            <div className="space-y-10 sm:space-y-12">
              {document.sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`${section.id}-heading`}
                  className="scroll-mt-8 border-b border-border pb-10 last:border-0 last:pb-0 sm:pb-12"
                >
                  <p lang="zh-CN" className="mb-2 text-xs tracking-wide text-muted">
                    {section.zhTitle}
                  </p>
                  <h2
                    id={`${section.id}-heading`}
                    className="flex gap-3 text-lg font-medium leading-7 sm:text-xl"
                  >
                    <span aria-hidden="true" className="text-muted tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-muted sm:text-[0.9375rem] sm:leading-8">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.bullets ? (
                      <ul className="list-disc space-y-3 pl-5 marker:text-mark-blue">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="pl-1">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {section.closing ? <p>{section.closing}</p> : null}
                    {section.links ? (
                      <ul className="flex flex-wrap gap-x-5 gap-y-3 pt-1">
                        {section.links.map((link) => (
                          <li key={link.href}>
                            <a
                              href={link.href}
                              className={`${linkStyle} inline-flex items-center gap-1.5 break-all`}
                            >
                              {link.label}
                              <ArrowUpRight className="size-3.5 shrink-0" aria-hidden="true" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </section>
              ))}
            </div>
            <div className="mt-12 rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8">
              <p lang="zh-CN" className="font-display text-lg">
                联系与咨询
              </p>
              <h2 className="mt-1 text-lg font-medium">
                Questions about this {document.kind === "privacy" ? "policy" : "document"}?
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                Contact the website administration using the email published on our home page.
                Please include the relevant page and a brief description of your question.
              </p>
              <a
                href="mailto:contact@chinabiotechgroup.com"
                className={`${linkStyle} mt-4 inline-block break-all text-sm text-fg`}
              >
                contact@chinabiotechgroup.com
              </a>
            </div>
          </article>
        </div>
      </div>

      <footer className="relative z-10 border-t border-border px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <a href="/" className={`${linkStyle} inline-flex w-fit items-center gap-2`}>
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            Return to home
          </a>
          <p>© China Biotech Group — informational publication.</p>
          <a href="#top" className={`${linkStyle} w-fit`}>
            Back to top
          </a>
        </div>
      </footer>
    </main>
  );
}
