export type LegalSection = {
  id: string;
  title: string;
  zhTitle: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  closing?: string;
  links?: readonly { label: string; href: string }[];
};

export type LegalDocument = {
  kind: "privacy" | "terms";
  title: string;
  zhTitle: string;
  intro: string;
  zhIntro: string;
  summary: readonly { label: string; text: string }[];
  sections: readonly LegalSection[];
};

export const privacyPolicy: LegalDocument = {
  kind: "privacy",
  title: "Privacy Policy",
  zhTitle: "隐私政策",
  zhIntro: "本政策说明本信息网站及相关咨询中的个人信息处理方式。",
  intro:
    "This policy explains how information is handled when you visit our informational website or contact us about life-science research, development, and international coordination.",
  summary: [
    { label: "Scope · 适用范围", text: "The public website and related inquiries." },
    { label: "Information · 信息", text: "Contact information and technical website data." },
    {
      label: "Your choices · 您的选择",
      text: "Request information, corrections, or deletion by email.",
    },
  ],
  sections: [
    {
      id: "scope-and-contact",
      title: "Scope, publication name, and contact",
      zhTitle: "适用范围、发布名称与联系方式",
      paragraphs: [
        "This Privacy Policy applies to www.chinabiotechgroup.com and chinabiotechgroup.com (the Site), including its public information pages and inquiries sent to the contact address published on the Site. China Biotech Group / 中国生物科技集团 is the publication name used on the Site. References to we, us, and our in this policy refer to the administration of this website under that name.",
        "The Site describes research, development, and international coordination in the life sciences in general terms. This policy concerns personal information associated with visiting the Site and corresponding with its administration. It is not a privacy notice for a clinical study, patient service, research-participant database, or independently operated payment service.",
        "For questions about this policy, website administration, or the handling of your information, contact contact@chinabiotechgroup.com. A separate project or service that involves different data processing should provide its own information identifying the responsible operator and the applicable privacy terms before that processing begins.",
      ],
      links: [
        { label: "Contact website administration", href: "mailto:contact@chinabiotechgroup.com" },
      ],
    },
    {
      id: "information-you-provide",
      title: "Information you choose to provide",
      zhTitle: "您主动提供的信息",
      paragraphs: [
        "You can read the public pages without creating an account or submitting a contact form. If you email us, the information received can include your name, email address, organization, professional role, the subject and contents of your inquiry, attachments, and the correspondence needed to respond. Your email provider may also include routing and message metadata.",
        "Provide only information that is relevant to your inquiry and that you are entitled to share. Do not send patient records, identifiable genetic information, medical histories, identity-document scans, payment-card credentials, passwords, wallet private keys, or recovery phrases to the general contact address. An appropriate secure channel and specific processing terms would be needed for information requiring additional protection.",
        "Sending an inquiry is voluntary. If you do not provide a reply address or enough context, we may be unable to answer. Reading the Site does not require you to disclose your identity or enter into a research or commercial relationship.",
      ],
    },
    {
      id: "technical-information",
      title: "Technical information associated with visits",
      zhTitle: "访问相关的技术信息",
      paragraphs: [
        "When your browser requests a page, the hosting and delivery infrastructure processes technical information needed to return it. Depending on the request and the provider's configuration, this can include an IP address, requested URL, request time, browser or device information, HTTP headers, referring page, response status, and diagnostic or security logs. Approximate location may be derived from an IP address; this is not precise device-location tracking.",
        "Such information supports page delivery, troubleshooting, availability, and protection against malicious traffic. It can be processed by infrastructure providers even when you have not contacted us. The amount of logging, access to logs, and retention depend on the service and its configuration; the Site does not promise anonymous browsing merely because it has no account-registration form.",
      ],
    },
    {
      id: "cookies-and-browser-storage",
      title: "Cookies, browser storage, and fonts",
      zhTitle: "Cookie、浏览器存储与字体",
      paragraphs: [
        "The current public pages do not ask you to sign in, subscribe to a newsletter, or select personalized advertisements. Cookies or similar technologies used by hosting or security infrastructure may nevertheless support essential delivery, protection, or technical operation. Browser caching may store page assets, fonts, and installation-related resources on your device.",
        "The Site loads its Noto fonts from Google Fonts. Loading these resources causes your browser to connect to Google-operated font servers and transmit the technical information needed for the request, including your IP address and request headers. This connection is distinct from a customer account or payment transaction. Google's privacy information describes its handling of information associated with its services.",
        "The Site also includes an existing Grok app-builder extension script served from grok.com. Requesting that script transmits technical request information to its operator, and the script can run in your browser to support app-builder features. Its handling of information is governed by the relevant provider terms and privacy information. These external-resource connections are part of the current Site, even when no inquiry is sent.",
        "You can manage cookies and site data through your browser settings, remove cached resources, or use browser controls to restrict third-party requests. These choices may affect appearance or functionality. If optional tracking or a new feature requiring consent is introduced, the relevant information and any legally required consent mechanism must be provided before it is used. Visiting the Site is not treated as consent to every possible future use of your information.",
      ],
      links: [
        { label: "Google Privacy Policy", href: "https://policies.google.com/privacy" },
        { label: "Grok provider privacy information", href: "https://x.ai/legal/privacy-policy" },
      ],
    },
    {
      id: "purposes-and-legal-bases",
      title: "Purposes and legal bases for processing",
      zhTitle: "处理目的与法律依据",
      paragraphs: [
        "Information associated with the Site is used for the purposes relevant to your interaction. Where the GDPR, UK GDPR, or another law requiring a specified legal basis applies, the basis depends on the particular activity; an inquiry does not automatically authorize unrelated processing.",
      ],
      bullets: [
        "Providing and maintaining the Site, diagnosing faults, and protecting it from abuse: legitimate interests in operating a functional and secure informational website, subject to the applicable balancing of those interests with your rights.",
        "Responding to questions and professional correspondence: legitimate interests in handling inquiries; steps at your request before a contract, where the correspondence genuinely concerns a proposed contract.",
        "Keeping records necessary to comply with binding legal requirements or respond to a lawful request: compliance with the applicable legal obligation.",
        "Processing for an optional purpose that legally requires permission: your consent, which can be withdrawn for that purpose without affecting the lawfulness of processing before withdrawal.",
      ],
      closing:
        "If information is needed for a materially different purpose, the applicable notice and legal basis must be addressed before that use. This policy does not authorize the collection of identifiable clinical or genetic research data through ordinary website inquiries.",
    },
    {
      id: "disclosure-and-providers",
      title: "Disclosure and service providers",
      zhTitle: "信息披露与服务提供商",
      paragraphs: [
        "Technical information is processed by providers involved in operating the Site. The Site is hosted through Vercel, Google Fonts supplies its external fonts, and Grok serves its app-builder extension script. Correspondence can also be processed by email-delivery and mailbox providers. The relevant providers may process information on behalf of the website administration or for their own service-security and legal purposes, according to their role and terms.",
        "Access to inquiry information should be limited to people and providers who need it to handle the inquiry, administer the Site, obtain professional advice, or meet legal obligations. Information may be disclosed when legally required, to address a substantiated security incident or fraud, or to establish, exercise, or defend legal rights. A provider's involvement is not permission to disclose information unrelated to its purpose.",
        "The Site does not provide a visitor-data marketplace or an advertising audience service. Personal information received for website inquiries is not offered for sale or used by the website administration for cross-context behavioral advertising. Where applicable law gives additional opt-out rights, you can contact us to exercise them.",
      ],
      links: [{ label: "Vercel Privacy Notice", href: "https://vercel.com/legal/privacy-notice" }],
    },
    {
      id: "external-services-and-payments",
      title: "External services and payment providers",
      zhTitle: "外部服务与支付服务提供商",
      paragraphs: [
        "The current public Site is informational and has no shopping cart, payment checkout, or facility for uploading identity-verification documents. Reading these pages does not initiate a financial transaction. This policy does not state that any payment provider has approved the Site or activated a service for it.",
        "If you independently use an external service, that service's operator determines the information it requires and provides its own privacy notice. A separately identified payment provider, including MoonPay where actually used, may collect identity, payment, wallet, transaction, and compliance information under its own applicable terms. You should review that provider's notice before submitting information.",
        "An external provider's processing is distinct from information received by the website administration. Any transaction information actually shared with us would require an identified purpose and applicable privacy disclosure. Referring to an independent provider does not remove responsibility for personal information we ourselves receive or determine how to use.",
      ],
      links: [
        { label: "MoonPay Privacy Policy", href: "https://www.moonpay.com/legal/privacy_policy" },
      ],
    },
    {
      id: "international-processing",
      title: "International processing",
      zhTitle: "跨境信息处理",
      paragraphs: [
        "Internet hosting, font delivery, and email services can involve infrastructure and personnel in more than one country. Information may therefore be processed outside your country of residence, where data-protection rules can differ. A reference to international coordination on the Site is not itself permission to send personal information to any location or party.",
        "Where applicable law restricts an international transfer, the transfer requires the appropriate legal mechanism and safeguards. These may include an applicable adequacy decision or approved contractual safeguards, depending on the recipient and transfer. Contact us for information about a transfer associated with your inquiry and any safeguards relevant to it. This policy does not represent that every provider or country has received an adequacy determination.",
      ],
    },
    {
      id: "retention",
      title: "Retention of information",
      zhTitle: "信息保存期限",
      paragraphs: [
        "Information should be retained only for as long as reasonably necessary for the purpose for which it is processed, including a period required by applicable law or necessary to resolve an ongoing dispute. Different types of information may require different retention periods.",
        "For correspondence, relevant factors include whether the inquiry remains open, whether a continuing professional relationship exists, and whether a record is needed to address a complaint or legal obligation. Technical-log retention depends on the hosting or security service, the nature of a fault or incident, and the relevant provider settings. Cached resources on your device are controlled by your browser and can be cleared by you.",
        "You can ask about retention relating to your information or request deletion. Where information must be kept for a legitimate and legally permitted reason, the reason and any applicable limitation will be explained. Backups and provider-managed systems may remove information according to their own deletion cycles rather than immediately from every copy.",
      ],
    },
    {
      id: "security",
      title: "Security and safe communication",
      zhTitle: "信息安全与安全通信",
      paragraphs: [
        "The Site is delivered over HTTPS. Hosting, account-access controls, and the limitation of information requested help reduce exposure. Security also depends on the configuration of service providers and the way correspondence is handled; no website, email system, or transmission method can guarantee absolute security.",
        "Use the contact address published on the Site and avoid including unnecessary sensitive information. If you believe information has been exposed, misdirected, or misused, contact us with a description of what happened. Do not include passwords or complete financial credentials in an incident report. Any breach notification required by applicable law remains governed by that law.",
      ],
    },
    {
      id: "privacy-rights",
      title: "Your privacy rights and choices",
      zhTitle: "您的隐私权利与选择",
      paragraphs: [
        "Your rights depend on your location, the law applicable to the processing, and the basis on which information is used. Where applicable, these can include the following rights. They are not a representation that every privacy law applies to every visitor or that every request must be granted without a legally recognized exception.",
      ],
      bullets: [
        "Request access to personal information and information about how it is processed.",
        "Request correction of inaccurate information or completion of incomplete information.",
        "Request deletion, restriction of processing, or a portable copy where the law provides that right.",
        "Object to processing based on legitimate interests, including for reasons relating to your particular situation. Where information is used for direct marketing, object to that use at any time.",
        "Withdraw consent for a consent-based purpose; withdrawal does not make earlier lawful processing unlawful.",
        "Exercise applicable rights to opt out of sale, sharing, targeted advertising, or certain profiling, and appeal a refusal where the relevant law provides an appeal right.",
      ],
      closing:
        "You can decline to send an inquiry, limit the information in a message, or manage browser storage without creating an account. Applicable rights can be exercised without discriminatory treatment for making a lawful request.",
    },
    {
      id: "requests-and-complaints",
      title: "Requests, verification, and complaints",
      zhTitle: "权利请求、身份核实与投诉",
      paragraphs: [
        "Send a request to contact@chinabiotechgroup.com with the subject Privacy request. Explain the right you wish to exercise and provide enough context to locate the relevant information, such as the email address used for correspondence and an approximate date. An authorized representative may act where permitted by law, subject to reasonable verification of that authority.",
        "Verification should be proportionate to the request and the risk of disclosing information to the wrong person. Do not send identity documents unless a justified need and an appropriate method have been explained. Requests will be addressed within the time required by the applicable law; any lawful extension, refusal, or limit should be explained, together with available appeal rights.",
        "You may also complain to the data-protection authority or other regulator competent for your location or the processing concerned. Where UK data-protection law applies, this includes the Information Commissioner's Office. Contacting us first does not prevent you from exercising a statutory complaint right.",
      ],
      links: [
        {
          label: "Send a privacy request",
          href: "mailto:contact@chinabiotechgroup.com?subject=Privacy%20request",
        },
        { label: "UK ICO complaint information", href: "https://ico.org.uk/make-a-complaint/" },
      ],
    },
    {
      id: "children-and-sensitive-data",
      title: "Children and sensitive research information",
      zhTitle: "未成年人及敏感研究信息",
      paragraphs: [
        "The Site is directed to general professional information about the life sciences, rather than services for children. It is not designed to solicit personal information from people under 18. If you believe a child has provided personal information, contact us so the circumstances and any necessary deletion or other protective steps can be assessed.",
        "The Site is not a channel for enrolling research participants or collecting identifiable health or genetic data. Such activities require appropriate notices, lawful authority, and any relevant ethical or regulatory approvals. The general language on the Site and this policy do not supply those requirements.",
      ],
    },
    {
      id: "automated-processing",
      title: "Automated processing",
      zhTitle: "自动化处理",
      paragraphs: [
        "The public information pages do not offer credit decisions, patient assessments, or personalized eligibility decisions. Hosting providers may automatically filter suspicious requests to protect the Site. Such technical protection is distinct from making a decision about a research or commercial relationship.",
        "An independent financial or payment provider may use its own fraud-prevention and verification processes under its privacy notice. If a future Site feature introduces automated decisions with legal or similarly significant effects, the relevant processing, rights, and required safeguards must be disclosed for that feature before it is used.",
      ],
    },
    {
      id: "policy-changes",
      title: "Changes and related terms",
      zhTitle: "政策更新与相关条款",
      paragraphs: [
        "This policy may be updated to reflect changes to the Site, its providers, or legal requirements. The effective date appears at the top of the page. Material changes require appropriate notice and, where the law requires it, new consent; publication alone does not retrospectively authorize a new use of information.",
        "The Terms of Service explain the scope and permitted use of the informational Site. This Privacy Policy explains information handling rather than granting permission for unrelated processing. The detailed policy text is provided in English; the Chinese headings and introductory line are navigation aids and summaries.",
      ],
      links: [{ label: "Terms of Service", href: "/terms-of-service" }],
    },
  ],
};

export const termsOfService: LegalDocument = {
  kind: "terms",
  title: "Terms of Service",
  zhTitle: "服务条款",
  zhIntro: "本条款适用于本信息网站的访问、内容使用及相关咨询。",
  intro:
    "These terms explain the scope and use of our informational website, which describes life-science research, development, and international coordination in general terms.",
  summary: [
    { label: "Website · 网站", text: "General information about the group's areas of work." },
    { label: "Engagements · 项目合作", text: "Specific projects require separately agreed terms." },
    {
      label: "Support · 联系方式",
      text: "Questions and concerns can be sent to our published email.",
    },
  ],
  sections: [
    {
      id: "scope-and-publication",
      title: "Scope and publication name",
      zhTitle: "适用范围与发布名称",
      paragraphs: [
        "These Terms of Service apply to access to and use of www.chinabiotechgroup.com and chinabiotechgroup.com (the Site). China Biotech Group / 中国生物科技集团 is the publication name used on the Site. In these terms, we, us, and our refer to the administration of this website under that name. Website questions should be directed to contact@chinabiotechgroup.com.",
        "The Site is an informational publication describing life-science research, development, and international coordination. These terms govern the public pages and associated website inquiries. They do not identify a contracting party for an undisclosed transaction or replace a contract for a separately specified project, product, or service.",
        "Nothing in these terms establishes that the publication name is a government body, a licensed financial institution, or a particular registered corporate entity. A person entering a separate engagement must be given the identity of the responsible legal entity and the terms relevant to that engagement. This website scope does not remove obligations arising from actual business activities.",
      ],
    },
    {
      id: "understanding-these-terms",
      title: "Understanding these terms",
      zhTitle: "条款理解与适用",
      paragraphs: [
        "Please read these terms before using the Site. They describe the conditions on which its content is made available, subject to applicable law. If you do not wish to use the Site on that basis, you may stop using it. Any agreement or acceptance required by law for a separate transaction must be obtained separately; merely viewing an information page is not acceptance of an undisclosed commercial contract.",
        "If you contact us on behalf of an organization, represent your role and authority accurately. The Site is intended for lawful general and professional information, rather than a service directed to children. Anyone entering a separate binding arrangement must have the legal capacity and authority required for that arrangement.",
      ],
    },
    {
      id: "nature-of-the-content",
      title: "Nature of the information published",
      zhTitle: "发布内容的性质",
      paragraphs: [
        "The Site presents the group's areas of work in general terms: research on biological systems, development that carries findings forward, and coordination of work across borders. Descriptive content is intended to help visitors understand those themes and direct relevant inquiries.",
        "Publication of a name, logo, address, contact detail, or description does not by itself constitute an offer to sell, a supply agreement, a prospectus, a promise of manufacture or import, or a commitment concerning a particular item, person, payment, use, or jurisdiction. Availability of a specific activity, deliverable, or service must be established through the relevant separate information and agreement.",
        "General descriptions should not be treated as proof of a particular license, certification, approval, affiliation, technical capability, or outcome. Where any such matter is relevant to an engagement, it must be supported by the appropriate documentation for the identified operator and activity.",
      ],
    },
    {
      id: "scientific-and-professional-context",
      title: "Scientific and professional context",
      zhTitle: "科学与专业信息的使用背景",
      paragraphs: [
        "Life-science information is context dependent and can change as evidence, methods, and regulatory requirements develop. The Site's general descriptions are not individualized medical advice, clinical instructions, diagnosis, treatment recommendations, or a representation that a particular substance or procedure is safe, effective, or authorized for a particular use.",
        "The Site is also not a source of individualized investment, legal, tax, or regulatory advice. Decisions involving clinical care, laboratory work, research participants, regulated materials, financial arrangements, or cross-border activities require the appropriate professional assessment and any applicable permissions.",
        "Where a separate project requires research ethics review, participant consent, laboratory standards, licenses, or other authorization, those requirements remain applicable. General website wording is not a substitute for them and does not grant permission for a use that would otherwise be restricted.",
      ],
    },
    {
      id: "permitted-use",
      title: "Permitted use of the Site",
      zhTitle: "网站的允许使用方式",
      paragraphs: [
        "You may access the public pages for lawful personal, professional, or internal organizational information. You may make reasonable references to publicly available content, subject to applicable copyright law and accurate attribution. A reference must not imply an endorsement, partnership, official status, or authorization that has not been granted.",
        "Use the Site in a manner consistent with its informational purpose and respectful of the rights of others. Requests sent to the contact address should be relevant, truthful, and proportionate. Access does not give you permission to use the Site's infrastructure, identity, or contact details for unrelated transactions or campaigns.",
      ],
    },
    {
      id: "prohibited-use",
      title: "Prohibited use and unlawful activity",
      zhTitle: "禁止使用与违法行为",
      paragraphs: [
        "You must not use the Site, its content, or its contact channels to carry out or facilitate unlawful conduct. In particular, you must not:",
      ],
      bullets: [
        "Impersonate the publisher, another person, a research institution, or a payment provider; misstate authority, ownership, affiliations, or the nature of an inquiry.",
        "Submit false documents, misleading transaction information, fabricated scientific evidence, or information intended to conceal the nature or origin of an activity.",
        "Attempt unauthorized access, probe systems without authorization, introduce malware, bypass security controls, or overload the Site with disruptive automated traffic.",
        "Use the Site for fraud, money laundering, terrorist financing, sanctions evasion, or an activity that violates applicable export-control or other legal restrictions.",
        "Infringe intellectual-property or privacy rights, share personal or confidential information without authority, or send abusive, unlawful, or unsolicited bulk messages.",
        "Present website content as an approval for a regulated activity or use it to bypass the rules, eligibility requirements, or verification procedures of an independent service provider.",
      ],
      closing:
        "These restrictions concern use of this Site. They do not constitute a claim that the website administration operates a regulated financial service or conducts every compliance function associated with a separate provider.",
    },
    {
      id: "inquiries-and-submissions",
      title: "Inquiries, correspondence, and submissions",
      zhTitle: "咨询、通信与提交内容",
      paragraphs: [
        "An inquiry is a request for information, not automatic acceptance of a project, order, or engagement. A reply does not create an agency, partnership, fiduciary relationship, exclusivity arrangement, or continuing obligation unless the parties expressly agree on that relationship in an appropriate agreement or applicable law provides otherwise.",
        "You remain responsible for the accuracy of information you send and for having the right to share it. Do not submit third-party confidential material, identifiable patient or research-participant data, proprietary experimental results, or sensitive credentials through the general contact address. Ordinary email is not a substitute for a separately agreed secure and confidential exchange.",
        "You retain your rights in material you submit. Sending a message permits its reasonable handling for the purpose of the inquiry and any related legal requirements, subject to the Privacy Policy; it does not grant a general license to publish your confidential material or personal information. A nondisclosure arrangement, where needed, should be agreed before disclosure.",
      ],
    },
    {
      id: "separate-engagements",
      title: "Separate projects and commercial arrangements",
      zhTitle: "独立项目与商业安排",
      paragraphs: [
        "Any specific research-related service, development project, technical collaboration, or other engagement requires separately identified parties and agreed terms. Those terms should describe the actual scope, responsibilities, deliverables, timing, price where relevant, information handling, and any conditions on participation or performance.",
        "An arrangement involving regulated activities or materials must also address the applicable permissions and restrictions. These website terms do not themselves authorize manufacture, supply, import, export, clinical use, or any transaction subject to a separate regulatory requirement.",
        "Where a separate agreement validly governs an engagement, it governs that engagement within its stated scope. These website terms continue to concern use of the public Site. Neither document can override mandatory legal rights or obligations by describing an activity as informational or independent.",
      ],
    },
    {
      id: "fees-cancellation-and-refunds",
      title: "Website access, fees, cancellation, and refunds",
      zhTitle: "网站访问、费用、取消与退款",
      paragraphs: [
        "The current public Site has no shopping cart, checkout, subscription purchase, or paid account-registration facility. No fee is charged by the website administration merely to read its public pages. Your own internet or communications provider may charge for connectivity.",
        "These terms therefore do not create a website purchase or establish a blanket no-refund policy. For any separately agreed paid engagement, the identified supplier must disclose the applicable price, taxes, payment conditions, cancellation process, fulfillment obligations, and refund arrangements before the commitment is made, together with any mandatory consumer information.",
        "If you have a billing concern relating to a separate arrangement, contact the supplier identified in that arrangement. For a question about a communication using this Site's name or contact details, write to contact@chinabiotechgroup.com with the relevant context. Do not send full card numbers, passwords, private keys, or recovery phrases.",
      ],
    },
    {
      id: "independent-payment-services",
      title: "Independent payment and digital-asset services",
      zhTitle: "独立支付与数字资产服务",
      paragraphs: [
        "The current informational pages do not process a payment, hold a visitor's funds, execute a trade, or provide a wallet-custody interface. The Site's publication does not indicate that a payment integration is active or that a provider has approved any business application.",
        "If a separately identified arrangement uses an independent payment or digital-asset provider, including MoonPay where actually used, the provider's applicable terms govern its own service. The provider may impose identity checks, geographic restrictions, fees, transaction limits, approval requirements, and other conditions. Review the terms displayed for the actual service before authorizing a transaction.",
        "A provider's financial-service role is separate from the obligations of the seller or service supplier. Using an external processor does not transfer the supplier's duties concerning an underlying engagement, delivery, cancellation, refunds, or lawful conduct to that processor. Responsibility depends on the actual arrangement and applicable law.",
        "For any digital-asset transaction you independently authorize, confirm the asset, network, recipient, amount, fees, and provider conditions. Blockchain transactions may be difficult or impossible to reverse, and asset values may change. The general information on this Site is not advice to make such a transaction or a guarantee of its acceptance or outcome.",
      ],
      links: [
        { label: "MoonPay Terms of Use", href: "https://www.moonpay.com/legal/terms_of_use" },
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual property and attribution",
      zhTitle: "知识产权与署名",
      paragraphs: [
        "Names, marks, text, design, and other material appearing on the Site may be protected by intellectual-property rights belonging to the relevant rights holders. Public access does not transfer those rights or grant permission to register, reproduce, or commercially exploit the Site's identity as your own.",
        "Uses permitted by law, including appropriate quotation or other statutory exceptions, remain available. For reproduction beyond those uses, request permission from the relevant rights holder. Do not remove material attribution, alter content in a way that misrepresents its meaning, or imply that an external activity is endorsed by China Biotech Group without authorization.",
      ],
    },
    {
      id: "external-links",
      title: "External links and separate operators",
      zhTitle: "外部链接与独立运营方",
      paragraphs: [
        "A link to a third-party website is provided for its stated purpose and does not automatically incorporate that website's content into this publication. Third-party sites can have different terms, privacy practices, availability, and operators. Review the destination and the relevant terms before sharing information or taking action.",
        "The presence of a link, a similar name, or a common visual identity is not sufficient to establish common ownership, an agency relationship, or responsibility for an independent operator's service. Equally, describing an operator as separate does not eliminate responsibility for conduct that the website administration actually directs or for legal obligations that apply to it.",
      ],
    },
    {
      id: "privacy",
      title: "Privacy and information handling",
      zhTitle: "隐私与信息处理",
      paragraphs: [
        "The Privacy Policy explains how information associated with visits and inquiries is handled, including hosting, fonts, technical data, retention considerations, and privacy requests. It also distinguishes this Site's information handling from processing by independently operated services.",
        "Reading these terms does not constitute consent to all forms of data processing, waive your privacy rights, or supply consent for research participation. Where a particular activity requires consent or a separate privacy notice, that requirement must be addressed for the actual activity.",
      ],
      links: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    {
      id: "availability-and-accuracy",
      title: "Availability, accuracy, and changes to content",
      zhTitle: "可用性、准确性与内容变更",
      paragraphs: [
        "The Site is made available for general information and may be updated, temporarily unavailable, or interrupted by maintenance, infrastructure faults, or other events. It does not promise continuous access, a particular response time, or that every general description is complete for a visitor's intended purpose.",
        "If you identify an error or an inaccessible page, contact us with its URL and a description. Before relying on a specific technical, regulatory, or commercial statement for a consequential decision, seek current information appropriate to the decision and the responsible operator.",
        "To the extent permitted by applicable law, general website content is provided as available without a separate warranty of merchantability, fitness for a particular purpose, or a particular outcome. This qualification does not excuse fraud, misleading conduct, or a failure to meet duties that cannot lawfully be excluded.",
      ],
    },
    {
      id: "responsibility-and-rights",
      title: "Responsibility and rights that remain protected",
      zhTitle: "责任与依法保留的权利",
      paragraphs: [
        "You are responsible for your use of the Site and decisions you make using general information. To the extent permitted by law, the website administration is not responsible for indirect or consequential loss arising solely from use of general informational content or temporary unavailability. Whether a limitation applies depends on the actual circumstances and applicable law.",
        "Nothing in these terms excludes or limits liability for fraud or fraudulent misrepresentation, death or personal injury caused by negligence where that liability cannot be excluded, or any other liability that applicable law prohibits excluding or limiting. Mandatory consumer, privacy, and other statutory rights remain unaffected.",
        "These terms do not require you to indemnify an unidentified party, give up a non-waivable remedy, or accept a blanket forfeiture of rights. A separate engagement may contain its own valid allocation of responsibility, subject to the law that applies to that engagement.",
      ],
    },
    {
      id: "access-and-security",
      title: "Access restrictions and security concerns",
      zhTitle: "访问限制与安全问题",
      paragraphs: [
        "Access may be restricted where reasonably necessary to address abuse, a security threat, a violation of these website conditions, or a binding legal requirement. Technical protection measures should be proportionate to the issue. A website-access restriction is distinct from cancellation of a separate engagement or a provider's control of a transaction.",
        "If you believe access has been restricted in error, or suspect misuse of the Site's name or contact details, contact us with the relevant URL and circumstances. Do not attempt to bypass security controls while the issue is being reviewed.",
      ],
    },
    {
      id: "concerns-and-applicable-law",
      title: "Concerns, applicable law, and disputes",
      zhTitle: "问题处理、适用法律与争议",
      paragraphs: [
        "For a concern about the Site, email contact@chinabiotechgroup.com with the relevant page, the nature of the issue, and a reply address. An initial effort to resolve a matter through correspondence does not prevent you from using a statutory complaint route or seeking an available legal remedy.",
        "Applicable law and jurisdiction are determined by the relevant legal rules and any valid agreement governing a specific engagement. These general website terms do not impose an unverified governing-law jurisdiction, mandatory arbitration, or a waiver of access to a court that has jurisdiction under applicable law. A separate contract should identify its parties and dispute arrangements clearly.",
      ],
      links: [
        { label: "Contact website administration", href: "mailto:contact@chinabiotechgroup.com" },
      ],
    },
    {
      id: "updates-and-interpretation",
      title: "Updates and interpretation",
      zhTitle: "更新与条款解释",
      paragraphs: [
        "These terms may be updated to reflect changes to the public Site or relevant legal requirements. The effective date appears at the top of this page. Changes apply prospectively to website use from their stated effective date, subject to any additional notice or acceptance required by law; they do not retrospectively alter a separate agreement merely by being published here.",
        "If a provision is unenforceable, the remaining provisions continue only to the extent consistent with applicable law. A failure to enforce a condition on one occasion does not by itself waive a lawful right on another occasion. Section headings assist navigation and do not expand the scope of a provision.",
        "The detailed terms are provided in English. Chinese headings and the introductory line are navigation aids and summaries. These website terms concern the informational publication; they should be read with the Privacy Policy and any separately disclosed terms that actually apply to a specific engagement.",
      ],
      links: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
  ],
};
